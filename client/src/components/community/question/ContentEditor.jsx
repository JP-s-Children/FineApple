import React from 'react';
import { useController } from 'react-hook-form';
import useTextEditor from '../../../hooks/useTextEditor';
import { TextEditor } from '..';

const ContentEditor = ({ name, control }) => {
  const {
    field: { value, onChange },
  } = useController({ name, control });

  const editor = useTextEditor({
    initContent: value,
    placeholder: '질문이 무엇입니까?',
    option: {
      onUpdate: ({ editor }) => onChange(editor.getHTML()),
    },
  });

  return <TextEditor editor={editor} />;
};

export default ContentEditor;
