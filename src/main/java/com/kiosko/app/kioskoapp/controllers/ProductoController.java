package com.kiosko.app.kioskoapp.controllers;

import com.kiosko.app.kioskoapp.dto.ProductoCreateDTO;
import com.kiosko.app.kioskoapp.dto.ProductoDTO;
import com.kiosko.app.kioskoapp.dto.mapper.ProductoCreateMapper;

import com.kiosko.app.kioskoapp.exception.ResourceAlreadyExistsException;
import com.kiosko.app.kioskoapp.exception.ResourceNotFoundException;
import com.kiosko.app.kioskoapp.service.IProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/producto")
public class ProductoController {

    private final IProductoService productoService;
    private final ProductoCreateMapper productoMapper;

    @Autowired
    public ProductoController(IProductoService productoService, ProductoCreateMapper productoMapper) {
        this.productoService = productoService;
        this.productoMapper = productoMapper;
    }

    @GetMapping
    public ResponseEntity<Page<ProductoDTO>> getAll(@RequestParam(required = false, value = "page", defaultValue = "0") int page,
                                               @RequestParam(required = false, value = "size", defaultValue = "10") int size) {
        return new ResponseEntity<>(productoService.getAll(page, size), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProductoDTO> getById(@PathVariable("id") int id) throws ResourceNotFoundException {
        return new ResponseEntity<>(productoService.getById(id), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<ProductoDTO> create(@RequestBody ProductoCreateDTO productoCreateDTO) throws ResourceAlreadyExistsException, ResourceNotFoundException {
        return new ResponseEntity<>(productoService.create(productoCreateDTO), HttpStatus.OK);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<ProductoDTO> update(@PathVariable("id") int id, @RequestBody ProductoCreateDTO productoCreateDTO) throws ResourceNotFoundException {
        return new ResponseEntity<>(productoService.update(productoCreateDTO, id), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") int id) throws ResourceNotFoundException {
        productoService.delete(id);

        return new ResponseEntity<>(HttpStatus.OK);
    }

}
