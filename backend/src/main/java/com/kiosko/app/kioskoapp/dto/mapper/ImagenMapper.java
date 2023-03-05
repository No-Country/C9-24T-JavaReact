package com.kiosko.app.kioskoapp.dto.mapper;

import com.kiosko.app.kioskoapp.dto.ImagenCreateDTO;
import com.kiosko.app.kioskoapp.dto.ImagenDTO;
import com.kiosko.app.kioskoapp.entities.ImagenesProductos;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

import java.awt.*;
import java.util.List;

@Mapper(componentModel = "spring")
public interface ImagenMapper {

    ImagenMapper INSTANCE = Mappers.getMapper(ImagenMapper.class);

    ImagenDTO imagenToImagenDTO(ImagenesProductos imagen);
    List<ImagenDTO> imagenesToImagenesDTO(List<ImagenesProductos> imagenes);

    @Mapping(target = "idProducto", ignore = true)
    ImagenesProductos imagenDTOToImagen(ImagenDTO imagenDTO);
    List<ImagenesProductos> imagenesDTOToImagenes(List<ImagenDTO> imagenesDTO);

    ImagenCreateDTO imagenToImagenCreateDTO(Image imagen);
    ImagenesProductos imagenCreateDTOToImagen(ImagenCreateDTO imagenCreateDTO);

}