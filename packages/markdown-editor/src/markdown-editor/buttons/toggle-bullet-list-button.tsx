import { useActive, useCommands } from '@remirror/react'
import React, { useCallback } from 'react'
import { MdFormatListBulleted } from 'react-icons/md'
import { BulletListExtension } from 'remirror/extensions'
import { BaseButton } from './base-button.js'

export const ToggleBulletListButton = () => {
  const { toggleBulletList } = useCommands<BulletListExtension>()

  const handleSelect = useCallback(() => {
    if (toggleBulletList.enabled()) {
      toggleBulletList()
    }
  }, [toggleBulletList])

  const active = useActive<BulletListExtension>().bulletList()
  const enabled = toggleBulletList.enabled()

  return (
    <BaseButton onClick={handleSelect} active={active} enabled={enabled}>
      <MdFormatListBulleted />
    </BaseButton>
  )
}
