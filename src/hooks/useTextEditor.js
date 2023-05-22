import { useEditor } from '@tiptap/react';
import Highlight from '@tiptap/extension-highlight';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Placeholder from '@tiptap/extension-placeholder';

const useTextEditor = ({ initContent = '', placeholder = '', option }) =>
  useEditor({
    extensions: [StarterKit, Underline, Highlight, Placeholder.configure({ placeholder })],
    content: initContent,
    ...option,
  });

export default useTextEditor;
