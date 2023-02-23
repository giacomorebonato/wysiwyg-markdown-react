import { useActive, useCommands } from '@remirror/react'
import React, { useCallback } from 'react'
import { FaStrikethrough } from 'react-icons/fa'
import { StrikeExtension } from 'remirror/extensions'
import { BaseButton } from './base-button.js'

export const ToggleStrikeButton = () => {
  const { toggleStrike } = useCommands<StrikeExtension>()

  const handleSelect = useCallback(() => {
    if (toggleStrike.enabled()) {
      toggleStrike()
    }
  }, [toggleStrike])

  const active = useActive<StrikeExtension>().strike()
  const enabled = toggleStrike.enabled()

  return (
    <BaseButton onClick={handleSelect} active={active} enabled={enabled}>
      <FaStrikethrough />
    </BaseButton>
  )
}
