import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import NavMenu from '../Navmenu'

describe('All NavMenu Component tests', () => {
  test('Should render all menu items', () => {
    render(<NavMenu />)

    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Photos')).toBeInTheDocument()
    expect(screen.getByText('Todos')).toBeInTheDocument()
    expect(screen.getByText('Users')).toBeInTheDocument()
  })

  test('Menu items should have correct links', () => {
    render(<NavMenu />)

    expect(screen.getByText('Home').closest('a')).toHaveAttribute('href', '/')
    expect(screen.getByText('Photos').closest('a')).toHaveAttribute('href', '/photos')
    expect(screen.getByText('Todos').closest('a')).toHaveAttribute('href', '/todos')
    expect(screen.getByText('Users').closest('a')).toHaveAttribute('href', '/users')
  })

  test('menu items should have correct styles', () => {
    render(<NavMenu />)

    expect(screen.getByText('Home')).toHaveStyle({ color: 'black', fontWeight: 'bold' })
    expect(screen.getByText('Photos')).toHaveStyle({ color: 'black', fontWeight: 'bold' })
    expect(screen.getByText('Todos')).toHaveStyle({ color: 'black', fontWeight: 'bold' })
    expect(screen.getByText('Users')).toHaveStyle({ color: 'black', fontWeight: 'bold' })
  })
})
