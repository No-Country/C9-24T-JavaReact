package com.kiosko.app.kioskoapp.dto.mapper;

import com.kiosko.app.kioskoapp.dto.CategoriaCreateDTO;
import com.kiosko.app.kioskoapp.dto.CategoriaDTO;
import com.kiosko.app.kioskoapp.entities.Categoria;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper(componentModel = "spring")
public interface CategoriaMapper {

    CategoriaMapper INSTANCE = Mappers.getMapper( CategoriaMapper.class );

    Categoria toCategoria(CategoriaDTO categoriaDTO);
    List<Categoria> toCategorias(List<Categoria> categoriaDTOS);
    CategoriaDTO toCategoriaDTO(Categoria categoria);
    List<CategoriaDTO> toCategoriasDTO(List<Categoria> categorias);


    @Mapping(target = "id", ignore = true)
    Categoria toCategoria(CategoriaCreateDTO categoriaCreateDTO);
    CategoriaCreateDTO toCategoriaCreateDTO(Categoria categoria);
    CategoriaDTO toCategoriaDTO(CategoriaCreateDTO categoriaCreateDTO);
}
