package com.kiosko.app.kioskoapp.dto;

import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class PedidoDTO {
    private Integer id;
    private String estado;
    private EstudianteDTO estudiante;
    private List<ProductoPedidoDTO> productos;
}
