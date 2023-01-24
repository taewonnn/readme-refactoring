import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Label from '../../atoms/Label/Label';
import { StyledInput } from '../../atoms/Input/style';

const InputWrapper = styled.div`
	margin: 30px auto;
	width: 322px;
`;

export default function InputBox({ props }) {
	const [inpValue, setInpValue] = useState('');

	const onChange = e => {
		setInpValue(e.target.value);
		props.setUserInfo({ ...props.userInfo, ...{ [props.id]: e.target.value } });
		console.log(e.target.value);
	};

	useEffect(() => {
		if (props.inputValue) {
			setInpValue(props.inputValue);
		}
	}, [props.inputValue]);

	return (
		<InputWrapper>
			<Label htmlFor={props.htmlFor} fontSize={props.fontSize} color={props.color} value={props.value} />
			<StyledInput
				type={props.type}
				id={props.id}
				placeholder={props.placeholder}
				value={inpValue}
				required={props.required}
				onChange={onChange}
			/>
		</InputWrapper>
	);
}
