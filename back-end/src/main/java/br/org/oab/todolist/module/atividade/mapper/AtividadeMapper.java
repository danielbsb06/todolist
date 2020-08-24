package br.org.oab.todolist.module.atividade.mapper;

import br.org.oab.todolist.common.service.mapper.GenericMapper;
import br.org.oab.todolist.module.atividade.entity.Atividade;
import br.org.oab.todolist.module.atividade.dto.AtividadeDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface AtividadeMapper extends GenericMapper<AtividadeDTO, Atividade> {

}