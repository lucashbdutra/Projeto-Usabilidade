package com.usabilidade.oficina.controller.rest;

import com.usabilidade.oficina.model.entity.Servico;
import com.usabilidade.oficina.model.service.ServicosService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("rest/servicos")
public class ServicoRest extends GenericCrudRest<Servico, Long, ServicosService>{
}
