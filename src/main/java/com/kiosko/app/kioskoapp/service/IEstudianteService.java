package com.kiosko.app.kioskoapp.service;

import com.kiosko.app.kioskoapp.dto.EstudianteDTO;
import com.kiosko.app.kioskoapp.dto.UserRegistration;
import com.kiosko.app.kioskoapp.exception.ResourceAlreadyExistsException;
import com.kiosko.app.kioskoapp.exception.ResourceNotFoundException;

import java.util.List;

public interface IEstudianteService {
    EstudianteDTO createEstudiante(UserRegistration userRegistration, String dniPadre) throws ResourceAlreadyExistsException, ResourceNotFoundException;
    List<EstudianteDTO> getAllEstudiantesByDniPadre(String dniPadre);
    EstudianteDTO getEstudianteByDni(String dni);
}
