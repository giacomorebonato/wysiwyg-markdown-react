import { useActive, useCommands } from '@remirror/react'
import React, { useCallback } from 'react'
import { FiItalic } from 'react-icons/fi'
import { ItalicExtension } from 'remirror/extensions'
import { BaseButton } from './base-button.js'

export const ToggleItalicButton = () => {
  const { toggleItalic } = useCommands<ItalicExtension>()

  const handleSelect = useCallback(() => {
    if (toggleItalic.enabled()) {
      toggleItalic()
    }
  }, [toggleItalic])

  const active = useActive<ItalicExtension>().italic()
  const enabled = toggleItalic.enabled()

  return (
    <BaseButton onClick={handleSelect} active={active} enabled={enabled}>
      <FiItalic />
    </BaseButton>
  )
}
