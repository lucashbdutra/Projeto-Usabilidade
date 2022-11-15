package com.usabilidade.oficina.model.DTO;

import com.usabilidade.oficina.model.entity.Produto;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
public class EstoqueDTO {

    private List<Produto> produtos;
}
