import { useRouter } from 'next/router'

import Base from 'templates/Base'

import Heading from 'components/Heading'
import ProfileMenu from 'components/ProfileMenu'
import { Container } from 'components/Container'

import * as S from './styles'

export type ProfileTemplateProps = {
  children: React.ReactNode
}

const Profile = ({ children }: ProfileTemplateProps) => {
  const { asPath } = useRouter()

  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My profile
        </Heading>
        <S.Main>
          <ProfileMenu activeLink={asPath} />
          <S.Content>{children}</S.Content>
        </S.Main>
      </Container>
    </Base>
  )
}

export default Profile
