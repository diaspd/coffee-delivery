import { Introduction } from '../../components/Introduction'
import { coffees } from '../../data/coffee'
import { CoffeeCard } from '../components/CoffeeHomeCard'
import { CoffeeCardContainer, Title } from './styles'

export function Home() {
  return (
    <>
      <Introduction />
      <Title>Nossos cafés</Title>
      <CoffeeCardContainer>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </CoffeeCardContainer>
    </>
  )
}
