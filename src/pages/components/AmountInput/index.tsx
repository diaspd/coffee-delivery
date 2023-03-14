import { Minus, Plus } from 'phosphor-react'
import { LabelComponent } from '../DeliveryForm/styles'
import { ButtonAddContainer, IconContainer } from './styles'

interface AmountInputProps {
  amount: number
  onIncrease: () => void
  onDecrease: () => void
}

export function AmountInput({
  onIncrease,
  onDecrease,
  amount,
}: AmountInputProps) {
  return (
    <ButtonAddContainer>
      <LabelComponent htmlFor="coffee_quantity">
        Quantidade de café
      </LabelComponent>
      <div>
        <IconContainer onClick={onDecrease} disabled={amount <= 1}>
          <Minus />
        </IconContainer>
        <input
          name="coffee_quantity"
          type="number"
          min={0}
          max={99}
          value={amount}
          readOnly
        />
        <IconContainer onClick={onIncrease}>
          <Plus />
        </IconContainer>
      </div>
    </ButtonAddContainer>
  )
}
