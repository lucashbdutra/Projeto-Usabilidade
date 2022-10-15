package com.usabilidade.oficina.controller.rest;

import com.usabilidade.oficina.model.entity.Funcionario;
import com.usabilidade.oficina.model.service.FuncionarioService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("rest/funcionarios")
public class FuncionarioRest extends GenericCrudRest<Funcionario, Long, FuncionarioService>{
}
