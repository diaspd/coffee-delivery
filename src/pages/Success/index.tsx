import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { OrderData } from '../Cart'
import { paymentMethods } from '../components/PaymentButtons'
import {
  Container,
  IconsContainer,
  IconMap,
  IconTimer,
  IconDolar,
  MainContainer,
  Text,
} from './styles'

interface LocationType {
  state: OrderData
}

export function Success() {
  const { state } = useLocation() as unknown as LocationType

  const navigate = useNavigate()

  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  }, [])

  if (!state) return <></>

  return (
    <Container>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <Text>Agora é só aguardar que logo o café chegará até você</Text>

        <MainContainer>
          <IconsContainer>
            <IconMap>
              <MapPin weight="fill" color="white" size={15} />
            </IconMap>
            <p>
              Entrega em{' '}
              <span>
                <b>
                  {state.street}, {state.number} <br />
                  {state.neighborhood} - {state.city}, {state.state}
                </b>
              </span>
            </p>
          </IconsContainer>

          <IconsContainer>
            <IconTimer>
              <Timer weight="fill" color="white" size={15} />
            </IconTimer>
            <p>
              Previsão de entrega{' '}
              <span>
                <b>20 min - 30 min</b>
              </span>
            </p>
          </IconsContainer>

          <IconsContainer>
            <IconDolar>
              <CurrencyDollar weight="regular" color="white" size={15} />
            </IconDolar>
            <p>
              Pagamento na entrega{' '}
              <span>
                <b>{paymentMethods[state.paymentMethod].label}</b>
              </span>{' '}
            </p>
          </IconsContainer>
        </MainContainer>
      </div>
      <img src="../src/assets/Illustration.svg" alt="" />
    </Container>
  )
}
