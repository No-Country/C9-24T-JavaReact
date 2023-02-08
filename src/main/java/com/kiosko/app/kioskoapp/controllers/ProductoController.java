package com.kiosko.app.kioskoapp.controllers;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.kiosko.app.kioskoapp.entities.Producto;
import com.kiosko.app.kioskoapp.repository.ProductoRepository;

@RestController
@RequestMapping("/producto")
public class ProductoController {
    
    @Autowired
    ProductoRepository productoRepository;

    @GetMapping("/all")
    public List<Producto> getProductoAll() {
        return productoRepository.findAll();
    }

    @GetMapping("/{id}")
    public Producto getProductosbyId(@PathVariable Integer id) {

        Optional<Producto> producto = productoRepository.findById(id);

        if (producto.isPresent()) {
            return producto.get();
        }

        return null;

    }

    @PostMapping
    public Producto postProductos(@RequestBody Producto producto, @RequestParam("file") MultipartFile ... file) throws IOException {
        // producto.setImagen(file.getOriginalFilename());
        // service.uploadFile(file);
        productoRepository.save(producto);
        return producto;
    }

}
