import { Introduction } from '../../components/Introduction'
import { coffees } from '../../data/coffee'
import { CoffeeCard } from '../components/CoffeeHomeCard'
import {
  ContentWrapper,
  CoffeeCardContainer,
  CardWrapper,
  Title,
} from './styles'

export function Home() {
  return (
    <>
      <Introduction />
      <ContentWrapper>
        <Title>Nossos cafés</Title>
        <CardWrapper>
          <CoffeeCardContainer>
            {coffees.map((coffee) => (
              <CoffeeCard key={coffee.id} coffee={coffee} />
            ))}
          </CoffeeCardContainer>
        </CardWrapper>
      </ContentWrapper>
    </>
  )
}
