package com.usabilidade.oficina.model.service;

import com.usabilidade.oficina.model.entity.Cliente;
import com.usabilidade.oficina.model.repository.ClientesRepository;
import org.springframework.stereotype.Service;

@Service
public class ClienteService extends GenericCrudService<Cliente, Long, ClientesRepository>{

}

