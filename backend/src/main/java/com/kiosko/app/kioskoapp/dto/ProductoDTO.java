package com.kiosko.app.kioskoapp.dto;

import lombok.*;

import java.math.BigDecimal;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ProductoDTO {
    private Integer id;
    private String nombre;
    private String descripcion;
    private BigDecimal precio;
    private Integer stock;

    private CategoriaDTO categoria;
    private List<CaracteristicaDTO> caracteristicas;
    private List<ImagenDTO> imagenes;
}
