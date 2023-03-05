package com.kiosko.app.kioskoapp.entities;

import javax.persistence.*;

import lombok.*;

import java.util.List;

@Entity
@Table(name = "pedidos")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@ToString
public class Pedido {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_pedido")
    private Integer id;
    private String estado;
    @ManyToOne
    @JoinColumn(name = "id_estudiante")
    private Estudiante estudiante;
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "id_producto_pedido")
    private List<ProductoPedido> productos;
}
