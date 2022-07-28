import Home, { HomeTemplateProps } from 'templates/Home'
import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highLightMock from 'components/Highlight/mock'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}
export function getServerSideProps() {
  return {
    props: {
      banners: bannersMock,
      newGames: gamesMock,
      mostPopularHightlight: highLightMock,
      mostPopularGames: gamesMock,
      upcommingGames: gamesMock,
      upcommingHightlight: highLightMock,
      upcommingMoreGames: gamesMock,
      freeGames: gamesMock,
      freeHightlight: highLightMock
    }
  }
}
