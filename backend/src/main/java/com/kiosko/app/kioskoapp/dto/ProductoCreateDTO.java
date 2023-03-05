package com.kiosko.app.kioskoapp.dto;

import lombok.*;

import java.math.BigDecimal;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ProductoCreateDTO {
    private String nombre;
    private String descripcion;
    private BigDecimal precio;
    private Integer stock;

    private Integer Idcategoria;
    private List<Integer> caracteristicasIds;
}
