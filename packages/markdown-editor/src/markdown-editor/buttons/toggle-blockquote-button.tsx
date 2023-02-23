import { useActive, useCommands } from '@remirror/react'
import React, { useCallback } from 'react'
import { BsBlockquoteLeft } from 'react-icons/bs'
import { BaseButton } from './base-button.js'

export const ToggleBlockQuoteButton = () => {
  const { toggleBlockquote } = useCommands<any>()

  const handleSelect = useCallback(() => {
    if (toggleBlockquote.enabled()) {
      toggleBlockquote()
    }
  }, [toggleBlockquote])

  const active = useActive<any>().blockquote()
  const enabled = toggleBlockquote.enabled()

  return (
    <BaseButton active={active} enabled={enabled} onClick={handleSelect}>
      <BsBlockquoteLeft />
    </BaseButton>
  )
}
