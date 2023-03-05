package com.kiosko.app.kioskoapp.entities;


import javax.persistence.*;

import lombok.*;

@Entity
@Table(name = "categorias")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@ToString
public class Categoria {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_categoria")
    private Integer id;
    private String nombre;
    @Column(name = "urlimg")
    private String imagen;

}
