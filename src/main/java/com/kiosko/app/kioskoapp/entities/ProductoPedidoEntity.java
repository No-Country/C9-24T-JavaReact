package com.kiosko.app.kioskoapp.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;

@Entity
@Data
public class ProductoPedidoEntity {
    
    @Id
    @GeneratedValue
    private Integer producto_pedido_id;
    private Integer cantidad;
    
    private Integer producto_id;
    private Integer pedido_id;

}
