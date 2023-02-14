package com.kiosko.app.kioskoapp.entities;

import javax.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.util.List;

@Entity
@Table(name = "productos")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@ToString
public class Producto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_producto")
    private Integer id;
	private String nombre;
    private String descripcion;
    private BigDecimal precio;
    private Integer stock;

    @ManyToOne
    @JoinColumn(name = "id_categoria")
    private Categoria categoria;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "productos_caracteristicas",
            joinColumns = { @JoinColumn(name = "id_producto") },
            inverseJoinColumns = { @JoinColumn(name = "id_caracteristica") })
    List<Caracteristica> caracteristicas;

//    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
//	@JoinColumn(name = "id_producto")
//    List<ImagenesProductos> imagenes;

}
