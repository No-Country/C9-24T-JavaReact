package com.kiosko.app.kioskoapp.entities;

import javax.persistence.*;

import lombok.*;

@Entity
@Table(name = "productos")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@ToString
public class ProductoPedido {
    
    @Id
    @GeneratedValue
    @Column(name = "id_producto_pedido")
    private Integer id;
    private Integer cantidad;

    @ManyToOne
    @JoinColumn(name = "id_producto")
    private Producto producto;

}
