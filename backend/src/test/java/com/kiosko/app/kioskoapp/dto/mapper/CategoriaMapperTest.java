package com.kiosko.app.kioskoapp.dto.mapper;

import com.kiosko.app.kioskoapp.dto.CategoriaCreateDTO;
import com.kiosko.app.kioskoapp.dto.CategoriaDTO;
import com.kiosko.app.kioskoapp.entities.Categoria;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class CategoriaMapperTest {

    CategoriaMapper mapper = CategoriaMapper.INSTANCE;

    @Test
    public void categoriaCreateMapper() {
        Categoria categoria = new Categoria(4,"categoria", "imagen");
        CategoriaCreateDTO categoriaCreateDTO = new CategoriaCreateDTO("categoriaDTO","imagenDTO");

        // convertimos de DTO a categoria
        Categoria mappedCategoria = mapper.toCategoria(categoriaCreateDTO);

        assertNotNull(mappedCategoria);
        assertNull(mappedCategoria.getId());
        assertEquals(mappedCategoria.getImagen(), categoriaCreateDTO.getImagen());
        assertEquals(mappedCategoria.getNombre(), categoriaCreateDTO.getNombre());

        //convertimos de categori a DTO
        CategoriaCreateDTO mappedCategoriaCreateDTO = mapper.toCategoriaCreateDTO(categoria);

        assertNotNull(mappedCategoriaCreateDTO);
        assertEquals(mappedCategoriaCreateDTO.getImagen(), categoria.getImagen());
        assertEquals(mappedCategoriaCreateDTO.getNombre(), categoria.getNombre());
    }

    @Test
    public void categoriaMapper() {
        Categoria categoria = new Categoria(4,"categoria", "imagen");
        CategoriaDTO categoriaDTO = new CategoriaDTO(5,"categoriaDTO", "imagenDTO");
        assertEquals(categoriaDTO.getId(), 5);

        // convertimos de DTO a categoria
        Categoria mappedCategoria = mapper.toCategoria(categoriaDTO);

        assertNotNull(mappedCategoria);
        assertEquals(categoriaDTO.getId(), mappedCategoria.getId());
        assertEquals(mappedCategoria.getNombre(), categoriaDTO.getNombre());
        assertEquals(mappedCategoria.getImagen(), categoriaDTO.getImagen());


    }

}