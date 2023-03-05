package com.kiosko.app.kioskoapp.dto.mapper;

import com.kiosko.app.kioskoapp.dto.CaracteristicaCreateDTO;
import com.kiosko.app.kioskoapp.dto.CaracteristicaDTO;
import com.kiosko.app.kioskoapp.dto.CategoriaCreateDTO;
import com.kiosko.app.kioskoapp.dto.CategoriaDTO;
import com.kiosko.app.kioskoapp.entities.Caracteristica;
import com.kiosko.app.kioskoapp.entities.Categoria;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class CaracteristicaMapperTest {

    CaracteristicaMapper mapper = CaracteristicaMapper.INSTANCE;

    @Test
    public void caracteristicaCreateMapper() {
        Caracteristica caracteristica = new Caracteristica(4,"caracteristica");
        CaracteristicaCreateDTO caracteristicaCreateDTO = new CaracteristicaCreateDTO("caracteristicaDTO");

        // convertimos de DTO a caracteristica
        Caracteristica mappedCaracteristica = mapper.toCaracteristica(caracteristicaCreateDTO);

        assertNotNull(mappedCaracteristica);
        assertNull(mappedCaracteristica.getId());
        assertEquals(mappedCaracteristica.getNombre(), caracteristicaCreateDTO.getNombre());

        //convertimos de caracteristica a DTO
        CaracteristicaCreateDTO mappedCaracteristicaCreateDTO = mapper.toCaracteristicaCreateDTO(caracteristica);

        assertNotNull(mappedCaracteristicaCreateDTO);
        assertEquals(mappedCaracteristicaCreateDTO.getNombre(), caracteristica.getNombre());
    }

    @Test
    public void categoriaMapper() {
        Caracteristica caracteristica = new Caracteristica(4,"caracteristica");
        CaracteristicaDTO caracteristicaDTO = new CaracteristicaDTO(5,"caracteristicaDTO");

        // convertimos de DTO a categoria
        Caracteristica mappedCaracteristica = mapper.toCaracteristica(caracteristicaDTO);

        assertNotNull(mappedCaracteristica);
        assertEquals(caracteristicaDTO.getId(), mappedCaracteristica.getId());
        assertEquals(caracteristicaDTO.getNombre(), mappedCaracteristica.getNombre());


    }

}