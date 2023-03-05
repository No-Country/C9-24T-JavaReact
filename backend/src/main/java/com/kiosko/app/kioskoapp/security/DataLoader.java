package com.kiosko.app.kioskoapp.security;

import com.kiosko.app.kioskoapp.entities.AppUser;
import com.kiosko.app.kioskoapp.entities.AppUserRole;
import com.kiosko.app.kioskoapp.exception.ResourceNotFoundException;
import com.kiosko.app.kioskoapp.repository.AppUserRepository;
import com.kiosko.app.kioskoapp.repository.AppUserRoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class DataLoader implements ApplicationRunner {
    private final AppUserRepository appUserRepository;
    private final AppUserRoleRepository appUserRoleRepository;
    private final BCryptPasswordEncoder encoder;

    @Autowired
    public DataLoader(AppUserRepository appUserRepository, AppUserRoleRepository appUserRoleRepository, BCryptPasswordEncoder encoder) {
        this.appUserRepository = appUserRepository;
        this.appUserRoleRepository = appUserRoleRepository;
        this.encoder = encoder;
    }

    @Override
    public void run(ApplicationArguments args) throws Exception {
        if(appUserRoleRepository.findByNombre("ADMIN").isEmpty()) {
            appUserRoleRepository.save(
                    new AppUserRole(null, "ADMIN")
            );
        }
        AppUserRole adminRol = appUserRoleRepository.findByNombre("ADMIN").orElseThrow(() -> new ResourceNotFoundException("ROL ADMIN NO ENCONTRADO"));


        Optional<AppUser> user = appUserRepository.findByAppUserRoleId(adminRol.getId());
        if(user.isEmpty()) {
            AppUser adminUser = new AppUser(
                    null,
                    "admin",
                    encoder.encode("admin"),
                    adminRol,
                    "admin",
                    "admin",
                    "admin"
            );
            appUserRepository.save(adminUser);
        }

        if(appUserRoleRepository.findByNombre("ESTUDIANTE").isEmpty()) {
            appUserRoleRepository.save(
                    new AppUserRole(null, "ESTUDIANTE")
            );
        }

        if(appUserRoleRepository.findByNombre("PADRE").isEmpty()) {
            appUserRoleRepository.save(
                    new AppUserRole(null, "PADRE")
            );
        }

    }
}
