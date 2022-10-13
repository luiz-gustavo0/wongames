import { Story, Meta } from '@storybook/react'

import GameItem, { GameItemProps } from '.'

export default {
  title: 'GameItem',
  component: GameItem,
  args: {
    img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.comunidadxbox.com%2Fwp-content%2Fuploads%2F7dhszssdnvs.jpg&f=1&nofb=1&ipt=bd8ea3ac3e2ebb1f92d836e187d010de5be19cd28728ec16fbc0016ee239c764&ipo=images',
    title: 'Need for Speed Payback',
    price: 'R$ 215,00'
  }
} as Meta

export const Default: Story<GameItemProps> = (args) => <GameItem {...args} />

export const WithPayment: Story<GameItemProps> = (args) => (
  <GameItem {...args} />
)

WithPayment.args = {
  downloadLink: 'https://wongames.com/game/download/21312ndasd',
  paymentInfo: {
    flag: 'mastercard',
    img: '/img/cards/mastercard.png',
    number: '**** **** **** 4321',
    purchaseDate: 'Purchase made on 10/10/2022 at 20:40'
  }
}
