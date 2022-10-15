package com.usabilidade.oficina.model.repository;

import com.usabilidade.oficina.model.entity.Cliente;
import org.springframework.stereotype.Repository;

@Repository
public interface ClientesRepository extends GenericCrudRepository<Cliente, Long> {
}
