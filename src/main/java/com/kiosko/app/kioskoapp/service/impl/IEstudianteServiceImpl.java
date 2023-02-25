package com.kiosko.app.kioskoapp.service.impl;

import com.kiosko.app.kioskoapp.dto.EstudianteDTO;
import com.kiosko.app.kioskoapp.dto.Rol;
import com.kiosko.app.kioskoapp.dto.UserProfile;
import com.kiosko.app.kioskoapp.dto.UserRegistration;
import com.kiosko.app.kioskoapp.dto.mapper.EstudianteMapper;
import com.kiosko.app.kioskoapp.dto.mapper.UserMapper;
import com.kiosko.app.kioskoapp.entities.AppUser;
import com.kiosko.app.kioskoapp.entities.Estudiante;
import com.kiosko.app.kioskoapp.exception.BadRequestException;
import com.kiosko.app.kioskoapp.exception.ResourceAlreadyExistsException;
import com.kiosko.app.kioskoapp.exception.ResourceNotFoundException;
import com.kiosko.app.kioskoapp.repository.EstudianteRepository;
import com.kiosko.app.kioskoapp.service.IAppUserService;
import com.kiosko.app.kioskoapp.service.IEstudianteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.math.BigDecimal;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class IEstudianteServiceImpl implements IEstudianteService {
    private final EstudianteRepository estudianteRepository;
    private final IAppUserService appUserService;
    private final EstudianteMapper estudianteMapper;
    private final UserMapper userMapper;

    @Autowired
    public IEstudianteServiceImpl(EstudianteRepository estudianteRepository, IAppUserService appUserService, EstudianteMapper estudianteMapper, UserMapper userMapper) {
        this.estudianteRepository = estudianteRepository;
        this.appUserService = appUserService;
        this.estudianteMapper = estudianteMapper;
        this.userMapper = userMapper;
    }

    @Override
    public EstudianteDTO createEstudiante(UserRegistration userRegistration, String dniPadre) throws ResourceAlreadyExistsException, ResourceNotFoundException, BadRequestException {
        UserProfile padre = appUserService.getProfileByDni(dniPadre);
        if(padre.getRol() != Rol.PADRE) throw new BadRequestException("El dni ingresado no corresponde a un padre");
        UserProfile estudiante = appUserService.create(userRegistration, Rol.ESTUDIANTE);
        return estudianteMapper.estudianteToEstudianteDTO(estudianteRepository.save(
                new Estudiante(null, userMapper.userProfileToAppUser(estudiante), userMapper.userProfileToAppUser(padre), new BigDecimal(0))
        ));

    }

    @Override
    public List<EstudianteDTO> getAllEstudiantesByDniPadre(String dniPadre) {
        return estudianteRepository.findByPadreDni(dniPadre).stream().map(estudianteMapper::estudianteToEstudianteDTO).collect(Collectors.toList());
    }

    @Override
    public EstudianteDTO getEstudianteByDni(String dni) throws ResourceNotFoundException {
        return estudianteMapper.estudianteToEstudianteDTO(
                estudianteRepository.findByUsuarioDni(dni).orElseThrow(() -> new ResourceNotFoundException("Usuario con dni " + dni + " no encontrado"))
        );
    }
}
