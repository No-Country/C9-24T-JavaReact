package com.kiosko.app.kioskoapp.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserProfile {
    private Long id;
    private String email;
    private Rol rol;
    private String nombre;
    private String apellido;
    private String dni;
}
