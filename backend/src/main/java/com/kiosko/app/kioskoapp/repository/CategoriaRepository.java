package com.kiosko.app.kioskoapp.repository;

import com.kiosko.app.kioskoapp.entities.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CategoriaRepository extends JpaRepository<Categoria, Integer> {
    Optional<Categoria> findByNombre(String nombre);
}
