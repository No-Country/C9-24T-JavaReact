package com.kiosko.app.kioskoapp.entities;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import lombok.Data;

@Entity
@Data
public class Categoria {
    
    @Id
    @GeneratedValue
    private Integer categoria_id;
    private String nombre;
    private String imagen;

    @OneToMany(mappedBy="categoria_id")
    private List<Producto> productos;
    
}
