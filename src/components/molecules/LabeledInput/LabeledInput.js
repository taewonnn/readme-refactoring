import React from 'react';
import Label from '../../atoms/Label/Label';
import Input from '../../atoms/Input/Input';
import { StyledLabeledInput } from './style';

export default function LabeledInput({
  type,
  id,
  placeholder = '',
  inputValue,
  required,
  htmlFor,
  width,
  lineHeight,
  color,
  borderWidth,
  labelValue,
}) {
  return (
    <StyledLabeledInput>
      <Label htmlFor={htmlFor} value={labelValue} color={color} lineHeight={lineHeight} />
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        value={inputValue}
        width={width}
        borderWidth={borderWidth}
        required={required}
      />
    </StyledLabeledInput>
  );
}
