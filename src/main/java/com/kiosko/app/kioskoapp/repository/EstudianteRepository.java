package com.kiosko.app.kioskoapp.repository;

import com.kiosko.app.kioskoapp.entities.Estudiante;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface EstudianteRepository extends JpaRepository<Estudiante, Integer> {
    Optional<Estudiante> findByUsuarioId(String id_usuario);
    Optional<Estudiante> findByPadreId(String id_padre);
}
