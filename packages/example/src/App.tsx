import { useState } from 'react'
import { MarkdownEditor } from 'wysiwyg-markdown-react'

import 'wysiwyg-markdown-react/dist/theme.css'
import 'wysiwyg-markdown-react/dist/wysiwyg-markdown-react.css'

import './App.css'
import { content } from './content'

function App() {
  const [text, setText] = useState('')

  return (
    <div className='app'>
      <MarkdownEditor
        initialContent={content}
        onChange={setText}
        imageExtensionOptions={{
          enableResizing: true,
        }}
      />
    </div>
  )
}

export default App
