package com.usabilidade.oficina.model.repository;

import com.usabilidade.oficina.model.entity.GastosMensais;
import org.springframework.stereotype.Repository;

@Repository
public interface GastosMensaisRepository extends GenericCrudRepository<GastosMensais, Long> {
}
