import { Container, SecondContainer } from './styles'
import { CartForm } from '../components/CartForm'
import { ConfirmContainer } from '../components/ConfirmContainer'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'

enum PaymentMethods {
  credit_card = 'credit_card',
  debit_card = 'debit_card',
  money = 'money',
}

const confirmOrderValidationSchema = zod.object({
  cep: zod
    .string()
    .min(1, 'Informe o CEP')
    .max(9, 'Número de caracteres excedido'),

  street: zod.string().min(1, 'Informe sua Rua'),

  number: zod
    .string()
    .min(1, 'Informe o número da casa')
    .max(6, 'Número de caracteres excedido'),

  complement: zod.string(),

  neighborhood: zod.string().min(1, 'Informe seu Bairro'),

  city: zod.string().min(1, 'Informe a sua Cidade'),

  state: zod
    .string()
    .min(1, 'Informe seu Estado')
    .max(2, 'Número de caracteres excedido'),

  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: 'informe a forma de pagamento' }
    },
  }),
})

export type OrderData = zod.infer<typeof confirmOrderValidationSchema>

type ConfirmOderData = OrderData

export function Cart() {
  const confirmOrder = useForm<ConfirmOderData>({
    resolver: zodResolver(confirmOrderValidationSchema),
  })

  const { handleSubmit } = confirmOrder

  const navigate = useNavigate()
  const { cleanCart } = useCart()

  function handleConfirmOrder(data: ConfirmOderData) {
    navigate('/success', {
      state: data,
    })
    cleanCart()
  }

  return (
    <FormProvider {...confirmOrder}>
      <Container onSubmit={handleSubmit(handleConfirmOrder)}>
        <CartForm />
        <SecondContainer>
          <ConfirmContainer />
        </SecondContainer>
      </Container>
    </FormProvider>
  )
}
