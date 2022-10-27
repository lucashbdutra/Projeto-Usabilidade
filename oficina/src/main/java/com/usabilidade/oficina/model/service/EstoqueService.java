package com.usabilidade.oficina.model.service;

import com.usabilidade.oficina.model.DTO.EstoqueDTO;
import com.usabilidade.oficina.model.entity.Produto;
import com.usabilidade.oficina.model.entity.Servico;
import com.usabilidade.oficina.model.repository.ProdutosRepository;
import com.usabilidade.oficina.model.repository.ServicosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EstoqueService {

    @Autowired
    private ProdutosRepository produtosRepository;
    @Autowired
    private ServicosRepository servicosRepository;


    public EstoqueDTO findAllItens(){
        List<Produto> produtos = produtosRepository.findAll();
        List<Servico> servicos = servicosRepository.findAll();
        EstoqueDTO estoque = new EstoqueDTO();
        estoque.setProdutos(produtos);
        estoque.setServicos(servicos);
        return estoque;
    }


}
