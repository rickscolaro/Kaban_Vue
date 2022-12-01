/* eslint-disable no-use-before-define */

export interface Todo {
  id: number
  titulo: string
  descricao: string
  status: TodoStatus
}

export enum TodoStatus {
  Pendente = 'pendente',
  EmProgresso = 'emprogresso',
  Completo= 'completo',
}
