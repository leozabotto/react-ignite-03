import { createContext } from 'react'

interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

interface TransactionContextType {
  transaction: Transaction[]
}

const TransactionsContext = createContext({} as TransactionContextType)

export function TransactionsProvider() {
  return (
    <TransactionsContext.Provider
      value={{ transaction }}
    ></TransactionsContext.Provider>
  )
}
