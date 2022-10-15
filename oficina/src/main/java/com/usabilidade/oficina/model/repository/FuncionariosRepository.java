package com.usabilidade.oficina.model.repository;

import com.usabilidade.oficina.model.entity.Funcionario;
import org.springframework.stereotype.Repository;

@Repository
public interface FuncionariosRepository extends GenericCrudRepository<Funcionario, Long> {
}
