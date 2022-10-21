import { Cliente } from './cliente';
import { Produto } from './produto';
import { Servico } from './servico';
export interface Venda {
  id: number,
  cliente: Cliente,
  produtos: Produto,
  servicos: Servico
}
