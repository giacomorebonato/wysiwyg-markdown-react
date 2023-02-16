import {
  EditorComponent,
  Remirror,
  ThemeProvider,
  useRemirror,
} from "@remirror/react";
import type { FC, PropsWithChildren } from "react";
import React, { useCallback } from "react";
import jsx from "refractor/lang/jsx.js";
import typescript from "refractor/lang/typescript.js";
import { ExtensionPriority } from "remirror";
import {
  BlockquoteExtension,
  BoldExtension,
  BulletListExtension,
  CodeBlockExtension,
  CodeExtension,
  HardBreakExtension,
  HeadingExtension,
  ImageExtension,
  ItalicExtension,
  LinkExtension,
  ListItemExtension,
  MarkdownExtension,
  OrderedListExtension,
  PlaceholderExtension,
  StrikeExtension,
  TableExtension,
  TrailingNodeExtension,
} from "remirror/extensions";
import { MarkdownToolbar } from "./markdown-toolbar";

import type { ReactEditorProps } from "@remirror/react-editors/dist-types/types";

export type MarkdownEditorProps = Partial<
  Omit<ReactEditorProps, "stringHandler">
> & {
  onChange: (text: string) => void;
};

export const MarkdownEditor: FC<PropsWithChildren<MarkdownEditorProps>> = ({
  placeholder,
  children,
  ...rest
}) => {
  const extensions = useCallback(
    () => [
      new ImageExtension({ enableResizing: true }),
      new PlaceholderExtension({ placeholder }),
      new LinkExtension({ autoLink: true }),
      new BoldExtension(),
      new StrikeExtension(),
      new ItalicExtension(),
      new HeadingExtension(),
      new LinkExtension(),
      new BlockquoteExtension(),
      new BulletListExtension({ enableSpine: true }),
      new OrderedListExtension(),
      new ListItemExtension({
        priority: ExtensionPriority.High,
        enableCollapsible: true,
      }),
      new CodeExtension(),
      new CodeBlockExtension({ supportedLanguages: [jsx, typescript] }),
      new TrailingNodeExtension(),
      new TableExtension(),
      new MarkdownExtension({ copyAsMarkdown: false }),
      new HardBreakExtension(),
    ],
    [placeholder]
  );

  const { manager } = useRemirror({
    extensions,
    stringHandler: "markdown",
    content: rest.initialContent as string,
  });

  return (
    <ThemeProvider>
      <Remirror
        manager={manager}
        {...rest}
        onChange={(params) => {
          rest.onChange(params.helpers.getMarkdown());
        }}
      >
        <MarkdownToolbar />
        <EditorComponent />
        {children}
      </Remirror>
    </ThemeProvider>
  );
};
