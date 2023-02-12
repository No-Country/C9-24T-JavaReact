package com.kiosko.app.kioskoapp.dto.mapper;

import com.kiosko.app.kioskoapp.dto.CaracteristicaCreateDTO;
import com.kiosko.app.kioskoapp.dto.CaracteristicaDTO;
import com.kiosko.app.kioskoapp.entities.Caracteristica;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper(componentModel = "spring")
public interface CaracteristicaMapper {
    CaracteristicaMapper INSTANCE = Mappers.getMapper( CaracteristicaMapper.class );

    Caracteristica toCaracteristica(CaracteristicaDTO caracteristicaDTO);
    List<Caracteristica> toCaracteristicas(List<CaracteristicaDTO> caracteristicaDTOS);
    CaracteristicaDTO toCaracteristicaDTO(Caracteristica caracteristica);
    List<CaracteristicaDTO> toCaracteristicaDTOs(List<Caracteristica> caracteristicas);


    @Mapping(target = "id", ignore = true)
    Caracteristica toCaracteristica(CaracteristicaCreateDTO caracteristicaCreateDTO);
    CaracteristicaCreateDTO toCaracteristicaCreateDTO(Caracteristica caracteristica);
    CaracteristicaDTO toCaracteristicaDTO(CaracteristicaCreateDTO caracteristicaCreateDTO);
}
