import React from 'react'
import Button from './button'

export const Text = () => <Button>Basic Button</Button>

export const funcButton = () => (
  <Button onClick={() => alert('Hello')}>Function Button</Button>
)

export const linkButton = () => <Button href="/route">Link Button</Button>

export default {
  component: Button,
  title: 'Button',
}
