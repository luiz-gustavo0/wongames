import { useState } from 'react'

import * as S from './styles'

export type DropdownProps = {
  title: React.ReactNode
  children: React.ReactNode
}

const Dropdown = ({ children, title }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <S.Wrapper isOpen={isOpen}>
      <S.Title onClick={() => setIsOpen((prev) => !prev)}>{title}</S.Title>
      <S.Content aria-hidden={!isOpen}>{children}</S.Content>
    </S.Wrapper>
  )
}

export default Dropdown
