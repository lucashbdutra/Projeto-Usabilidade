package com.usabilidade.oficina.controller.rest;

import com.usabilidade.oficina.model.entity.Produto;
import com.usabilidade.oficina.model.service.ProdutoService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("rest/produtos")
public class ProdutoRest extends GenericCrudRest<Produto, Long, ProdutoService>{
}
