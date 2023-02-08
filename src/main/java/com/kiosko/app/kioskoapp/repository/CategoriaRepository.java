package com.kiosko.app.kioskoapp.repository;

import com.kiosko.app.kioskoapp.entities.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoriaRepository extends JpaRepository<Categoria, Integer> {
}
