package br.org.oab.todolist.module.atividade.service;

import br.org.oab.todolist.module.atividade.dto.AtividadeDTO;
import br.org.oab.todolist.module.atividade.entity.Atividade;
import br.org.oab.todolist.module.atividade.mapper.AtividadeMapper;
import br.org.oab.todolist.module.atividade.repository.AtividadeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AtividadeService {

    @Autowired
    private AtividadeRepository atividadeRepository;

    @Autowired
    private AtividadeMapper atividadeMapper;

    @Cacheable("atividade")
    public List<AtividadeDTO> listarTodas() {
        return atividadeMapper.toDto((List<Atividade>) atividadeRepository.findAll());
    }

    @CacheEvict(value="atividade",  allEntries = true)
    public AtividadeDTO salvar(AtividadeDTO atividadeDTO) {
        return atividadeMapper.toDto(atividadeRepository.save(atividadeMapper.toEntity(atividadeDTO)));
    }

    @CacheEvict(value="atividade",  allEntries = true)
    public void excluir(AtividadeDTO atividadeDTO) {
        atividadeRepository.delete(atividadeMapper.toEntity(atividadeDTO));
    }
}
