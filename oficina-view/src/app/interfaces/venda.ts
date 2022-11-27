import { Cliente } from './cliente';
import { Produto } from './produto';
export interface Venda {
  id: number,
  data: string,
  valor: number,
  cliente: Cliente,
  produtos: Produto[],
  mesAno: string
}
