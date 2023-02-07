package com.kiosko.app.kioskoapp.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;

@Entity
@Data
public class Pedido {
    
    @Id
    @GeneratedValue
    private Integer pedido_id;
    private String estado;
    private Integer estudiante_id;
}
