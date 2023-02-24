package com.kiosko.app.kioskoapp.dto.mapper;

import com.kiosko.app.kioskoapp.dto.Rol;
import com.kiosko.app.kioskoapp.entities.AppUserRole;
import org.springframework.stereotype.Component;

@Component
public class RolMapper {
    public Rol appUserRolToRol(AppUserRole appUserRole) throws IllegalArgumentException {
        return Rol.valueOf(appUserRole.getNombre());
    }

    public AppUserRole rolToAppUserRol(Rol rol) {
        return new AppUserRole(null, rol.toString());
    }
}
