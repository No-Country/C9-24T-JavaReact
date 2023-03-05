package com.kiosko.app.kioskoapp.service.impl;

import com.kiosko.app.kioskoapp.dto.Rol;
import com.kiosko.app.kioskoapp.entities.AppUserRole;
import com.kiosko.app.kioskoapp.exception.BadRequestException;
import com.kiosko.app.kioskoapp.exception.ResourceAlreadyExistsException;
import com.kiosko.app.kioskoapp.exception.ResourceNotFoundException;
import com.kiosko.app.kioskoapp.repository.AppUserRoleRepository;
import com.kiosko.app.kioskoapp.service.IAppUserRoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class IAppUserRoleServiceImpl implements IAppUserRoleService {
    private final AppUserRoleRepository appUserRoleRepository;

    @Autowired
    public IAppUserRoleServiceImpl(AppUserRoleRepository appUserRoleRepository) {
        this.appUserRoleRepository = appUserRoleRepository;
    }

    @Override
    public Rol getById(Integer id) throws ResourceNotFoundException, BadRequestException {
        AppUserRole appUserRole = appUserRoleRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Rol con id " + id + " no encontrado"));
        try {
            return Rol.valueOf(appUserRole.getNombre());
        }
        catch(IllegalArgumentException ex) {
            throw new BadRequestException("Rol invalido");
        }

    }

    @Override
    public Integer getRolIdByName(String nombre) throws ResourceNotFoundException {
        AppUserRole appUserRole = appUserRoleRepository.findByNombre(nombre).orElseThrow(() -> new ResourceNotFoundException("Rol " + nombre + " no encontrado"));
        return appUserRole.getId();
    }

    @Override
    public Rol create(Rol rol) throws ResourceAlreadyExistsException {
        appUserRoleRepository.findByNombre(rol.toString()).orElseThrow(() -> new ResourceAlreadyExistsException("El rol " + rol + " ya existe"));
        AppUserRole appUserRole = new AppUserRole(null, rol.toString());
        appUserRoleRepository.save(appUserRole);
        return rol;
    }

    @Override
    public void delete(Rol rol) throws ResourceNotFoundException {
        AppUserRole appUserRole = appUserRoleRepository.findByNombre(rol.toString()).orElseThrow(() -> new ResourceNotFoundException("Rol " + rol + " no encontrado"));
        appUserRoleRepository.deleteById(appUserRole.getId());
    }
}
