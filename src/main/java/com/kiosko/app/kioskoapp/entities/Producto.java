package com.kiosko.app.kioskoapp.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

@Entity
@Data
public class Producto {
    
    @Id
    @GeneratedValue
    private Integer producto_id;
	private String nombre;
    private String descripcion;
    private double precio;
    
    private Integer categoria_id;
}
