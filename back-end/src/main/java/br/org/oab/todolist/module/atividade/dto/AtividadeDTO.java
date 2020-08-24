package br.org.oab.todolist.module.atividade.dto;

import lombok.*;

import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AtividadeDTO implements Serializable {
    private Long id;
    private String titulo;


}
