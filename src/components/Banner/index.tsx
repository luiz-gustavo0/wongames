import Button from 'components/Button'
import * as S from './styles'

export type BannerProps = {
  img: string
  title: string
  subtitle: string
  buttoLabel: string
  buttonLink: string
}

const Banner = ({
  img,
  title,
  subtitle,
  buttoLabel,
  buttonLink
}: BannerProps) => (
  <S.Wrapper>
    <S.Image src={img} role="img" aria-label={title} />
    <S.Caption>
      <S.Title>{title}</S.Title>
      <S.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
      <Button as="a" href={buttonLink} size="large">
        {buttoLabel}
      </Button>
    </S.Caption>
  </S.Wrapper>
)

export default Banner
