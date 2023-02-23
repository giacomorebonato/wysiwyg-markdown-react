import { useActive, useCommands } from '@remirror/react'
import React, { useCallback } from 'react'
import {
  HeadingExtension,
  HeadingExtensionAttributes,
} from 'remirror/extensions'
import { BaseButton } from './base-button.js'

export interface ToggleHeadingButtonProps {
  attrs?: Partial<HeadingExtensionAttributes>
  level: 1 | 2 | 3 | 4 | 5 | 6 | 7
}

export const ToggleHeadingButton = (props: ToggleHeadingButtonProps) => {
  const { toggleHeading } = useCommands<HeadingExtension>()
  const finalProps = { ...props.attrs, level: props.level }
  const handleSelect = useCallback(() => {
    if (toggleHeading.enabled(props.attrs)) {
      toggleHeading(finalProps)
    }
  }, [toggleHeading, props.attrs])

  const active = useActive<HeadingExtension>().heading(finalProps)
  const enabled = toggleHeading.enabled(finalProps)

  return (
    <BaseButton active={active} enabled={enabled} onClick={handleSelect}>
      H{props.level}
    </BaseButton>
  )
}
