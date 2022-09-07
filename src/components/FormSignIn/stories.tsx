import { Story, Meta } from '@storybook/react'
import FormSignIn from '.'

export default {
  title: 'Form/FormSignIn',
  component: FormSignIn
} as Meta

export const Default: Story = () => (
  <div style={{ margin: 'auto', width: 300 }}>
    <FormSignIn />
  </div>
)
