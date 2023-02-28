package com.kiosko.app.kioskoapp.entities;

import lombok.*;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "cargas_saldo")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Carga {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    @ManyToOne
    @JoinColumn(name = "id_estudiante", insertable = false, updatable = false)
    private Estudiante estudiante;
    @ManyToOne
    @JoinColumn(name = "id_padre")
    private AppUser padre;
    @Column(name = "cantidad")
    private BigDecimal monto;
    private String estado;
}
