package com.usabilidade.oficina.model.entity;

import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@EqualsAndHashCode(callSuper = true)
public class Venda extends GenericEntity<Long>{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToMany
    @JoinColumn(name = "fk_servicos_id")
    private List<Servico> servicos;

    @ManyToMany
    @JoinColumn(name = "fk_produto_id")
    private List<Produto> produtos;

    @ManyToOne
    @JoinColumn(name = "fk_cliente_id")
    private Cliente cliente;
}
