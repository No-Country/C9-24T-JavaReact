package com.kiosko.app.kioskoapp.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserRegistration {
    private String email;
    private String password;
    private String nombre;
    private String apellido;
    private String dni;

}

