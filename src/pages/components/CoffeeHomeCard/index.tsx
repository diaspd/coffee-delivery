import { ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import { useCart } from '../../../hooks/useCart'
import { formatPrice } from '../../../utils/formatPrice'
import { AmountInput } from '../AmountInput'
import { Container, ContainerShop, Tags, ShoppingButton } from './styles'

export interface Coffee {
  id: number
  tags: string[]
  name: string
  description: string
  photo: string
  price: number
}

interface CoffeeProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeProps) {
  const [amount, setAmount] = useState(1)

  const formattedPrice = formatPrice(coffee.price)

  const { addCoffeeToCart } = useCart()

  function handleIncrease() {
    setAmount((state) => state + 1)
  }

  function handleDecrease() {
    setAmount((state) => state - 1)
  }

  function handleAddToCart() {
    const coffeToAdd = {
      ...coffee,
      amount,
    }
    addCoffeeToCart(coffeToAdd)
  }

  return (
    <>
      <Container>
        <img src={`/coffees/${coffee.photo}`} alt="imagem de café" />
        <Tags>
          {coffee.tags.map((tag) => (
            <span key={`${coffee.id}${tag}`}>{tag}</span>
          ))}
        </Tags>
        <h3>{coffee.name}</h3>
        <span>{coffee.description}</span>

        <ContainerShop>
          <legend>R$</legend>
          <span>{formattedPrice}</span>
          <div>
            <AmountInput
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              amount={amount}
            />
          </div>
          <ShoppingButton>
            <ShoppingCart onClick={handleAddToCart} size={20} weight="fill" />
          </ShoppingButton>
        </ContainerShop>
      </Container>
    </>
  )
}
