package com.usabilidade.oficina.model.service;

import com.usabilidade.oficina.model.entity.GastosMensais;
import com.usabilidade.oficina.model.repository.GastosMensaisRepository;
import org.springframework.stereotype.Service;

@Service
public class GastosMensaisService extends GenericCrudService<GastosMensais, Long, GastosMensaisRepository>{
}
