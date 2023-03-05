package com.kiosko.app.kioskoapp.dto.mapper;

import com.kiosko.app.kioskoapp.dto.ProductoCreateDTO;
import com.kiosko.app.kioskoapp.dto.ProductoDTO;
import com.kiosko.app.kioskoapp.entities.Producto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper(componentModel = "spring", uses = {CategoriaMapper.class, CaracteristicaMapper.class, ImagenMapper.class})
public interface ProductoMapper {
    ProductoMapper INSTANCE = Mappers.getMapper( ProductoMapper.class );

    Producto toProducto(ProductoDTO productoDTO);
    List<Producto> toProductos(List<ProductoDTO> productoDTOS);

    ProductoDTO toProductoDTO(Producto producto);
    List<ProductoDTO> toProductoDTOs(List<Producto> productos);

    @Mappings({
            @Mapping(target = "id", ignore = true),
            @Mapping(target = "caracteristicas", ignore = true),
            @Mapping(target = "categoria", ignore = true),
            @Mapping(target = "imagenes", ignore = true)
    })
    Producto toProducto(ProductoCreateDTO productoCreateDTO);
    ProductoCreateDTO toProductoCreateDTO(Producto producto);
    ProductoCreateDTO toProductoCreateDTO(ProductoDTO producto);
    ProductoDTO toProductoDTO(ProductoCreateDTO productoCreateDTO);
}
