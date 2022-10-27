package com.usabilidade.oficina.model.DTO;

import com.usabilidade.oficina.model.entity.Produto;
import com.usabilidade.oficina.model.entity.Servico;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
public class EstoqueDTO {

    private List<Servico> servicos;

    private List<Produto> produtos;
}
