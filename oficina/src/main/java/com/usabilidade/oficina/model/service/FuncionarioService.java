package com.usabilidade.oficina.model.service;

import com.usabilidade.oficina.model.entity.Funcionario;
import com.usabilidade.oficina.model.repository.FuncionariosRepository;
import org.springframework.stereotype.Service;

@Service
public class FuncionarioService extends GenericCrudService<Funcionario, Long, FuncionariosRepository>{
}
