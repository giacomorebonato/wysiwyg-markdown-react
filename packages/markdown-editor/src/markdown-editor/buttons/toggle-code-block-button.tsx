import { useActive, useCommands } from '@remirror/react'
import React, { useCallback } from 'react'
import { BiCodeCurly } from 'react-icons/bi'
import { CodeBlockAttributes, CodeBlockExtension } from 'remirror/extensions'
import { BaseButton } from './base-button.js'

export interface ToggleCodeBlockButtonProps {
  attrs?: Partial<CodeBlockAttributes>
}

export const ToggleCodeBlockButton = (props: ToggleCodeBlockButtonProps) => {
  const { toggleCodeBlock } = useCommands<CodeBlockExtension>()

  const handleSelect = useCallback(() => {
    if (toggleCodeBlock.enabled(props.attrs)) {
      toggleCodeBlock(props.attrs)
    }
  }, [toggleCodeBlock, props.attrs])

  const active = useActive<CodeBlockExtension>().codeBlock()
  const enabled = toggleCodeBlock.enabled(props.attrs)

  return (
    <BaseButton active={active} enabled={enabled}>
      <BiCodeCurly />
    </BaseButton>
  )
}
