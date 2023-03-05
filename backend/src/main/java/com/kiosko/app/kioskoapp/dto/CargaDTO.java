package com.kiosko.app.kioskoapp.dto;

import lombok.*;

import java.math.BigDecimal;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class CargaDTO {
    private BigDecimal monto;
    private EstudianteDTO estudiante;
    private String estado;
}
