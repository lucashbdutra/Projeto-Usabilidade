import { Produto } from './produto';
import { Servico } from './servico';
export interface Estoque {
  produtos: Produto[],
  servicos: Servico[]
}
