import type { ChangeEvent } from 'react';
import type { TextInputProps } from '../../types';

function TextInput({
  value,
  onTextChange,
  placeholder = 'Paste text here:',
}: TextInputProps) {

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onTextChange(event.target.value);

  };

  return (

    <textarea
      id="storyInput"
      value={value}
      onChange={handleChange}
      placeholder={placeholder}

      style={{
        width: '750px',
        height: '300px',
        textAlign: 'left',
        margin: '0 auto',
        display: 'block',
        padding: '12px',
        boxSizing: 'border-box',

      }}

    />

  );

}

export default TextInput;