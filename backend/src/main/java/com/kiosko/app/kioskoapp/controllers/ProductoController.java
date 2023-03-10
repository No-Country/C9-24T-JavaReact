package com.kiosko.app.kioskoapp.controllers;

import com.kiosko.app.kioskoapp.dto.ImagenCreateDTO;
import com.kiosko.app.kioskoapp.dto.ImagenDTO;
import com.kiosko.app.kioskoapp.dto.ProductoCreateDTO;
import com.kiosko.app.kioskoapp.dto.ProductoDTO;

import com.kiosko.app.kioskoapp.exception.ResourceAlreadyExistsException;
import com.kiosko.app.kioskoapp.exception.ResourceNotFoundException;
import com.kiosko.app.kioskoapp.service.IImagenService;
import com.kiosko.app.kioskoapp.service.IProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/producto")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ProductoController {

    private final IProductoService productoService;
    private final IImagenService imagenService;

    @Autowired
    public ProductoController(IProductoService productoService, IImagenService imagenService) {
        this.productoService = productoService;
        this.imagenService = imagenService;
    }

    @GetMapping
    public ResponseEntity<Page<ProductoDTO>> getAll(
            @RequestParam(required = false, value = "page", defaultValue = "0") int page,
            @RequestParam(required = false, value = "size", defaultValue = "10") int size,
            @RequestParam(required = false, value = "search", defaultValue = "") String search) {
        if(isAdmin()) return new ResponseEntity<>(productoService.getAllSearch(page, size, search), HttpStatus.OK);
        return new ResponseEntity<>(productoService.getAllSearchWithStock(page, size, search), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProductoDTO> getById(@PathVariable("id") int id) throws ResourceNotFoundException {
        return new ResponseEntity<>(productoService.getById(id), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<ProductoDTO> create(@RequestBody ProductoCreateDTO productoCreateDTO) throws ResourceAlreadyExistsException, ResourceNotFoundException {
        return new ResponseEntity<>(productoService.create(productoCreateDTO), HttpStatus.CREATED);
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

    @GetMapping("/{productoId}/imagen")
    public ResponseEntity<List<ImagenDTO>> getAllImages(@PathVariable("productoId") int productoId) throws ResourceNotFoundException {
        return new ResponseEntity<>(imagenService.getAll(productoId), HttpStatus.OK);
    }

    @GetMapping("/{productoId}/imagen/{imagenId}")
    public ResponseEntity<ImagenDTO> getImagenById(@PathVariable("productoId") int productoId, @PathVariable("imagenId") int imagenId) throws ResourceNotFoundException {
        return new ResponseEntity<>(imagenService.getById(imagenId, productoId), HttpStatus.OK);
    }

    @PostMapping("/{productoId}/imagen")
    public ResponseEntity<ImagenDTO> createImagen(@RequestBody ImagenCreateDTO imagenCreateDTO, @PathVariable("productoId") int productoId) throws ResourceAlreadyExistsException, ResourceNotFoundException {
        return new ResponseEntity<>(imagenService.create(imagenCreateDTO, productoId), HttpStatus.CREATED);
    }

    @PatchMapping("/{productoId}/imagen/{imagenId}")
    public ResponseEntity<ImagenDTO> updateImagen(@PathVariable("productoId") int productoId, @PathVariable("imagenId") int imagenId,
                                            @RequestBody ImagenCreateDTO imagenCreateDTO) throws ResourceNotFoundException {
        System.out.println(productoId);
        return new ResponseEntity<>(imagenService.update(imagenCreateDTO, imagenId, productoId), HttpStatus.OK);
    }

    @RequestMapping(value = "/{productoId}/imagen/{imagenId}", method = RequestMethod.DELETE)
    public ResponseEntity<?> deleteImagen(@PathVariable int productoId, @PathVariable int imagenId) throws ResourceNotFoundException {
        imagenService.delete(imagenId, productoId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    private Boolean isAdmin() {
        return SecurityContextHolder.getContext().getAuthentication().getAuthorities().stream().anyMatch(r -> r.getAuthority().equals("ROLE_ADMIN"));
    }



}
