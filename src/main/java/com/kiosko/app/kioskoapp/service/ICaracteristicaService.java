package com.kiosko.app.kioskoapp.service;

import com.kiosko.app.kioskoapp.dto.CaracteristicaCreateDTO;
import com.kiosko.app.kioskoapp.dto.CaracteristicaDTO;
import com.kiosko.app.kioskoapp.exception.ResourceAlreadyExistsException;
import com.kiosko.app.kioskoapp.exception.ResourceNotFoundException;

import java.util.List;

public interface ICaracteristicaService {
    List<CaracteristicaDTO> getAll();
    CaracteristicaDTO getById(Integer id) throws ResourceNotFoundException;
    CaracteristicaDTO create(CaracteristicaCreateDTO caracteristicaCreateDTO) throws ResourceAlreadyExistsException;
    CaracteristicaDTO update(CaracteristicaDTO caracteristicaDTO) throws ResourceNotFoundException;
    void delete(Integer id) throws ResourceNotFoundException;
}
