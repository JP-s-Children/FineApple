import React from 'react';
import styled from '@emotion/styled';
import { RichTextEditor } from '@mantine/tiptap';
import { BubbleMenu } from '@tiptap/react';
import transientOptions from '../../utils/transientOptions';

const EditorWrapper = styled(RichTextEditor, transientOptions)`
  border-radius: 10px;
  background-color: var(--body-bg-color);
  overflow: hidden;
  border: ${({ $isFocused }) => ($isFocused ? '1px solid var(--hover-font-color)' : 'undefined')};
`;

const EditorButtonGroup = styled(RichTextEditor.ControlsGroup)`
  button {
    background-color: var(--body-bg-color);
    color: var(--font-color);

    :hover {
      color: var(--hover-font-color);
    }
  }
`;

const TextEditor = ({ editor, useBubble = true }) => (
  <EditorWrapper editor={editor} $isFocused={editor?.isFocused}>
    <RichTextEditor.Toolbar bg="var(--body-bg-color)">
      {useBubble && editor && (
        <BubbleMenu editor={editor}>
          <EditorButtonGroup>
            <RichTextEditor.Bold tabIndex={-1} />
            <RichTextEditor.Italic tabIndex={-1} />
            <RichTextEditor.Link tabIndex={-1} />
          </EditorButtonGroup>
        </BubbleMenu>
      )}
      <EditorButtonGroup>
        <RichTextEditor.Bold tabIndex={-1} />
        <RichTextEditor.Italic tabIndex={-1} />
        <RichTextEditor.Underline tabIndex={-1} />
        <RichTextEditor.Strikethrough tabIndex={-1} />
        <RichTextEditor.Highlight tabIndex={-1} />
        <RichTextEditor.ClearFormatting tabIndex={-1} />
      </EditorButtonGroup>
    </RichTextEditor.Toolbar>
    <RichTextEditor.Content bg="var(--body-bg-color)" c="var(--font-color)" />
  </EditorWrapper>
);

export default TextEditor;
