package com.usabilidade.oficina.model.repository;

import com.usabilidade.oficina.model.entity.Produto;
import org.springframework.stereotype.Repository;

@Repository
public interface ProdutosRepository extends GenericCrudRepository<Produto, Long> {
}
