package com.kiosko.app.kioskoapp.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;


@Entity
@Table(name = "usuarios")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AppUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_usuario")
    private Long id;
    private String email;
    private String password;
    @ManyToOne
    @JoinColumn(name = "id_rol")
    private AppUserRole appUserRole;
    private String nombre;
    private String apellido;
    private String dni;

    public AppUser(long id) {
        this.id = id;
    }

}
