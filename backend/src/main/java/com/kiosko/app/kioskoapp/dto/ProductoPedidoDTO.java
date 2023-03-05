package com.kiosko.app.kioskoapp.dto;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ProductoPedidoDTO {
    private ProductoDTO producto;
    private Integer cantidad;

}
