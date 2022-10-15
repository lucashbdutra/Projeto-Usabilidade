package com.usabilidade.oficina.model.repository;

import com.usabilidade.oficina.model.entity.Servico;
import org.springframework.stereotype.Repository;

@Repository
public interface ServicosRepository extends GenericCrudRepository<Servico, Long> {
}
