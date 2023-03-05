package com.kiosko.app.kioskoapp.dto;

import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class PedidoCreateDTO {
    private List<ProductoPedidoCreateDTO> productos;
}
