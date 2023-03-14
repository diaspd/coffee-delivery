import { CartItem } from '../../../contexts/CartContext'
import {
  AddContainer,
  SelectionContainer,
  Input,
  RemoveButton,
  PriceContainer,
} from './styles'
import { formatPrice } from '../../../utils/formatPrice'
import { AmountInput } from '../AmountInput'
import { Trash } from 'phosphor-react'
import { useCart } from '../../../hooks/useCart'

interface CoffeeCartCardProps {
  coffee: CartItem
}

export function CoffeeCartCard({ coffee }: CoffeeCartCardProps) {
  const { changeCartQuantity, removeCoffeeInCart } = useCart()

  function handleIncrease() {
    changeCartQuantity(coffee.id, 'increase')
  }

  function handleDecrease() {
    changeCartQuantity(coffee.id, 'decrease')
  }

  function handleRemoveCoffee() {
    removeCoffeeInCart(coffee.id)
  }

  const coffeeTotal = coffee.price * coffee.amount
  const formattedPrice = formatPrice(coffeeTotal)

  return (
    <>
      <SelectionContainer>
        <img src={`/coffees/${coffee.photo}`} alt="imagem de café" />
        <div>
          <AddContainer>
            <p>{coffee.name}</p>
            <PriceContainer>R$ {formattedPrice}</PriceContainer>
          </AddContainer>
          <Input>
            <AmountInput
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              amount={coffee.amount}
            />
            <RemoveButton onClick={handleRemoveCoffee}>
              <Trash color="purple" size={18} />
              REMOVER
            </RemoveButton>
          </Input>
        </div>
      </SelectionContainer>
    </>
  )
}
