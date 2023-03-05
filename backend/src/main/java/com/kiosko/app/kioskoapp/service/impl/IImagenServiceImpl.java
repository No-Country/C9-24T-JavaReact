package com.kiosko.app.kioskoapp.service.impl;

import com.kiosko.app.kioskoapp.dto.ImagenCreateDTO;
import com.kiosko.app.kioskoapp.dto.ImagenDTO;
import com.kiosko.app.kioskoapp.dto.mapper.ImagenMapper;
import com.kiosko.app.kioskoapp.entities.ImagenesProductos;
import com.kiosko.app.kioskoapp.exception.ResourceAlreadyExistsException;
import com.kiosko.app.kioskoapp.exception.ResourceNotFoundException;
import com.kiosko.app.kioskoapp.repository.ImagenRepository;
import com.kiosko.app.kioskoapp.service.IImagenService;
import com.kiosko.app.kioskoapp.service.IProductoService;
import com.kiosko.app.kioskoapp.util.Utils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class IImagenServiceImpl implements IImagenService {
    private final IProductoService productoService;
    private final ImagenRepository imagenRepository;
    private final ImagenMapper imagenMapper;

    @Autowired
    public IImagenServiceImpl(IProductoService productoService, ImagenRepository imagenRepository, ImagenMapper imagenMapper) {
        this.productoService = productoService;
        this.imagenRepository = imagenRepository;
        this.imagenMapper = imagenMapper;
    }

    @Override
    public List<ImagenDTO> getAll(int productId) throws ResourceNotFoundException {
        productoService.getById(productId);

        return imagenMapper.imagenesToImagenesDTO(imagenRepository.findByIdProducto(productId));
    }

    @Override
    public ImagenDTO getById(Integer imagenId, Integer productoId) throws ResourceNotFoundException {
        productoService.getById(productoId);
        return imagenMapper.imagenToImagenDTO(imagenRepository.findById(imagenId).orElseThrow(() -> new ResourceNotFoundException("Imagen con id" + imagenId
                + "no encontrada")));
    }

    @Override
    public ImagenDTO create(ImagenCreateDTO imagenCreateDTO, Integer productoId) throws ResourceAlreadyExistsException, ResourceNotFoundException {
        productoService.getById(productoId);
        ImagenesProductos imagenesProductos = imagenMapper.imagenCreateDTOToImagen(imagenCreateDTO);
        imagenesProductos.setIdProducto(productoId);
        return imagenMapper.imagenToImagenDTO(
                imagenRepository.save(imagenesProductos)
        );
    }

    @Override
    public ImagenDTO update(ImagenCreateDTO imagenCreateDTO, int imagenId, Integer productoId) throws ResourceNotFoundException {
        ImagenDTO nuevaImagen = getById(imagenId, productoId);
        Utils.mergeObjects(imagenCreateDTO, nuevaImagen);
        ImagenesProductos imagenesProductos = imagenMapper.imagenDTOToImagen(nuevaImagen);
        imagenesProductos.setId(imagenId);
        imagenesProductos.setIdProducto(productoId);
        return imagenMapper.imagenToImagenDTO(
                imagenRepository.save(imagenesProductos)
        );
    }

    @Override
    public void delete(Integer imagenId, Integer productoId) throws ResourceNotFoundException {
        getById(imagenId, productoId);
        imagenRepository.deleteById(imagenId);
    }
}
