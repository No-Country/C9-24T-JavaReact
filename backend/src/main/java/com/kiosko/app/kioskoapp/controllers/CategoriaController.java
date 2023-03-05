package com.kiosko.app.kioskoapp.controllers;

import com.kiosko.app.kioskoapp.dto.CategoriaCreateDTO;
import com.kiosko.app.kioskoapp.dto.CategoriaDTO;
import com.kiosko.app.kioskoapp.dto.ProductoDTO;
import com.kiosko.app.kioskoapp.dto.mapper.CategoriaMapper;
import com.kiosko.app.kioskoapp.exception.ResourceAlreadyExistsException;
import com.kiosko.app.kioskoapp.exception.ResourceNotFoundException;
import com.kiosko.app.kioskoapp.service.ICategoriaService;
import com.kiosko.app.kioskoapp.service.IProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/categoria")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class CategoriaController {
    private final ICategoriaService categoriaService;
    private final CategoriaMapper categoriaMapper;
    private final IProductoService productoService;

    @Autowired
    public CategoriaController(ICategoriaService categoriaService, CategoriaMapper categoriaMapper, IProductoService productoService) {
        this.categoriaService = categoriaService;
        this.categoriaMapper = categoriaMapper;
        this.productoService = productoService;
    }

    @GetMapping
    public ResponseEntity<List<CategoriaDTO>> getAll() {
        return new ResponseEntity<>(categoriaService.getAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CategoriaDTO> getById(@PathVariable("id") int id) throws ResourceNotFoundException {
        return new ResponseEntity<>(categoriaService.getById(id), HttpStatus.CREATED);
    }

    @PostMapping
    public ResponseEntity<CategoriaDTO> create(@RequestBody CategoriaCreateDTO categoriaCreateDTO) throws ResourceAlreadyExistsException {
        return new ResponseEntity<>(categoriaService.create(categoriaCreateDTO), HttpStatus.OK);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<CategoriaDTO> update(@PathVariable("id") int id, @RequestBody CategoriaCreateDTO categoriaCreateDTO) throws ResourceNotFoundException {
        CategoriaDTO categoria = categoriaMapper.toCategoriaDTO(categoriaCreateDTO);
        categoria.setId(id);
        return new ResponseEntity<>(categoriaService.update(categoria), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") int id) throws ResourceNotFoundException {
        categoriaService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/{id}/productos")
    public ResponseEntity<Page<ProductoDTO>> findAllByCategoria(@PathVariable("id") int categoriaId,
                                                               @RequestParam(required = false, value = "page", defaultValue = "0") int page,
                                                               @RequestParam(required = false, value = "size", defaultValue = "10") int size) throws ResourceNotFoundException {
        return new ResponseEntity<>(productoService.getAllByCategoria(page, size, categoriaId), HttpStatus.OK);
    }
}
