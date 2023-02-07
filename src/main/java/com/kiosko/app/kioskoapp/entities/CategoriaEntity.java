package com.kiosko.app.kioskoapp.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;

@Entity
@Data
public class CategoriaEntity {
    
    @Id
    @GeneratedValue
    private Integer categoria_id;
    private String nombre;
    private String imagen;
}
