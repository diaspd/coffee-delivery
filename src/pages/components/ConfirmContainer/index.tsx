import { useCart } from '../../../hooks/useCart'
import { CoffeeCartCard } from '../CoffeeCartCard'
import { ConfirmButton, Confirm } from './styles'

const DELIVERY_PRICE = 3.5

export function ConfirmContainer() {
  const { cartTotalItems } = useCart()
  const { cartItems, cartQuantity } = useCart()

  const cartTotal = DELIVERY_PRICE + cartTotalItems
  return (
    <form>
      <h2>Cafés selecionados</h2>
      <Confirm>
        {cartItems.map((item) => (
          <CoffeeCartCard key={item.id} coffee={item} />
        ))}
        <p>
          Total de itens <b>R$ {cartTotalItems.toFixed(2)}</b>
        </p>
        <p>
          Entrega <b> R$ {DELIVERY_PRICE.toFixed(2)}</b>
        </p>
        <span>
          Total <span>R$ {cartTotal.toFixed(2)}</span>
        </span>
        <ConfirmButton type="submit" disabled={cartQuantity <= 0}>
          CONFIRMAR PEDIDO
        </ConfirmButton>
      </Confirm>
    </form>
  )
}
