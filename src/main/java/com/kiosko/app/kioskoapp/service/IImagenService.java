package com.kiosko.app.kioskoapp.service;

import com.kiosko.app.kioskoapp.dto.ImagenCreateDTO;
import com.kiosko.app.kioskoapp.dto.ImagenDTO;
import com.kiosko.app.kioskoapp.exception.ResourceAlreadyExistsException;
import com.kiosko.app.kioskoapp.exception.ResourceNotFoundException;

import java.util.List;

public interface IImagenService {
    List<ImagenDTO> getAll(int productId) throws ResourceNotFoundException;
    ImagenDTO getById(Integer imagenId, Integer productoId) throws ResourceNotFoundException;
    ImagenDTO create(ImagenCreateDTO imagenCreateDTO, Integer productoId) throws ResourceAlreadyExistsException, ResourceNotFoundException;
    ImagenDTO update(ImagenCreateDTO imagenCreateDTO, int imagenId, Integer productoId) throws ResourceNotFoundException;
    void delete(Integer imagenId, Integer productoId) throws ResourceNotFoundException;
}
