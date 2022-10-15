package com.usabilidade.oficina.model.service;

import com.usabilidade.oficina.model.entity.Produto;
import com.usabilidade.oficina.model.repository.ProdutosRepository;
import org.springframework.stereotype.Service;

@Service
public class ProdutoService extends GenericCrudService<Produto, Long, ProdutosRepository>{
}
