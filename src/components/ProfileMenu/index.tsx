import Link from 'next/link'
import {
  AccountCircle,
  CreditCard,
  ExitToApp,
  FormatListBulleted
} from 'styled-icons/material-outlined'

import * as S from './styles'

export type ProfileMenuProps = {
  activeLink?: string
}

const ProfileMenu = ({ activeLink }: ProfileMenuProps) => (
  <S.Nav>
    <Link href="/profile/me" passHref>
      <S.Link isActive={activeLink === '/profile/me'} title="My Profile">
        <AccountCircle size={24} />
        <span>My Profile</span>
      </S.Link>
    </Link>
    <Link href="/profile/cards" passHref>
      <S.Link isActive={activeLink === '/profile/cards'} title="My Cards">
        <CreditCard size={24} />
        <span>My Cards</span>
      </S.Link>
    </Link>
    <Link href="/profile/orders" passHref>
      <S.Link isActive={activeLink === '/profile/orders'} title="My Orders">
        <FormatListBulleted size={24} />
        <span>My Orders</span>
      </S.Link>
    </Link>
    <Link href="/logout" passHref>
      <S.Link>
        <ExitToApp size={24} />
        <span>Sign out</span>
      </S.Link>
    </Link>
  </S.Nav>
)

export default ProfileMenu
