package com.usabilidade.oficina.controller.rest;

import com.usabilidade.oficina.model.entity.GastosMensais;
import com.usabilidade.oficina.model.service.GastosMensaisService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("rest/gastos")
public class GastosMensaisRest extends GenericCrudRest<GastosMensais, Long, GastosMensaisService>{
}
