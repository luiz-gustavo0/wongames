import { Story, Meta } from '@storybook/react'
import CartDropdown, { CartDropdowProps } from '.'

import items from 'components/CartList/mock'

export default {
  title: 'CartDropdown',
  component: CartDropdown,
  args: {
    items,
    total: 'R$ 300,00'
  }
} as Meta

export const Default: Story<CartDropdowProps> = (args) => (
  <div
    style={{
      maxWidth: '98%',
      display: 'flex',
      justifyContent: 'flex-end'
    }}
  >
    <CartDropdown {...args} />
  </div>
)
