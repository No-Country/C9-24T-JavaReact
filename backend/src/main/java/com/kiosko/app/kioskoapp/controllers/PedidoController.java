package com.kiosko.app.kioskoapp.controllers;

import com.kiosko.app.kioskoapp.dto.PedidoCreateDTO;
import com.kiosko.app.kioskoapp.dto.PedidoDTO;
import com.kiosko.app.kioskoapp.dto.ProductoDTO;
import com.kiosko.app.kioskoapp.entities.AppUser;
import com.kiosko.app.kioskoapp.exception.BadRequestException;
import com.kiosko.app.kioskoapp.exception.InsufficientFundsException;
import com.kiosko.app.kioskoapp.exception.ResourceNotFoundException;
import com.kiosko.app.kioskoapp.service.IAppUserService;
import com.kiosko.app.kioskoapp.service.IPedidoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;

@RestController
@RequestMapping("/pedido")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class PedidoController {
    private final IPedidoService pedidoService;
    private final IAppUserService userService;

    @Autowired
    public PedidoController(IPedidoService pedidoService, IAppUserService userService) {
        this.pedidoService = pedidoService;
        this.userService = userService;
    }

    @GetMapping
    public ResponseEntity<List<PedidoDTO>> getAll() {
        return new ResponseEntity<>(pedidoService.getAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<PedidoDTO> getById(@PathVariable("id") int id) throws ResourceNotFoundException {
        return new ResponseEntity<>(pedidoService.getById(id), HttpStatus.OK);
    }

    @GetMapping("/estudiante/{dni}")
    public ResponseEntity<List<PedidoDTO>> getByEstudianteDni(@PathVariable("dni") String dniEstudiante) throws ResourceNotFoundException {
        return new ResponseEntity<>(pedidoService.getByEstudianteDni(dniEstudiante), HttpStatus.OK);
    }

    @GetMapping("/padre/{dni}")
    public ResponseEntity<List<PedidoDTO>> getByPadreDni(String dniPadre) throws ResourceNotFoundException {
        return new ResponseEntity<>(pedidoService.getByPadreDni(dniPadre), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<PedidoDTO> createPedido(@RequestBody PedidoCreateDTO pedido) throws InsufficientFundsException, BadRequestException, ResourceNotFoundException {
        if (pedido.getProductos().stream().anyMatch(p -> p.getCantidad() <= 0)) throw new BadRequestException("La cantidad de un producto debe ser mayor a 0");
        return new ResponseEntity<>(pedidoService.createPedido(pedido, getUser().getDni()), HttpStatus.CREATED);
    }

    @GetMapping("/{id}/cancelar")
    public ResponseEntity<PedidoDTO> cancelarPedidoById(@PathVariable("id") Integer id) throws ResourceNotFoundException, BadRequestException {
        return new ResponseEntity<>(pedidoService.cancelarPedidoByID(id), HttpStatus.OK);
    }

    private AppUser getUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        return userService.findByEmail(authentication.getName()).orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }
}
