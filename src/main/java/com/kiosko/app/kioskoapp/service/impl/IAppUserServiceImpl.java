package com.kiosko.app.kioskoapp.service.impl;

import com.kiosko.app.kioskoapp.dto.Rol;
import com.kiosko.app.kioskoapp.dto.UserProfile;
import com.kiosko.app.kioskoapp.dto.UserRegistration;
import com.kiosko.app.kioskoapp.dto.mapper.RolMapper;
import com.kiosko.app.kioskoapp.dto.mapper.UserMapper;
import com.kiosko.app.kioskoapp.entities.AppUser;
import com.kiosko.app.kioskoapp.exception.ResourceAlreadyExistsException;
import com.kiosko.app.kioskoapp.exception.ResourceNotFoundException;
import com.kiosko.app.kioskoapp.repository.AppUserRepository;
import com.kiosko.app.kioskoapp.repository.AppUserRoleRepository;
import com.kiosko.app.kioskoapp.service.IAppUserService;
import com.kiosko.app.kioskoapp.util.Utils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
@Transactional
public class IAppUserServiceImpl implements IAppUserService {
    private final AppUserRepository userRepository;
    private final AppUserRoleRepository userRoleRepository;
    private final UserMapper userMapper;
    private final RolMapper rolMapper;
    private final BCryptPasswordEncoder encoder;

    @Autowired
    public IAppUserServiceImpl(AppUserRepository userRepository, AppUserRoleRepository userRoleRepository, UserMapper userMapper, RolMapper rolMapper, BCryptPasswordEncoder encoder) {
        this.userRepository = userRepository;
        this.userRoleRepository = userRoleRepository;
        this.userMapper = userMapper;
        this.rolMapper = rolMapper;
        this.encoder = encoder;
    }

    @Override
    public AppUser getById(Long id) throws ResourceNotFoundException {
        return userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User con id " + id + " no encontrado"));
    }

    @Override
    public UserProfile create(UserRegistration userRegistration, Rol rol) throws ResourceAlreadyExistsException, ResourceNotFoundException {
        AppUser appUser = userMapper.userRegistrationToAppUser(userRegistration);
        appUser.setAppUserRole(userRoleRepository.findByNombre(rol.toString()).orElseThrow(() -> new ResourceNotFoundException("Rol no encontrado")));
        if(userRepository.findByEmail(appUser.getEmail()).isPresent()) throw new ResourceAlreadyExistsException("A user with this email already exists");
        appUser.setPassword(encoder.encode(appUser.getPassword()));
        userRepository.save(appUser);
        return userMapper.appUserToUserProfile(appUser);
    }

    @Override
    public UserProfile update(UserRegistration userRegistration) throws ResourceNotFoundException {
        //Debe tener algun problema
        AppUser inputUser = userMapper.userRegistrationToAppUser(userRegistration);
        AppUser newUser = userRepository.findByEmail(userRegistration.getEmail()).orElseThrow(() -> new ResourceNotFoundException("No existe un usuario con ese email"));
        Utils.mergeObjects(inputUser, newUser);
        newUser.setPassword(encoder.encode(newUser.getPassword()));
        return userMapper.appUserToUserProfile(userRepository.save(newUser));
    }

    @Override
    public Optional<AppUser> findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<AppUser> optional = userRepository.findByEmail(username);

        if(optional.isPresent()) {
            AppUser user = optional.get();
            String[] roles = {user.getAppUserRole().getNombre()};

            return User.withUsername(user.getEmail())
                    .password(user.getPassword())
                    .roles(roles).build();
        }
        else throw new UsernameNotFoundException("User " + username + " no encontrado");
    }

    @Override
    public UserProfile getProfileByEmail(String email) {
        return userMapper.appUserToUserProfile(
                userRepository.findByEmail(email).orElseThrow(() -> new UsernameNotFoundException("User not found")));
    }
}
