package com.kiosko.app.kioskoapp.repository;

import com.kiosko.app.kioskoapp.entities.Caracteristica;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CaracteristicaRepository extends JpaRepository<Caracteristica, Integer> {
    Optional<Caracteristica> findByNombre(String nombre);
}
