import CardsList, { CardListProps } from 'components/CardsList'
import Profile from 'templates/Profile'

import cardsMock from 'components/PaymentOptions/mock'

export default function Cards({ cards }: CardListProps) {
  return (
    <Profile>
      <CardsList cards={cards} />
    </Profile>
  )
}

export function getServerSideProps() {
  return {
    props: {
      cards: cardsMock
    }
  }
}
