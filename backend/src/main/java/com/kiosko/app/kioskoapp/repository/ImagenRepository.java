package com.kiosko.app.kioskoapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.kiosko.app.kioskoapp.entities.ImagenesProductos;

import java.util.List;

public interface ImagenRepository extends JpaRepository<ImagenesProductos, Integer>{
    List<ImagenesProductos> findByIdProducto (int idProducto);
}
