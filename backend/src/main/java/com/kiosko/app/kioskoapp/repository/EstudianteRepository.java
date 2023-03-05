package com.kiosko.app.kioskoapp.repository;

import com.kiosko.app.kioskoapp.entities.Estudiante;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface EstudianteRepository extends JpaRepository<Estudiante, Integer> {
    Optional<Estudiante> findByUsuarioDni(String dni);
    List<Estudiante> findByPadreDni(String dniPadre);
}
