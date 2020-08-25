package br.org.oab.todolist.module.atividade.repository;

import br.org.oab.todolist.module.atividade.entity.Atividade;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface AtividadeRepository extends CrudRepository<Atividade, Long> {

    @Transactional
    @Modifying
    @Query("update Atividade a set a.concluido = true where a.id=:id")
    void updateConcluidoById(@Param("id") Long id);
}