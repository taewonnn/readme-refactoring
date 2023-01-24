import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Label from '../../atoms/Label/Label';
import Input from '../../atoms/Input/Input';

const InputWrapper = styled.form`
	margin: 0 auto;
	width: 322px;
	margin-bottom: 30px;
`;

export default function InputBox({ props }) {
	const [inpValue, setInpValue] = useState();

	const checkVal = () => {
		console.log(props.inputValue);
		setInpValue(props.inputValue);
	};
	const onChange = e => {
		setInpValue(e.target.value);
	};

	useEffect(() => {
		setInpValue(props.inputValue);
		console.log(props.inputValue);
		console.log(props);
		console.log(inpValue);
	}, []);

	return (
		<InputWrapper>
			<Label htmlFor={props.htmlFor} fontSize={props.fontSize} color={props.color} value={props.value} />
			<Input
				type={props.type}
				id={props.id}
				placeholder={props.placeholder}
				value={inpValue}
				required={props.required}
				onChange={() => onChange()}
			/>
		</InputWrapper>
	);
}
