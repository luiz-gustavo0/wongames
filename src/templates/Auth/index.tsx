import Link from 'next/link'

import Heading from 'components/Heading'
import Logo from 'components/Logo'

import * as S from './styles'

type AuthProps = {
  title: string
  children: React.ReactNode
}

const Auth = ({ title, children }: AuthProps) => (
  <S.Wrapper>
    <S.BannerBlock>
      <S.BannerContent>
        <Link href="/">
          <a>
            <Logo id="logo_banner" />
          </a>
        </Link>
        <div>
          <Heading size="huge">All your favorite games in one place</Heading>
          <S.Subtitle>
            <strong>WON</strong> is the best an most complete gaming platform.
          </S.Subtitle>
        </div>
        <S.Footer>Won Games 2020 &copy; Todos os Direitos</S.Footer>
      </S.BannerContent>
    </S.BannerBlock>
    <S.Content>
      <S.ContentWrapper>
        <Link href="/">
          <a>
            <Logo color="black" size="large" id="logo_form" />
          </a>
        </Link>
        <Heading color="black" lineColor="secondary" lineLeft>
          {title}
        </Heading>
        {children}
      </S.ContentWrapper>
    </S.Content>
  </S.Wrapper>
)

export default Auth
