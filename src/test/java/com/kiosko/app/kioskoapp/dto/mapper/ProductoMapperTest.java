package com.kiosko.app.kioskoapp.dto.mapper;

import com.kiosko.app.kioskoapp.dto.CaracteristicaDTO;
import com.kiosko.app.kioskoapp.dto.CategoriaDTO;
import com.kiosko.app.kioskoapp.dto.ProductoDTO;
import com.kiosko.app.kioskoapp.entities.Caracteristica;
import com.kiosko.app.kioskoapp.entities.Categoria;
import com.kiosko.app.kioskoapp.entities.Producto;
import com.kiosko.app.kioskoapp.util.Utils;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.math.BigDecimal;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class ProductoMapperTest {

    private final ProductoMapper mapper;

    @Autowired
    ProductoMapperTest(ProductoMapper mapper) {
        this.mapper = mapper;
    }

    @Test
    public void productoMapper() {
        Producto producto = new Producto(
                4,"producto","descProducto", new BigDecimal(40),4,
                new Categoria(1,"categoria","imgCategoria"),
                Utils.getListOf(
                        new Caracteristica(1,"caract1"),
                        new Caracteristica(2,"caract2")
                )
        );

        ProductoDTO productoDTO = new ProductoDTO(
                5, "productoDTO", "descripcionProductoDTO", new BigDecimal(50), 4,
                new CategoriaDTO(2, "categoriaDTO","imgCategoria"),
                Utils.getListOf(
                        new CaracteristicaDTO(3,"caractDTO3"),
                        new CaracteristicaDTO(4, "caractDTO4")
                )
        );

        // Convertimos de DTO a producto

        Producto mappedProducto = mapper.toProducto(productoDTO);

        assertNotNull(mappedProducto);
        assertEquals(productoDTO.getId(), mappedProducto.getId());
        assertEquals(productoDTO.getNombre(), mappedProducto.getNombre());
        assertEquals(productoDTO.getDescripcion(), mappedProducto.getDescripcion());
        assertEquals(productoDTO.getPrecio(), mappedProducto.getPrecio());
        assertEquals(productoDTO.getStock(), mappedProducto.getStock());
        assertEquals(productoDTO.getCategoria().getId(), mappedProducto.getCategoria().getId());
        assertEquals(productoDTO.getCategoria().getNombre(), mappedProducto.getCategoria().getNombre());
        assertEquals(productoDTO.getCaracteristicas().get(0).getId(), mappedProducto.getCaracteristicas().get(0).getId());
        assertEquals(productoDTO.getCaracteristicas().get(1).getId(), mappedProducto.getCaracteristicas().get(1).getId());
        assertEquals(productoDTO.getCaracteristicas().get(0).getNombre(), mappedProducto.getCaracteristicas().get(0).getNombre());
        assertEquals(productoDTO.getCaracteristicas().get(1).getNombre(), mappedProducto.getCaracteristicas().get(1).getNombre());

        // Convertimos de producto a DTO

        ProductoDTO mappedProductoDTO = mapper.toProductoDTO(producto);

        assertNotNull(mappedProducto);
        assertEquals(producto.getId(), mappedProductoDTO.getId());
        assertEquals(producto.getNombre(), mappedProductoDTO.getNombre());
        assertEquals(producto.getDescripcion(), mappedProductoDTO.getDescripcion());
        assertEquals(producto.getPrecio(), mappedProductoDTO.getPrecio());
        assertEquals(producto.getStock(), mappedProductoDTO.getStock());
        assertEquals(producto.getCategoria().getId(), mappedProductoDTO.getCategoria().getId());
        assertEquals(producto.getCategoria().getNombre(), mappedProductoDTO.getCategoria().getNombre());
        assertEquals(producto.getCaracteristicas().get(0).getId(), mappedProductoDTO.getCaracteristicas().get(0).getId());
        assertEquals(producto.getCaracteristicas().get(1).getId(), mappedProductoDTO.getCaracteristicas().get(1).getId());
        assertEquals(producto.getCaracteristicas().get(0).getNombre(), mappedProductoDTO.getCaracteristicas().get(0).getNombre());
        assertEquals(producto.getCaracteristicas().get(1).getNombre(), mappedProductoDTO.getCaracteristicas().get(1).getNombre());

    }

}