import { Timer, ShoppingCart, Coffee, Package } from 'phosphor-react'
import {
  Container,
  ContainerInfo,
  IconCart,
  IconCoffe,
  ImgContainer,
  IconTimer,
  IconPackage,
  ContainerFirstIcons,
  ContainerSecondIcons,
} from './styles'

export function Introduction() {
  return (
    <Container>
      <ContainerInfo>
        <h1>
          Encontre o café perfeito <br></br> para qualquer hora do dia
        </h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a <br></br>
          qualquer hora
        </p>

        <ContainerFirstIcons>
          <IconCart>
            <ShoppingCart weight="fill" color="white" size={15} />
          </IconCart>
          <p>Compra simples e segura</p>
          <IconPackage>
            <Package weight="fill" color="white" size={15} />
          </IconPackage>
          <p>Embalagem mantém o café intacto</p>
        </ContainerFirstIcons>
        <ContainerSecondIcons>
          <IconTimer>
            <Timer weight="fill" color="white" size={15} />
          </IconTimer>
          <p>Entrega rápida e rastreada</p>
          <IconCoffe>
            <Coffee weight="fill" color="white" size={15} />
          </IconCoffe>
          <p>O café chega fresquinho até você</p>
        </ContainerSecondIcons>
      </ContainerInfo>

      <ImgContainer>
        <img
          src="../src/assets/coffee-logo.svg"
          alt="imagem de café"
          height={360}
          width={460}
        />
      </ImgContainer>
    </Container>
  )
}
