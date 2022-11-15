package com.usabilidade.oficina.model.repository;

import com.usabilidade.oficina.model.entity.Produto;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProdutosRepository extends GenericCrudRepository<Produto, Long> {

    public List<Produto> findByMes(String mes);
}
