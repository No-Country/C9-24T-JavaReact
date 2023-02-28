package com.kiosko.app.kioskoapp.repository;

import com.kiosko.app.kioskoapp.entities.Pedido;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PedidoRepository extends JpaRepository<Pedido, Integer> {
    List<Pedido> findByEstudianteUsuarioDni(String dni);
    List<Pedido> findByEstudiantePadreDni(String dni);
}
