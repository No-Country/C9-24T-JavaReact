package com.kiosko.app.kioskoapp.dto.mapper;

import com.kiosko.app.kioskoapp.dto.PedidoDTO;
import com.kiosko.app.kioskoapp.entities.Pedido;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring", uses = {EstudianteMapper.class, ProductoPedidoMapper.class})
public interface PedidoMapper {
    Pedido pedidoDtoToPedido(PedidoDTO pedidoDTO);
    List<Pedido> pedidosDtoToPedidos(List<PedidoDTO> pedidoDTOS);
    PedidoDTO pedidoToPedidoDto(Pedido pedido);
    List<PedidoDTO> pedidosToPedidosDto(List<Pedido> pedidoDTOS);
}
