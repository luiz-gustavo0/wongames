import { Story, Meta } from '@storybook/react'
import CartIcon, { CartIconProps } from '.'

export default {
  title: 'CartIcon',
  component: CartIcon
} as Meta

export const Default: Story = () => <CartIcon />
export const withItems: Story<CartIconProps> = (args) => <CartIcon {...args} />

withItems.args = {
  quantity: 3
}
