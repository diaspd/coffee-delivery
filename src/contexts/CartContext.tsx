import { createContext, ReactNode, useEffect, useState } from 'react'
import { Coffee } from '../pages/components/CoffeeHomeCard'
import { produce } from 'immer'

export interface CartItem extends Coffee {
  amount: number
}

interface CartContextType {
  cartItems: CartItem[]
  cartQuantity: number
  addCoffeeToCart: (coffee: CartItem) => void
  changeCartQuantity: (
    cartItemId: number,
    type: 'increase' | 'decrease',
  ) => void
  removeCoffeeInCart: (cartItemId: number) => void
  cartTotalItems: number
  cleanCart: () => void
}

interface CartContextProviderProps {
  children: ReactNode
}

const COFFEE_ITEMS_STORAGE = '@coffee-delivery:cartItems-1.0.0'

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedItems = localStorage.getItem(COFFEE_ITEMS_STORAGE)
    if (storedItems) {
      return JSON.parse(storedItems)
    }
    return []
  })

  const cartTotalItems = cartItems.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.amount
  }, 0)

  const cartQuantity = cartItems.length

  function addCoffeeToCart(coffee: CartItem) {
    const coffeAlreadyInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === coffee.id,
    )

    const newCartList = produce(cartItems, (draft) => {
      if (coffeAlreadyInCart < 0) {
        draft.push(coffee)
      } else {
        draft[coffeAlreadyInCart].amount += coffee.amount
      }
    })

    setCartItems(newCartList)
  }

  function changeCartQuantity(
    cartItemId: number,
    type: 'increase' | 'decrease',
  ) {
    const newCartList = produce(cartItems, (draft) => {
      const coffeeInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId,
      )
      if (coffeeInCart >= 0) {
        const item = draft[coffeeInCart]
        draft[coffeeInCart].amount =
          type === 'increase' ? item.amount + 1 : item.amount - 1
      }
    })

    setCartItems(newCartList)
  }

  function removeCoffeeInCart(cartItemId: number) {
    const newCartList = produce(cartItems, (draft) => {
      const coffeeInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId,
      )

      if (coffeeInCart >= 0) {
        draft.splice(coffeeInCart, 1)
      }
    })

    setCartItems(newCartList)
  }

  function cleanCart() {
    setCartItems([])
  }

  useEffect(() => {
    localStorage.setItem(COFFEE_ITEMS_STORAGE, JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartQuantity,
        addCoffeeToCart,
        changeCartQuantity,
        removeCoffeeInCart,
        cartTotalItems,
        cleanCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
