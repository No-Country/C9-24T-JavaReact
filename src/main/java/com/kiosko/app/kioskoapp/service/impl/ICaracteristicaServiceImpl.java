package com.kiosko.app.kioskoapp.service.impl;

import com.kiosko.app.kioskoapp.dto.CaracteristicaCreateDTO;
import com.kiosko.app.kioskoapp.dto.CaracteristicaDTO;
import com.kiosko.app.kioskoapp.dto.mapper.CaracteristicaMapper;
import com.kiosko.app.kioskoapp.exception.ResourceAlreadyExistsException;
import com.kiosko.app.kioskoapp.exception.ResourceNotFoundException;
import com.kiosko.app.kioskoapp.repository.CaracteristicaRepository;
import com.kiosko.app.kioskoapp.service.ICaracteristicaService;
import com.kiosko.app.kioskoapp.util.Utils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class ICaracteristicaServiceImpl implements ICaracteristicaService {
    private final CaracteristicaRepository caracteristicaRepository;
    private final CaracteristicaMapper caracteristicaMapper;

    @Autowired
    public ICaracteristicaServiceImpl(CaracteristicaRepository caracteristicaRepository, CaracteristicaMapper caracteristicaMapper) {
        this.caracteristicaRepository = caracteristicaRepository;
        this.caracteristicaMapper = caracteristicaMapper;
    }

    @Override
    public List<CaracteristicaDTO> getAll() {
        return caracteristicaMapper.toCaracteristicaDTOs(caracteristicaRepository.findAll());
    }

    @Override
    public CaracteristicaDTO getById(Integer id) throws ResourceNotFoundException {
        return caracteristicaMapper.toCaracteristicaDTO(
                caracteristicaRepository.findById(id)
                        .orElseThrow( () -> new ResourceNotFoundException("Caracteristica con id " + id + " no encontrada"))
        );
    }

    @Override
    public CaracteristicaDTO create(CaracteristicaCreateDTO caracteristicaCreateDTO) throws ResourceAlreadyExistsException {
        if(caracteristicaRepository.findByNombre(caracteristicaCreateDTO.getNombre()).isPresent()) throw new ResourceAlreadyExistsException("Ya existe una caracteristica con este nombre");
        return caracteristicaMapper.toCaracteristicaDTO(
                caracteristicaRepository.save(caracteristicaMapper.toCaracteristica(caracteristicaCreateDTO))
        );
    }

    @Override
    public CaracteristicaDTO update(CaracteristicaDTO caracteristicaDTO) throws ResourceNotFoundException {
        CaracteristicaDTO nuevaCaracteristica = getById(caracteristicaDTO.getId());
        Utils.mergeObjects(caracteristicaDTO, nuevaCaracteristica);
        return caracteristicaMapper.toCaracteristicaDTO(
                caracteristicaRepository.save(caracteristicaMapper.toCaracteristica(nuevaCaracteristica))
        );
    }

    @Override
    public void delete(Integer id) throws ResourceNotFoundException {
        caracteristicaRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Caracteristica no encontrada")
        );

        caracteristicaRepository.deleteById(id);
    }
}
