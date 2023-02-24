import type { FC } from 'react'
import * as React from 'react'
import { RedoButton } from './buttons/redo-button.js'
import { ToggleBlockQuoteButton } from './buttons/toggle-blockquote-button.js'
import { ToggleBoldButton } from './buttons/toggle-bold-button.js'
import { ToggleBulletListButton } from './buttons/toggle-bullet-list-button.js'
import { ToggleCodeBlockButton } from './buttons/toggle-code-block-button.js'
import { ToggleCodeButton } from './buttons/toggle-code-button.js'
import { ToggleHeadingButton } from './buttons/toggle-heading-button.js'
import { ToggleItalicButton } from './buttons/toggle-italic-button.js'
import { ToggleStrikeButton } from './buttons/toggle-strike-button.js'
import { UndoButton } from './buttons/undo-button.js'

export const MarkdownToolbar: FC = () => {
  return (
    <div className='grid sticky top-0 z-10'>
      <div className='flex flex-row overflow-x-auto rounded-sm bg-slate-200'>
        <ToggleBoldButton />
        <ToggleItalicButton />
        <ToggleStrikeButton />
        <ToggleBulletListButton />

        <ToggleCodeButton />
        <ToggleHeadingButton level={1} />
        <ToggleHeadingButton level={2} />
        <ToggleHeadingButton level={3} />
        <ToggleBlockQuoteButton />
        <ToggleCodeBlockButton />

        <UndoButton />
        <RedoButton />
      </div>
    </div>
  )
}
