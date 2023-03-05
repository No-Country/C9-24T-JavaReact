package com.kiosko.app.kioskoapp.controllers;

import com.kiosko.app.kioskoapp.dto.CargaDTO;
import com.kiosko.app.kioskoapp.dto.Rol;
import com.kiosko.app.kioskoapp.exception.BadRequestException;
import com.kiosko.app.kioskoapp.exception.ForbidenException;
import com.kiosko.app.kioskoapp.exception.ResourceNotFoundException;
import com.kiosko.app.kioskoapp.service.ICargaService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping("/carga")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class CargaController {
    private final ICargaService cargaService;

    public CargaController(ICargaService cargaService) {
        this.cargaService = cargaService;
    }

    @GetMapping("/padre/{dni}")
    public ResponseEntity<List<CargaDTO>> getAllCargasByPadreDni(@PathVariable("dni") String dni) throws BadRequestException, ResourceNotFoundException, ForbidenException {
        List<CargaDTO> cargas = cargaService.getCargasByPadreDni(dni);
        if(cargas.size()>0) {
            if (!Objects.equals(cargas.get(0).getEstudiante().getPadre().getEmail(), getUserEmail()) && !isAdmin()) throw new ForbidenException("");
        }

        return new ResponseEntity<>(cargas, HttpStatus.OK);
    }

    @GetMapping("/estudiante/{dni}")
    public ResponseEntity<List<CargaDTO>> getAllCargasByEstudianteDni(@PathVariable("dni") String dni) throws ForbidenException, BadRequestException, ResourceNotFoundException {
        List<CargaDTO> cargas = cargaService.getCargasByEstudianteDni(dni);
        if(cargas.size()>0) {
            if (!Objects.equals(cargas.get(0).getEstudiante().getUsuario().getEmail(), getUserEmail()) && !isAdmin() ) throw new ForbidenException("");
        }

        return new ResponseEntity<>(cargas, HttpStatus.OK);
    }

    @PostMapping("/estudiante/{dni}/efectivo")
    public ResponseEntity<CargaDTO> cargarSaldo(@PathVariable("dni") String dni, @RequestBody Double saldo) throws ResourceNotFoundException {
        System.out.println("Cargando saldo");
        return new ResponseEntity<>(cargaService.cargarSaldoEnEfectivo(dni, saldo), HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CargaDTO> getCargaById(@PathVariable("id") Integer id) throws ResourceNotFoundException {
        return new ResponseEntity<>(cargaService.getCargaById(id), HttpStatus.OK);
    }

    private String getUserEmail() {
        return SecurityContextHolder.getContext().getAuthentication().getName();
    }

    private Boolean isAdmin() {
        return SecurityContextHolder.getContext().getAuthentication().getAuthorities().stream().anyMatch(r -> r.getAuthority().equals("ROLE_ADMIN"));
    }



}
