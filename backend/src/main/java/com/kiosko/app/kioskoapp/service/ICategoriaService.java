package com.kiosko.app.kioskoapp.service;

import com.kiosko.app.kioskoapp.dto.CategoriaCreateDTO;
import com.kiosko.app.kioskoapp.dto.CategoriaDTO;
import com.kiosko.app.kioskoapp.exception.ResourceAlreadyExistsException;
import com.kiosko.app.kioskoapp.exception.ResourceNotFoundException;

import java.util.List;

public interface ICategoriaService {
    List<CategoriaDTO> getAll();
    CategoriaDTO getById(Integer id) throws ResourceNotFoundException;
    CategoriaDTO create(CategoriaCreateDTO categoriaCreateDTO) throws ResourceAlreadyExistsException;
    CategoriaDTO update(CategoriaDTO categoriaDTO) throws ResourceNotFoundException;
    void delete(Integer id) throws ResourceNotFoundException;

}
