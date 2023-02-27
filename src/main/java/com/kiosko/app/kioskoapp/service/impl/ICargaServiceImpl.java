package com.kiosko.app.kioskoapp.service.impl;

import com.kiosko.app.kioskoapp.dto.CargaDTO;
import com.kiosko.app.kioskoapp.dto.EstudianteDTO;
import com.kiosko.app.kioskoapp.dto.Rol;
import com.kiosko.app.kioskoapp.dto.UserProfile;
import com.kiosko.app.kioskoapp.dto.mapper.CargaMapper;
import com.kiosko.app.kioskoapp.dto.mapper.EstudianteMapper;
import com.kiosko.app.kioskoapp.dto.mapper.UserMapper;
import com.kiosko.app.kioskoapp.entities.Carga;
import com.kiosko.app.kioskoapp.exception.BadRequestException;
import com.kiosko.app.kioskoapp.exception.ResourceNotFoundException;
import com.kiosko.app.kioskoapp.repository.CargaRepository;
import com.kiosko.app.kioskoapp.repository.EstudianteRepository;
import com.kiosko.app.kioskoapp.service.IAppUserService;
import com.kiosko.app.kioskoapp.service.ICargaService;
import com.kiosko.app.kioskoapp.service.IEstudianteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.math.BigDecimal;
import java.util.List;

@Service
@Transactional
public class ICargaServiceImpl implements ICargaService {
    private final CargaRepository cargaRepository;
    private final EstudianteRepository estudianteRepository;
    private final IAppUserService userService;
    private final IEstudianteService estudianteService;
    private final CargaMapper cargaMapper;
    private final UserMapper userMapper;
    private final EstudianteMapper estudianteMapper;


    @Autowired
    public ICargaServiceImpl(CargaRepository cargaRepository, EstudianteRepository estudianteRepository, IAppUserService userService, IEstudianteService estudianteService, CargaMapper cargaMapper, UserMapper userMapper, EstudianteMapper estudianteMapper) {
        this.cargaRepository = cargaRepository;
        this.estudianteRepository = estudianteRepository;
        this.userService = userService;
        this.estudianteService = estudianteService;
        this.cargaMapper = cargaMapper;
        this.userMapper = userMapper;
        this.estudianteMapper = estudianteMapper;
    }

    @Override
    public List<CargaDTO> getCargasByPadreDni(String dni) throws ResourceNotFoundException, BadRequestException {
        UserProfile padre = userService.getProfileByDni(dni);
        if( padre.getRol() != Rol.PADRE) throw new BadRequestException("El dni ingresado no pertenece a un padre");
        return cargaMapper.cargasToCargasDtos(
                cargaRepository.findByPadreDni(dni)
        );
    }

    @Override
    public List<CargaDTO> getCargasByEstudianteDni(String dni) throws ResourceNotFoundException, BadRequestException {
        estudianteService.getEstudianteByDni(dni);
        List<Carga> cargas = cargaRepository.findByEstudianteUsuarioDni(dni);
        System.out.println(cargas);
        List<CargaDTO> cargaDTOS = cargaMapper.cargasToCargasDtos(
                cargas
        );
        System.out.println(cargaDTOS);
        return cargaDTOS;
    }

    @Override
    public CargaDTO cargarSaldoEnEfectivo(String dniEstudiante, Double monto) throws ResourceNotFoundException {
        Carga carga = new Carga();
        carga.setEstado("completada");
        carga.setMonto(new BigDecimal(monto));
        EstudianteDTO estudianteDTO = estudianteService.getEstudianteByDni(dniEstudiante);
        estudianteDTO.setSaldo(estudianteDTO.getSaldo().add(new BigDecimal(monto)));
        carga.setEstudiante(estudianteMapper.estudianteDtoToEstudiante(estudianteDTO));
        carga.setPadre(userMapper.userProfileToAppUser(estudianteDTO.getPadre()));
//        carga.getEstudiante().setSaldo(carga.getEstudiante().getSaldo().add(carga.getMonto()) );
//        estudianteRepository.save(carga.getEstudiante());
        return cargaMapper.cargaToCargaDto(
                cargaRepository.save(carga)
        );
    }

    @Override
    public CargaDTO getCargaById(int id) throws ResourceNotFoundException {
        return cargaMapper.cargaToCargaDto(
                cargaRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("No existe una carga con id " + id)));
    }
}
