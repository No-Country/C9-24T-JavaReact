package com.kiosko.app.kioskoapp.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;

@Entity
@Data
public class EstudianteEntity {
    @Id
    @GeneratedValue
    private Integer estudiante_id;
    private String nombre;
    private String apellido;
    private Long saldo;
}
