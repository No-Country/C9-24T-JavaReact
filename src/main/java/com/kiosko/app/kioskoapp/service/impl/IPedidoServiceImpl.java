package com.kiosko.app.kioskoapp.service.impl;

import com.kiosko.app.kioskoapp.dto.*;
import com.kiosko.app.kioskoapp.dto.mapper.EstudianteMapper;
import com.kiosko.app.kioskoapp.dto.mapper.PedidoMapper;
import com.kiosko.app.kioskoapp.dto.mapper.ProductoMapper;
import com.kiosko.app.kioskoapp.dto.mapper.ProductoPedidoMapper;
import com.kiosko.app.kioskoapp.entities.Pedido;
import com.kiosko.app.kioskoapp.exception.BadRequestException;
import com.kiosko.app.kioskoapp.exception.InsufficientFundsException;
import com.kiosko.app.kioskoapp.exception.ResourceNotFoundException;
import com.kiosko.app.kioskoapp.repository.EstudianteRepository;
import com.kiosko.app.kioskoapp.repository.PedidoRepository;
import com.kiosko.app.kioskoapp.service.IAppUserService;
import com.kiosko.app.kioskoapp.service.IEstudianteService;
import com.kiosko.app.kioskoapp.service.IPedidoService;
import com.kiosko.app.kioskoapp.service.IProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class IPedidoServiceImpl implements IPedidoService {
    private final PedidoRepository pedidoRepository;
    private final IAppUserService appUserService;
    private final IEstudianteService estudianteService;
    private final EstudianteRepository estudianteRepository;
    private final IProductoService productoService;

    private final PedidoMapper pedidoMapper;
    private final EstudianteMapper estudianteMapper;
    private final ProductoMapper productoMapper;
    private final ProductoPedidoMapper productoPedidoMapper;

    @Autowired
    public IPedidoServiceImpl(PedidoRepository pedidoRepository, IAppUserService appUserService, IEstudianteService estudianteService, EstudianteRepository estudianteRepository, IProductoService productoService, PedidoMapper pedidoMapper, EstudianteMapper estudianteMapper, ProductoMapper productoMapper, ProductoPedidoMapper productoPedidoMapper) {
        this.pedidoRepository = pedidoRepository;
        this.appUserService = appUserService;
        this.estudianteService = estudianteService;
        this.estudianteRepository = estudianteRepository;
        this.productoService = productoService;
        this.pedidoMapper = pedidoMapper;
        this.estudianteMapper = estudianteMapper;
        this.productoMapper = productoMapper;
        this.productoPedidoMapper = productoPedidoMapper;
    }

    @Override
    public List<PedidoDTO> getAll() {
        List<Pedido> pedidos = pedidoRepository.findAll();
        System.out.println(pedidos);
        System.out.println(pedidoMapper.pedidosToPedidosDto(pedidos));
        return pedidoMapper.pedidosToPedidosDto(pedidoRepository.findAll());
    }

    @Override
    public PedidoDTO getById(Integer id) throws ResourceNotFoundException {
        return pedidoMapper.pedidoToPedidoDto(
                pedidoRepository.findById(id)
                        .orElseThrow(() -> new ResourceNotFoundException("Pedido con id " + id + " no encontrado"))
        );
    }

    @Override
    public List<PedidoDTO> getByEstudianteDni(String dniEstudiante) throws ResourceNotFoundException {
        if(appUserService.getProfileByDni(dniEstudiante).getRol() != Rol.ESTUDIANTE) throw new ResourceNotFoundException("Estudiante no encontrado");
        return pedidoMapper.pedidosToPedidosDto(
                pedidoRepository.findByEstudianteUsuarioDni(dniEstudiante)
        );
    }

    @Override
    public List<PedidoDTO> getByPadreDni(String dniPadre) throws ResourceNotFoundException {
        if(appUserService.getProfileByDni(dniPadre).getRol() != Rol.PADRE) throw new ResourceNotFoundException("Padre no encontrado");
        return pedidoMapper.pedidosToPedidosDto(
                pedidoRepository.findByEstudiantePadreDni(dniPadre)
        );
    }

    @Override
    public PedidoDTO createPedido(PedidoCreateDTO pedidoDto, String dniEstudiante) throws ResourceNotFoundException, InsufficientFundsException, BadRequestException {
        EstudianteDTO estudiante = estudianteService.getEstudianteByDni(dniEstudiante);
        List<ProductoPedidoDTO> productos = getProductos(pedidoDto);

        BigDecimal total = getTotal(productos);
        validarStock(productos);
        actualizarStock(productos);

        if (total.compareTo(estudiante.getSaldo()) > 0) throw new InsufficientFundsException("No tienes suficiente dinero para hacer este pedido");
        actualizarSaldoEstudiante(estudiante, total);

        PedidoDTO pedido = new PedidoDTO(null, "listo para retirar", estudiante, productos);
        return pedidoMapper.pedidoToPedidoDto(pedidoRepository.save(pedidoMapper.pedidoDtoToPedido(pedido)));
    }

    private List<ProductoPedidoDTO> getProductos(PedidoCreateDTO pedidoDto) throws ResourceNotFoundException {
        List<ProductoPedidoDTO> productos = new ArrayList<>();
        for (ProductoPedidoCreateDTO productoPedidoDto: pedidoDto.getProductos()
             ) {
            productos.add(new ProductoPedidoDTO(productoService.getById(productoPedidoDto.getIdProducto()), productoPedidoDto.getCantidad()));
        }
        return productos;
    }

    @Override
    public PedidoDTO cancelarPedidoByID(Integer id) throws ResourceNotFoundException {
        Pedido pedido = pedidoRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Pedido con id " + id + " no encontrado"));
        actualizarSaldoEstudiante(estudianteMapper.estudianteToEstudianteDTO(pedido.getEstudiante()), getTotal(productoPedidoMapper.productoPedidosToProductoPedidoDtos(pedido.getProductos())).negate());
        pedido.setEstado("cancelado");
        return pedidoMapper.pedidoToPedidoDto(pedidoRepository.save(pedido));
    }

    private void actualizarSaldoEstudiante(EstudianteDTO estudiante, BigDecimal totalAQuitar) {
        estudiante.setSaldo(estudiante.getSaldo().subtract(totalAQuitar));
        estudianteRepository.save(estudianteMapper.estudianteDtoToEstudiante(estudiante));
    }

    private void actualizarStock(List<ProductoPedidoDTO> productoPedidoDTOs) throws ResourceNotFoundException {
        for (ProductoPedidoDTO producto : productoPedidoDTOs) {
            ProductoDTO productoDTO = productoService.getById(producto.getProducto().getId());
            productoDTO.setStock(productoDTO.getStock() - producto.getCantidad());
            System.out.println(productoMapper.toProductoCreateDTO(productoDTO));
            productoService.update(productoMapper.toProductoCreateDTO(productoDTO), productoDTO.getId());
        }
    }

    private static void validarStock(List<ProductoPedidoDTO> productoPedidoDTOs) throws BadRequestException {
        for (ProductoPedidoDTO producto: productoPedidoDTOs) {
            if (producto.getCantidad() > producto.getProducto().getStock()) throw new BadRequestException("No hay suficiente stock de " + producto.getProducto().getNombre());
        }
    }

    private static BigDecimal getTotal(List<ProductoPedidoDTO> pedidoDto) {
        BigDecimal total = new BigDecimal(0);
        for (ProductoPedidoDTO producto : pedidoDto) {
            total = total.add(producto.getProducto().getPrecio()).multiply(new BigDecimal(producto.getCantidad()));
        }
        return total;
    }


}
