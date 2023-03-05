package com.kiosko.app.kioskoapp.repository;

import com.kiosko.app.kioskoapp.entities.Carga;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CargaRepository extends JpaRepository<Carga, Integer> {
    List<Carga> findByPadreDni(String dni);
    List<Carga> findByEstudianteUsuarioDni(String dni);
}
