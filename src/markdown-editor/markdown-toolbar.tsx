import {
  HeadingLevelButtonGroup,
  HistoryButtonGroup,
  ToggleBlockquoteButton,
  ToggleBoldButton,
  ToggleCodeBlockButton,
  ToggleCodeButton,
  ToggleItalicButton,
  ToggleStrikeButton,
} from "@remirror/react";
import type { FC } from "react";
import * as React from "react";

export const MarkdownToolbar: FC = () => {
  return (
    <div className="grid">
      <div className="flex flex-row overflow-x-auto rounded-sm bg-slate-200">
        <ToggleBoldButton className="box-border shrink-0" />

        <ToggleItalicButton className="box-border shrink-0" />
        <ToggleStrikeButton className="box-border shrink-0" />

        <ToggleCodeButton className="box-border shrink-0" />
        <HeadingLevelButtonGroup showAll />
        <ToggleBlockquoteButton className="box-border shrink-0" />
        <ToggleCodeBlockButton />

        <div className="hidden sm:inline-block">
          <HistoryButtonGroup />
        </div>
      </div>
    </div>
  );
};
