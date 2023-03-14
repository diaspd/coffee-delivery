import { Bank, CreditCard, Money } from 'phosphor-react'
import { PaymentInput } from './PaymentInput'
import { ButtonContainer } from './styles'
import { useFormContext } from 'react-hook-form'

export const paymentMethods = {
  credit_card: {
    label: 'Cartão de Crédito',
    icon: <CreditCard color="#8047F8" size={20} />,
  },
  debit_card: {
    label: 'Cartão de Débito',
    icon: <Bank color="#8047F8" size={20} />,
  },
  money: {
    label: 'Dinheiro',
    icon: <Money color="#8047F8" size={20} />,
  },
}

export function PaymentButtons() {
  const { register } = useFormContext()

  return (
    <ButtonContainer>
      {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
        <PaymentInput
          key={label}
          id={key}
          value={key}
          icon={icon}
          label={label}
          {...register('paymentMethod')}
        />
      ))}
    </ButtonContainer>
  )
}
