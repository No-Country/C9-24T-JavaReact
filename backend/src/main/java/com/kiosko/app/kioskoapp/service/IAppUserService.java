package com.kiosko.app.kioskoapp.service;

import com.kiosko.app.kioskoapp.dto.Rol;
import com.kiosko.app.kioskoapp.dto.UserProfile;
import com.kiosko.app.kioskoapp.dto.UserRegistration;
import com.kiosko.app.kioskoapp.entities.AppUser;
import com.kiosko.app.kioskoapp.exception.BadRequestException;
import com.kiosko.app.kioskoapp.exception.ResourceAlreadyExistsException;
import com.kiosko.app.kioskoapp.exception.ResourceNotFoundException;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.Optional;

public interface IAppUserService extends UserDetailsService {
    AppUser getById(Long id) throws ResourceNotFoundException;
    UserProfile create(UserRegistration userRegistration, Rol rol) throws ResourceAlreadyExistsException, ResourceNotFoundException;
    UserProfile update(UserRegistration userRegistration) throws ResourceNotFoundException;

    Optional<AppUser> findByEmail(String email);
    UserProfile getProfileByEmail(String email);
    UserProfile getProfileByDni(String dni) throws ResourceNotFoundException;
    UserProfile getPadreByDniHijo(String dniPadre) throws ResourceNotFoundException, BadRequestException;
}
