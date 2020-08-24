package br.org.oab.todolist.module.atividade.service;

import br.org.oab.todolist.module.atividade.entity.Atividade;
import br.org.oab.todolist.module.atividade.repository.AtividadeRepository;
import br.org.oab.todolist.module.atividade.dto.AtividadeDTO;
import br.org.oab.todolist.module.atividade.mapper.AtividadeMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class AtividadeService {

    @Autowired
    private AtividadeRepository atividadeRepository;

    @Autowired
    private AtividadeMapper atividadeMapper;

    public List<AtividadeDTO> listarTodas() {
        return atividadeMapper.toDto((List<Atividade>) atividadeRepository.findAll());
    }

    public AtividadeDTO salvar(AtividadeDTO atividadeDTO) {
        return atividadeMapper.toDto(atividadeRepository.save(atividadeMapper.toEntity(atividadeDTO)));
    }

    public void excluir(AtividadeDTO atividadeDTO) {
        atividadeRepository.delete(atividadeMapper.toEntity(atividadeDTO));
    }
}
