package com.kiosko.app.kioskoapp.dto;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class UserProfile {
    private Long id;
    private String email;
    private Rol rol;
    private String nombre;
    private String apellido;
    private String dni;
}
