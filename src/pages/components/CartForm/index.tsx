import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { DeliveryForm } from '../DeliveryForm'
import { PaymentButtons } from '../PaymentButtons'
import { Content, Form, Header } from './styles'

export function CartForm() {
  return (
    <Form>
      <h2>Complete o seu pedido</h2>
      <Header>
        <MapPinLine color="#C47F17" size={20} />
        <span>
          Endereço de Entrega <br />
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </span>
      </Header>
      <Content>
        <DeliveryForm />
      </Content>
      <div>
        <footer>
          <CurrencyDollar weight="fill" color="#8047F8" size={20} />
          <span>
            Pagamento <br />
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </span>

          <PaymentButtons />
        </footer>
      </div>
    </Form>
  )
}
