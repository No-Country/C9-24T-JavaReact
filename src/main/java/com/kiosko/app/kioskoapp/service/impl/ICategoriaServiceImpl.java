package com.kiosko.app.kioskoapp.service.impl;

import com.kiosko.app.kioskoapp.dto.CategoriaCreateDTO;
import com.kiosko.app.kioskoapp.dto.CategoriaDTO;
import com.kiosko.app.kioskoapp.dto.mapper.CategoriaMapper;
import com.kiosko.app.kioskoapp.entities.Categoria;
import com.kiosko.app.kioskoapp.exception.ResourceAlreadyExistsException;
import com.kiosko.app.kioskoapp.exception.ResourceNotFoundException;
import com.kiosko.app.kioskoapp.repository.CategoriaRepository;
import com.kiosko.app.kioskoapp.service.ICategoriaService;
import com.kiosko.app.kioskoapp.util.Utils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.ResourceAccessException;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class ICategoriaServiceImpl implements ICategoriaService {
    private final CategoriaRepository categoriaRepository;
    private final CategoriaMapper categoriaMapper;

    @Autowired
    public ICategoriaServiceImpl(CategoriaRepository categoriaRepository, CategoriaMapper categoriaMapper) {
        this.categoriaRepository = categoriaRepository;
        this.categoriaMapper = categoriaMapper;
    }

    @Override
    public List<CategoriaDTO> getAll() {
        return categoriaMapper.toCategoriasDTO(categoriaRepository.findAll());
    }

    @Override
    public CategoriaDTO getById(Integer id) throws ResourceNotFoundException {
        return categoriaMapper.toCategoriaDTO(
                categoriaRepository.findById(id)
                        .orElseThrow(
                                () -> new ResourceNotFoundException("Categoria con id " + id + " no encontrada" )
                        )
        );
    }

    @Override
    public CategoriaDTO create(CategoriaCreateDTO categoriaCreateDTO) throws ResourceAlreadyExistsException {
        if(categoriaRepository.findByNombre(categoriaCreateDTO.getNombre()).isPresent()) throw new ResourceAlreadyExistsException("Ya existe una categoria con este nombre");
        return categoriaMapper.toCategoriaDTO(
                categoriaRepository.save(categoriaMapper.toCategoria(categoriaCreateDTO))
        );

    }

    @Override
    public CategoriaDTO update(CategoriaDTO categoriaDTO) throws ResourceNotFoundException {
        CategoriaDTO nuevaCategoria = getById(categoriaDTO.getId());
        Utils.mergeObjects(categoriaDTO, nuevaCategoria);
        return categoriaMapper.toCategoriaDTO( categoriaRepository.save(categoriaMapper.toCategoria(nuevaCategoria)) );
    }

    @Override
    public void delete(Integer id) throws ResourceNotFoundException {
        categoriaRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Categoria no encontrada")
        );

        categoriaRepository.deleteById(id);
    }
}
