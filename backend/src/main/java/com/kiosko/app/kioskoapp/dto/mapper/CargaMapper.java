package com.kiosko.app.kioskoapp.dto.mapper;

import com.kiosko.app.kioskoapp.dto.CargaDTO;
import com.kiosko.app.kioskoapp.entities.Carga;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper(componentModel = "spring", uses = {UserMapper.class, EstudianteMapper.class})
public interface CargaMapper {
    CargaMapper INSTANCE = Mappers.getMapper(CargaMapper.class);


    CargaDTO cargaToCargaDto(Carga carga);
    List<CargaDTO> cargasToCargasDtos(List<Carga> cargas);
    @Mapping(target = "padre", ignore = true)
    Carga cargaDtoToCarga(CargaDTO cargaDTO);
}
