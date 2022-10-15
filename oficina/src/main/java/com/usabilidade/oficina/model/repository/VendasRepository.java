package com.usabilidade.oficina.model.repository;

import com.usabilidade.oficina.model.entity.Venda;
import org.springframework.stereotype.Repository;

@Repository
public interface VendasRepository extends GenericCrudRepository<Venda, Long> {
}
