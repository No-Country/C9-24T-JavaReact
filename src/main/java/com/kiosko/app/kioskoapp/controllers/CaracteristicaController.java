package com.kiosko.app.kioskoapp.controllers;

import com.kiosko.app.kioskoapp.dto.CaracteristicaCreateDTO;
import com.kiosko.app.kioskoapp.dto.CaracteristicaDTO;
import com.kiosko.app.kioskoapp.dto.mapper.CaracteristicaMapper;
import com.kiosko.app.kioskoapp.exception.ResourceAlreadyExistsException;
import com.kiosko.app.kioskoapp.exception.ResourceNotFoundException;
import com.kiosko.app.kioskoapp.service.ICaracteristicaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/caracteristica")
public class CaracteristicaController {
    private final ICaracteristicaService caracteristicaService;
    private final CaracteristicaMapper caracteristicaMapper;

    @Autowired
    public CaracteristicaController(ICaracteristicaService caracteristicaService, CaracteristicaMapper caracteristicaMapper) {
        this.caracteristicaService = caracteristicaService;
        this.caracteristicaMapper = caracteristicaMapper;
    }

    @GetMapping
    public ResponseEntity<List<CaracteristicaDTO>> getAll() {
        return new ResponseEntity<>(caracteristicaService.getAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CaracteristicaDTO> getById(@PathVariable("id") int id) throws ResourceNotFoundException {
        return new ResponseEntity<>(caracteristicaService.getById(id), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<CaracteristicaDTO> create(@RequestBody CaracteristicaCreateDTO caracteristicaCreateDTO) throws ResourceAlreadyExistsException {
        return new ResponseEntity<>(caracteristicaService.create(caracteristicaCreateDTO), HttpStatus.OK);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<CaracteristicaDTO> update(@PathVariable("id") int id, @RequestBody CaracteristicaCreateDTO caracteristicaCreateDTO) throws ResourceNotFoundException {
        CaracteristicaDTO caracteristica = caracteristicaMapper.toCaracteristicaDTO(caracteristicaCreateDTO);
        caracteristica.setId(id);

        return new ResponseEntity<>(caracteristicaService.update(caracteristica), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") int id) throws ResourceNotFoundException {
        caracteristicaService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
