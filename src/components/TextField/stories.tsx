import { Story, Meta } from '@storybook/react'
import { Email } from 'styled-icons/material-outlined'

import TextField, { TextFieldProps } from '.'

export default {
  title: 'TextField',
  component: TextField,
  args: {
    label: 'E-mail',
    name: 'email',
    initialValue: '',
    placeholder: 'john.cage@gmail.com',
    icon: <Email />
  },
  argTypes: {
    onInput: { action: 'changed' },
    icon: { type: 'string' }
  }
} as Meta

export const Default: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)

export const WithError: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)

WithError.args = {
  error: 'Ops...something is wrong'
}
