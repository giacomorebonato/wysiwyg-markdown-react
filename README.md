# wysiwyg-markdown-react

```bash
npm i wysiwyg-markdown-react
pnpm add wysiwyg-markdown-react
yarn add wysiwyg-markdown-react
```

![A screenshot of the editor](./screenshot.png)

This is just [remirror](https://remirror.io) packed to work out of the box as WYSIWYG markdown editor to use with React.

```jsx
import { MarkdownEditor } from 'wysiwyg-markdown-react'
import "wysiwyg-markdown-react/dist/wysiwyg-markdown-react.css";
import "wysiwyg-markdown-react/dist/theme.css";

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

My advice is to copy the [CSS theme file from here](./src/markdown-editor/theme.css) and add it to your project.
