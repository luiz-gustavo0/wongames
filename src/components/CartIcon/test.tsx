import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import CartIcon from '.'

describe('<CartIcon />', () => {
  it('should render whitout badge', () => {
    renderWithTheme(<CartIcon />)

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument()
  })

  it('should render whith badge', () => {
    renderWithTheme(<CartIcon quantity={2} />)

    expect(screen.getByLabelText(/cart items/i)).toBeInTheDocument()
    expect(screen.getByText(/2/)).toBeInTheDocument()
  })

  it('should render only if has positive numbers', () => {
    renderWithTheme(<CartIcon quantity={-2} />)

    expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument()
  })
})
