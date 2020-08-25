package br.org.oab.todolist.module.atividade.entity;

import lombok.*;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Atividade {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;

    private String titulo;

    @Column(name = "CONCLUIDO", insertable = false, updatable = false)
    private Boolean concluido;
}