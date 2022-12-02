export interface IProducts {
  id: number,
  title: string,
  price: number,
  image: string,
  qtd?: number,
  newPrice?: number
}

export interface AppContextProps {
  cart?: IProducts[] | undefined
  finalPrice?: number,
  qnt?: number,
  // Olá! Tentei Tipar essas funções abaixo e mesmo procurando na internet não encontrei tipagem
  // certa, e devido a isso tive muitos erros e optei por colocar any na tipagem das funções.
  setCart?: any,
  setQnt?: any,
  totalValue?: any,
  totalItems?: any
}

export interface AppProviderProps {
  children: any
}

export interface ProductProps {
  id: number,
  title: string,
  price: number,
  image: string,
  qtd?: number,
  removeProduct: () => void,
  totalValue: (cart: IProducts[]) => void
}

export interface CartDetailsProps {
  text: string
  url: string
}