package com.kiosko.app.kioskoapp.controllers;

import com.kiosko.app.kioskoapp.dto.Rol;
import com.kiosko.app.kioskoapp.dto.UserProfile;
import com.kiosko.app.kioskoapp.dto.UserRegistration;
import com.kiosko.app.kioskoapp.entities.AppUser;
import com.kiosko.app.kioskoapp.exception.ResourceAlreadyExistsException;
import com.kiosko.app.kioskoapp.exception.ResourceNotFoundException;
import com.kiosko.app.kioskoapp.service.IAppUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/usuario")
@CrossOrigin(origins="*", allowedHeaders = "*")
public class UsuarioController {
    private final IAppUserService userService;

    @Autowired
    public UsuarioController(IAppUserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public ResponseEntity<UserProfile> getUserProfile() {
        return new ResponseEntity<>(userService.getProfileByEmail(getUserEmail()), HttpStatus.OK);
    }


    @PostMapping("/padre")
    public ResponseEntity<UserProfile> registerPadre(@RequestBody UserRegistration userRegistration) throws ResourceAlreadyExistsException, ResourceNotFoundException {
        return new ResponseEntity<>(userService.create(userRegistration, Rol.PADRE), HttpStatus.CREATED);
    }

    @GetMapping("/padre{dni}")
    public ResponseEntity<List<UserProfile>> getAllHijos(@PathVariable("dni") String dni) {
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/padre/{dni}")
    public ResponseEntity<UserProfile> registerHijo(@RequestBody UserRegistration userRegistration, @PathVariable("dni") String dni) {
        return new ResponseEntity<>(HttpStatus.OK);
    }

    private AppUser getUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        return userService.findByEmail(authentication.getName()).orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }

    private String getUserEmail() {
        System.out.println(SecurityContextHolder.getContext().getAuthentication().getName());
        return SecurityContextHolder.getContext().getAuthentication().getName();
    }
}
