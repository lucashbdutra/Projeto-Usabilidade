package com.usabilidade.oficina.model.service;

import com.usabilidade.oficina.model.entity.Produto;
import com.usabilidade.oficina.model.repository.ProdutosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.sound.sampled.Port;
import javax.validation.Valid;
import java.text.Format;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Service
public class ProdutoService extends GenericCrudService<Produto, Long, ProdutosRepository>{

    @Autowired
    private ProdutosRepository produtosRepository;

    public Produto cadastrar(@Valid Produto produto){

        Date date = new Date();
        Format format = new SimpleDateFormat("MM");
        produto.setMes(format.format(date));

        produtosRepository.save(produto);

        return produto;
    }
}
