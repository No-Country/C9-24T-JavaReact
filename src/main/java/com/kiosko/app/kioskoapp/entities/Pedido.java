package com.kiosko.app.kioskoapp.entities;

import javax.persistence.*;

import lombok.Data;

import java.util.List;

//@Entity
//@Data
public class Pedido {
    
    @Id
    @GeneratedValue
    @Column(name = "id_pedido")
    private Integer id;
    private String estado;
    private Estudiante estudiante;
    @OneToMany(cascade = CascadeType.ALL )
    @JoinColumn(name = "id_producto_pedido")
    private List<ProductoPedido> productoPedidos;
}
