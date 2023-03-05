package com.kiosko.app.kioskoapp.dto;

import lombok.*;

import java.math.BigDecimal;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class EstudianteDTO {
    private Integer id;
    private UserProfile usuario;
    private UserProfile padre;

    private BigDecimal saldo;
}
