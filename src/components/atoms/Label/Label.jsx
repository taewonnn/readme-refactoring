import React from 'react';
import { StyledLabel } from './style';

export default function Label({ htmlFor, fontSize, color, value }) {
	return (
		<StyledLabel htmlFor={htmlFor} fontSize={fontSize} color={color}>
			{value}
		</StyledLabel>
	);
}
