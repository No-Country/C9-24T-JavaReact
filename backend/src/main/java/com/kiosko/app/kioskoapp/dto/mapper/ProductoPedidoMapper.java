package com.kiosko.app.kioskoapp.dto.mapper;

import com.kiosko.app.kioskoapp.dto.ProductoPedidoDTO;
import com.kiosko.app.kioskoapp.entities.ProductoPedido;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring", uses = {ProductoMapper.class})
public interface ProductoPedidoMapper {
    @Mapping(target = "id", ignore = true)
    ProductoPedido productoPedidoDtoToProductoPedido(ProductoPedidoDTO productoPedidoDTO);
    List<ProductoPedido> productoPedidosDtoToProductosPedidos(List<ProductoPedidoDTO> productoPedidoDTOS);
    ProductoPedidoDTO productoPedidoToProductoPedidoDto(ProductoPedido productoPedido);
    List<ProductoPedidoDTO> productoPedidosToProductoPedidoDtos(List<ProductoPedido> productoPedidos);
}
