package com.kiosko.app.kioskoapp.entities;

import javax.persistence.*;

import lombok.*;

import java.math.BigDecimal;

@Entity
@Table(name = "estudiantes")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Estudiante {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_estudiante")
    private Integer id;
    @OneToOne
    @JoinColumn(name = "id_usuario")
    private AppUser usuario;
    @ManyToOne
    @JoinColumn(name = "id_padre")
    private AppUser padre;
    private BigDecimal saldo;
}
