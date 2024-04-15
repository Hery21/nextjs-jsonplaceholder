import { render, screen } from '@testing-library/react'
import Navbar from '../Navbar'
import { describe, expect, test } from 'vitest'
import React from 'react'

describe('All Navbar Tests', () => {
  test('Should render Navbar with children', () => {
    render(
      <Navbar>
        <div>Child Component</div>
      </Navbar>
    )

    const childComponent = screen.getByText('Child Component')

    expect(childComponent).toBeInTheDocument()
  })

  test('Should render Navbar without children', () => {
    render(<Navbar />)

    const childComponent = screen.queryByText('Child Component')

    expect(childComponent).toBeNull()
  })
})
