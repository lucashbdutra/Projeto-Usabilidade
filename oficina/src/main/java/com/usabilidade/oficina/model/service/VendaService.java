package com.usabilidade.oficina.model.service;

import com.usabilidade.oficina.model.entity.Produto;
import com.usabilidade.oficina.model.entity.Servico;
import com.usabilidade.oficina.model.entity.Venda;
import com.usabilidade.oficina.model.repository.ProdutosRepository;
import com.usabilidade.oficina.model.repository.VendasRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.text.Format;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;


@Service
public class VendaService extends GenericCrudService<Venda, Long, VendasRepository>{

    @Autowired
    private VendasRepository vendasRepository;
    @Autowired
    private ProdutosRepository produtosRepository;


    public Venda makeSell(Venda venda){

        Date date = new Date();
        Format format = new SimpleDateFormat("MM");
        List<Produto> produtos = venda.getProdutos();
        long subtotal = 0;
        BigDecimal total;

        for(Produto produto: produtos){
            Produto alterQuant = produtosRepository.findById(produto.getId())
                    .orElseThrow(IndexOutOfBoundsException::new);
            alterQuant.setQuantidade(alterQuant.getQuantidade() - produto.getQuantidade());
            produtosRepository.save(alterQuant);

            subtotal += produto.getQuantidade() * produto.getValorFinal().floatValue();
        }

        total = BigDecimal.valueOf(subtotal);
        venda.setData(date);
        venda.setValor(total);
        venda.setMes(format.format(date));

        vendasRepository.save(venda);
        return venda;
    }

}
