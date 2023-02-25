package com.kiosko.app.kioskoapp.controllers;

import com.kiosko.app.kioskoapp.dto.EstudianteDTO;
import com.kiosko.app.kioskoapp.dto.Rol;
import com.kiosko.app.kioskoapp.dto.UserProfile;
import com.kiosko.app.kioskoapp.dto.UserRegistration;
import com.kiosko.app.kioskoapp.entities.AppUser;
import com.kiosko.app.kioskoapp.exception.BadRequestException;
import com.kiosko.app.kioskoapp.exception.ForbidenException;
import com.kiosko.app.kioskoapp.exception.ResourceAlreadyExistsException;
import com.kiosko.app.kioskoapp.exception.ResourceNotFoundException;
import com.kiosko.app.kioskoapp.service.IAppUserService;
import com.kiosko.app.kioskoapp.service.IEstudianteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping("/usuario")
@CrossOrigin(origins="*", allowedHeaders = "*")
public class UsuarioController {
    private final IAppUserService userService;
    private final IEstudianteService estudianteService;

    @Autowired
    public UsuarioController(IAppUserService userService, IEstudianteService estudianteService) {
        this.userService = userService;
        this.estudianteService = estudianteService;
    }

    @GetMapping
    public ResponseEntity<UserProfile> getUserProfile() {
        return new ResponseEntity<>(userService.getProfileByEmail(getUserEmail()), HttpStatus.OK);
    }


    @PostMapping("/padre")
    public ResponseEntity<UserProfile> registerPadre(@RequestBody UserRegistration userRegistration) throws ResourceAlreadyExistsException, ResourceNotFoundException {
        return new ResponseEntity<>(userService.create(userRegistration, Rol.PADRE), HttpStatus.CREATED);
    }

    @GetMapping("/padre/{dni}")
    public ResponseEntity<UserProfile> getPadreByDni(@PathVariable("dni") String dni) throws ResourceNotFoundException, ForbidenException {
        AppUser user = getUser();
        if(!Objects.equals(user.getDni(), dni) || !Objects.equals(user.getAppUserRole().getNombre(), Rol.ADMIN.toString())) throw new ForbidenException("");
        return new ResponseEntity<>(userService.getProfileByDni(dni), HttpStatus.OK);
    }

    @GetMapping("/padre/{dni}/estudiante")
    public ResponseEntity<List<EstudianteDTO>> getAllEstudiantesByPadre(@PathVariable("dni") String dni) throws ForbidenException {
        AppUser user = getUser();
        if(!Objects.equals(user.getDni(), dni) || !Objects.equals(user.getAppUserRole().getNombre(), Rol.ADMIN.toString())) throw new ForbidenException("");
        return new ResponseEntity<>(estudianteService.getAllEstudiantesByDniPadre(dni), HttpStatus.OK);
    }

    @PostMapping("/padre/{dni}/estudiante")
    public ResponseEntity<EstudianteDTO> registerEstudiante(@PathVariable("dni") String dniPadre, @RequestBody UserRegistration userRegistration) throws ResourceAlreadyExistsException, ResourceNotFoundException, BadRequestException {
        return new ResponseEntity<>(estudianteService.createEstudiante(userRegistration, dniPadre), HttpStatus.CREATED);
    }

    @GetMapping("/estudiante/{dni}")
    public ResponseEntity<EstudianteDTO> getEstudianteByDni(@PathVariable("dni") String dni) throws ResourceNotFoundException, ForbidenException {
        AppUser user = getUser();
        EstudianteDTO estudianteDTO = estudianteService.getEstudianteByDni(dni);
        if(!Objects.equals(user.getDni(), dni) || !Objects.equals(user.getAppUserRole().getNombre(), Rol.ADMIN.toString())) throw new ForbidenException("");
        return new ResponseEntity<>(estudianteService.getEstudianteByDni(dni), HttpStatus.OK);
    }


    private AppUser getUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        return userService.findByEmail(authentication.getName()).orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }

    private String getUserEmail() {
        return SecurityContextHolder.getContext().getAuthentication().getName();
    }
}
