import { Introduction } from '../../components/Introduction'
import { coffees } from '../../data/coffee'
import { CoffeeCard } from '../components/CoffeeHomeCard'
import { CoffeeCardContainer, CardWrapper, Title } from './styles'

export function Home() {
  return (
    <>
      <Introduction />
      <Title>Nossos cafés</Title>
      <CardWrapper>
        <CoffeeCardContainer>
          {coffees.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </CoffeeCardContainer>
      </CardWrapper>
    </>
  )
}
