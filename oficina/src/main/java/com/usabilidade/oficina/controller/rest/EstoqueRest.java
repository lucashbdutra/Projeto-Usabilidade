package com.usabilidade.oficina.controller.rest;

import com.usabilidade.oficina.model.DTO.EstoqueDTO;
import com.usabilidade.oficina.model.service.EstoqueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("rest/estoque")
public class EstoqueRest {

    @Autowired
    private EstoqueService estoqueService;

    @GetMapping
    public ResponseEntity<EstoqueDTO> findAllItens(){

        return ResponseEntity.ok().body(estoqueService.findAllItens());
    }
}
