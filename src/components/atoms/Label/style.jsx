import styled from 'styled-components';
import defaultTheme from '../../../commons/style/themes/default';

export const StyledLabel = styled.label`
	height: 15px;
	font-size: ${props => props.fontSize || defaultTheme.fontSize.sm};
	align-self: start;
	display: block;
	// line-height: ${props => props.lineHeight || '15px'};
	color: ${props => props.color || defaultTheme.palette.black};
	margin-bottom: 10px;
`;

export const StyledImgLabel = styled.label``;
