import React from 'react'
import Octicon, { getIconByName } from '@primer/octicons-react'

export const Icon = (props) => {
  const size = props.size || 32
  const color = props.color || 'black'

  return (
    <Octicon icon={getIconByName(props.name)} size='small' />
  )
}