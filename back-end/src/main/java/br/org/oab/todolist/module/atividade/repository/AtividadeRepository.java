package br.org.oab.todolist.module.atividade.repository;

import br.org.oab.todolist.module.atividade.entity.Atividade;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AtividadeRepository extends CrudRepository<Atividade, Long> {
}