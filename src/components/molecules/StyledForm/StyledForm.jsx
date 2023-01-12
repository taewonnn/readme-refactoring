import React from 'react';
import styled from 'styled-components';
import Label from '../../atoms/Label/Label';
import Input from '../../atoms/Input/Input';

const FormWrapper = styled.form`
	margin: 0 auto;
	width: 322px;
	margin-bottom: 30px;
`;

export default function StyledForm({
	htmlFor,
	fontSize,
	lineHeight,
	color,
	value,
	type,
	id,
	placeholder,
	width,
	borderWidth,
	required,
}) {
	return (
		<FormWrapper>
			<Label htmlFor={htmlFor} fontSize={fontSize} lineHeight={lineHeight} color={color} value={value} />
			<Input
				type={type}
				id={id}
				placeholder={placeholder}
				width={width}
				borderWidth={borderWidth}
				required={required}
			/>
		</FormWrapper>
	);
}
