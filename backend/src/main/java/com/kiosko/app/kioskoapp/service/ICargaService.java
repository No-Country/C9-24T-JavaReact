package com.kiosko.app.kioskoapp.service;

import com.kiosko.app.kioskoapp.dto.CargaDTO;
import com.kiosko.app.kioskoapp.exception.BadRequestException;
import com.kiosko.app.kioskoapp.exception.ResourceNotFoundException;

import java.util.List;

public interface ICargaService {
    List<CargaDTO> getCargasByPadreDni(String dni) throws ResourceNotFoundException, BadRequestException;
    List<CargaDTO> getCargasByEstudianteDni(String dni) throws ResourceNotFoundException, BadRequestException;
    CargaDTO cargarSaldoEnEfectivo(String dniEstudiante, Double monto) throws ResourceNotFoundException;
    CargaDTO getCargaById(int id) throws ResourceNotFoundException;
}
