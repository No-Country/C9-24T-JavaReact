package com.kiosko.app.kioskoapp.service;

import com.kiosko.app.kioskoapp.dto.Rol;
import com.kiosko.app.kioskoapp.exception.BadRequestException;
import com.kiosko.app.kioskoapp.exception.ResourceAlreadyExistsException;
import com.kiosko.app.kioskoapp.exception.ResourceNotFoundException;

public interface IAppUserRoleService {
    Rol getById(Integer id) throws ResourceNotFoundException, BadRequestException;

    Integer getRolIdByName(String nombre) throws ResourceNotFoundException;

    Rol create(Rol rol) throws ResourceAlreadyExistsException;
    void delete(Rol rol) throws ResourceNotFoundException;

}
