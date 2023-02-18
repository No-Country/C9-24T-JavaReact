package com.kiosko.app.kioskoapp.service.impl;

import com.kiosko.app.kioskoapp.dto.ProductoCreateDTO;
import com.kiosko.app.kioskoapp.dto.ProductoDTO;
import com.kiosko.app.kioskoapp.dto.mapper.ProductoMapper;
import com.kiosko.app.kioskoapp.exception.ResourceAlreadyExistsException;
import com.kiosko.app.kioskoapp.exception.ResourceNotFoundException;
import com.kiosko.app.kioskoapp.repository.ProductoRepository;
import com.kiosko.app.kioskoapp.service.ICaracteristicaService;
import com.kiosko.app.kioskoapp.service.ICategoriaService;
import com.kiosko.app.kioskoapp.service.IProductoService;
import com.kiosko.app.kioskoapp.util.Utils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class IProductoServiceImpl implements IProductoService {
    private final ProductoRepository productoRepository;
    private final ICategoriaService categoriaService;
    private final ICaracteristicaService caracteristicaService;
    private final ProductoMapper productoMapper;

    @Autowired
    public IProductoServiceImpl(ProductoRepository productoRepository, ICategoriaService categoriaService, ICaracteristicaService caracteristicaService, ProductoMapper productoMapper) {
        this.productoRepository = productoRepository;
        this.categoriaService = categoriaService;
        this.caracteristicaService = caracteristicaService;
        this.productoMapper = productoMapper;
    }

    @Override
    public Page<ProductoDTO> getAll(int page, int size) {
        return productoRepository.findAll(PageRequest.of(page, size)).map(productoMapper::toProductoDTO);
    }

    @Override
    public Page<ProductoDTO> getAllByCategoria(int page, int size, int categoriaId) throws ResourceNotFoundException {
        categoriaService.getById(categoriaId);
        return productoRepository.findByCategoriaId(PageRequest.of(page, size), categoriaId).map(productoMapper::toProductoDTO);
    }

    @Override
    public ProductoDTO getById(Integer id) throws ResourceNotFoundException {
        return productoMapper.toProductoDTO(
                productoRepository.findById(id)
                        .orElseThrow(() -> new ResourceNotFoundException("Producto con id " + id + " no encontrado"))
        );
    }

    @Override
    public ProductoDTO create(ProductoCreateDTO productoCreateDTO) throws ResourceAlreadyExistsException, ResourceNotFoundException {
        ProductoDTO producto = productoMapper.toProductoDTO(productoCreateDTO);
        producto.setCategoria(categoriaService.getById(productoCreateDTO.getIdcategoria()));
        producto.setCaracteristicas(new ArrayList<>());
        if(productoCreateDTO.getCaracteristicasIds() == null) productoCreateDTO.setCaracteristicasIds(new ArrayList<>());
        for (Integer caracteristicasId : productoCreateDTO.getCaracteristicasIds()) {
            producto.getCaracteristicas().add(caracteristicaService.getById(caracteristicasId));
        }
        return productoMapper.toProductoDTO(
                productoRepository.save(productoMapper.toProducto(producto))
        );
    }

    @Override
    public ProductoDTO update(ProductoCreateDTO productoCreateDTO, int id) throws ResourceNotFoundException {
        ProductoDTO nuevoProducto = getById(id);
        Utils.mergeObjects(productoCreateDTO, nuevoProducto);

        if(productoCreateDTO.getIdcategoria() != null) nuevoProducto.setCategoria(categoriaService.getById(productoCreateDTO.getIdcategoria()));
        if(productoCreateDTO.getCaracteristicasIds() != null ) {
            nuevoProducto.setCaracteristicas(new ArrayList<>());
            for (Integer caracteristicasId : productoCreateDTO.getCaracteristicasIds()) {
                nuevoProducto.getCaracteristicas().add(caracteristicaService.getById(caracteristicasId));
            }
        }

        return productoMapper.toProductoDTO(
                productoRepository.save(productoMapper.toProducto(nuevoProducto))
        );
    }

    @Override
    public void delete(Integer id) throws ResourceNotFoundException {
        productoRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Producto no encontrado")
        );

        productoRepository.deleteById(id);
    }
}
