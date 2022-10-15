package com.usabilidade.oficina.controller.rest;

import com.usabilidade.oficina.model.entity.Venda;
import com.usabilidade.oficina.model.service.VendaService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("rest/vendas")
public class VendaRest extends GenericCrudRest<Venda, Long, VendaService>{
}
