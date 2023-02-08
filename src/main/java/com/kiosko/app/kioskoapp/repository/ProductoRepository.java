package com.kiosko.app.kioskoapp.repository;

import com.kiosko.app.kioskoapp.entities.Producto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductoRepository extends JpaRepository<Producto, Integer> {
}
