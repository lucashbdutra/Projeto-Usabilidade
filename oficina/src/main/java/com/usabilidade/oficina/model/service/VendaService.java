package com.usabilidade.oficina.model.service;

import com.usabilidade.oficina.model.entity.Venda;
import com.usabilidade.oficina.model.repository.VendasRepository;
import org.springframework.stereotype.Service;


@Service
public class VendaService extends GenericCrudService<Venda, Long, VendasRepository>{
}
