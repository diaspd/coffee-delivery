import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'
import {
  ButtonContainer,
  HeaderContainer,
  ActionsContainer,
  Text,
} from './styles'

import Logo from '../../assets/logo.svg'

export function Header() {
  const { cartQuantity } = useCart()

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={Logo} alt="Logo-marca" />
      </NavLink>

      <ActionsContainer>
        <Text>
          <MapPin size={24} weight="fill" color="#8047F8" />
          Porto alegre, RS
        </Text>

        <NavLink to="/cart" title="Cart">
          <ButtonContainer>
            {cartQuantity >= 1 && <span>{cartQuantity}</span>}
            <ShoppingCart size={24} weight="fill" />
          </ButtonContainer>
        </NavLink>
      </ActionsContainer>
    </HeaderContainer>
  )
}
