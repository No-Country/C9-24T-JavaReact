package com.kiosko.app.kioskoapp.controllers;

import com.kiosko.app.kioskoapp.dto.*;
import com.kiosko.app.kioskoapp.dto.mapper.UserMapper;
import com.kiosko.app.kioskoapp.entities.AppUser;
import com.kiosko.app.kioskoapp.service.IAppUserService;
import com.kiosko.app.kioskoapp.util.JWTUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/authenticate")
@CrossOrigin(origins="*", allowedHeaders = "*")
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final IAppUserService userService;
    private final JWTUtil jwtUtil;
    private final UserMapper userMapper;

    @Autowired
    public AuthController(AuthenticationManager authenticationManager, IAppUserService userService, JWTUtil jwtUtil, UserMapper userMapper) {
        this.authenticationManager = authenticationManager;
        this.userService = userService;
        this.jwtUtil = jwtUtil;
        this.userMapper = userMapper;
    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> createToken(@RequestBody AuthenticationRequest request) {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
            UserDetails userDetails = userService.loadUserByUsername(request.getEmail());
            AppUser appUser = userService.findByEmail(userDetails.getUsername()).get();
            String jwt = jwtUtil.generateToken(appUser);
            return new ResponseEntity<>(new AuthenticationResponse(jwt, userMapper.appUserToUserProfile(appUser)), HttpStatus.OK);
        }
        catch (BadCredentialsException e) {
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }
    }


}
