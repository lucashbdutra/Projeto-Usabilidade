package com.usabilidade.oficina.model.service;

import com.usabilidade.oficina.model.entity.Servico;
import com.usabilidade.oficina.model.repository.ServicosRepository;
import org.springframework.stereotype.Service;

@Service
public class ServicosService extends GenericCrudService<Servico, Long, ServicosRepository>{
}
