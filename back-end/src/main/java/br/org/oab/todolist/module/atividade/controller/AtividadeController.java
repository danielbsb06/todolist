package br.org.oab.todolist.module.atividade.controller;

import br.org.oab.todolist.module.atividade.service.AtividadeService;
import br.org.oab.todolist.module.atividade.dto.AtividadeDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "/api/atividade")
public class AtividadeController {

    @Autowired
    private AtividadeService atividadeService;

    @GetMapping
    public List<AtividadeDTO> listarTodas() {
        return atividadeService.listarTodas();
    }

    @PostMapping
    public ResponseEntity<AtividadeDTO> incluir(AtividadeDTO atividadeDTO) {
        return ResponseEntity.ok(atividadeService.incluir(atividadeDTO));
    }

}