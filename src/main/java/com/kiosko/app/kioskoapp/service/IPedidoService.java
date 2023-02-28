package com.kiosko.app.kioskoapp.service;

import com.kiosko.app.kioskoapp.dto.PedidoCreateDTO;
import com.kiosko.app.kioskoapp.dto.PedidoDTO;
import com.kiosko.app.kioskoapp.exception.BadRequestException;
import com.kiosko.app.kioskoapp.exception.InsufficientFundsException;
import com.kiosko.app.kioskoapp.exception.ResourceNotFoundException;

import java.util.List;

public interface IPedidoService {
    List<PedidoDTO> getAll();
    PedidoDTO getById(Integer id) throws ResourceNotFoundException;
    List<PedidoDTO> getByEstudianteDni(String dniEstudiante) throws ResourceNotFoundException;
    List<PedidoDTO> getByPadreDni(String dniPadre) throws ResourceNotFoundException;
    PedidoDTO createPedido(PedidoCreateDTO pedido, String dniEstudiante) throws ResourceNotFoundException, InsufficientFundsException, BadRequestException;
    PedidoDTO cancelarPedidoByID(Integer id) throws ResourceNotFoundException;

}
