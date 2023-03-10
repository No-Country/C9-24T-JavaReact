package com.kiosko.app.kioskoapp.service;

import com.kiosko.app.kioskoapp.dto.ProductoCreateDTO;
import com.kiosko.app.kioskoapp.dto.ProductoDTO;
import com.kiosko.app.kioskoapp.exception.ResourceAlreadyExistsException;
import com.kiosko.app.kioskoapp.exception.ResourceNotFoundException;
import org.springframework.data.domain.Page;

import java.util.List;

public interface IProductoService {
    Page<ProductoDTO> getAll(int page, int size);

    Page<ProductoDTO> getAllSearchWithStock(int page, int size, String search);
    Page<ProductoDTO> getAllSearch(int page, int size, String search);

    Page<ProductoDTO> getAllByCategoria(int page, int size, int categoriaId) throws ResourceNotFoundException;
    ProductoDTO getById(Integer id) throws ResourceNotFoundException;
    ProductoDTO create(ProductoCreateDTO productoCreateDTO) throws ResourceAlreadyExistsException, ResourceNotFoundException;
    ProductoDTO update(ProductoCreateDTO productoCreateDTO, int id) throws ResourceNotFoundException;
    void delete(Integer id) throws ResourceNotFoundException;
}
