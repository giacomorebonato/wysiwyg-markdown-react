import { useState } from "react";
import { MarkdownEditor } from "wysiwyg-markdown-react";
import "wysiwyg-markdown-react/dist/theme.css";
import "wysiwyg-markdown-react/dist/wysiwyg-markdown-react.css";
import "./app.css";

function App() {
  const [text, setText] = useState("");

  return (
    <div className="app">
      <MarkdownEditor initialContent={text} onChange={setText} />
    </div>
  );
}

export default App;
