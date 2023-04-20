import { GameItemProps } from 'components/GameItem'
import Dropdown from 'components/Dropdown'
import CartIcon from 'components/CartIcon'
import CartList from 'components/CartList'

import * as S from './styles'

export type CartDropdowProps = {
  items?: GameItemProps[]
  total?: string
}

const CartDropdown = ({ items, total }: CartDropdowProps) => (
  <S.Wrapper>
    <Dropdown title={<CartIcon quantity={items?.length} />}>
      <CartList items={items} total={total} hasButton />
    </Dropdown>
  </S.Wrapper>
)

export default CartDropdown
