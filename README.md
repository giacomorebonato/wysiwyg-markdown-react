# wysiwyg-markdown-react

This is just [remirror](https://remirror.io) packed to work out of the box as wysiwyg markdown editor to use with React.

```jsx
import { MarkdownEditor } from 'wysiwyg-markdown-react'

const MyComponent = () => {
  return (
    <MarkdownEditor
      initialContent={post.body}
      onChange={(text) => {
        setPost({ ...post, body: text })
      }}
    />
  )
}

```
