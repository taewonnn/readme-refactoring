import React from 'react';
import styled from 'styled-components';
import defaultTheme from '../../../commons/style/themes/default';

// eslint-disable-next-line react/prop-types
export default function Alert({ children, deleteOrLogout }) {
	const cancel = () => {};

	const confirm = () => {};

	const AlertStyled = styled.div`
		width: 264px;
		text-align: center;
		border-radius: 17px;

		p {
			padding: 22px 56px;
			font-family: 'Pretendard-Bold', serif;
			font-weight: 700;
			font-size: 16px;
		}
	`;

	const ButtonStyled = styled.div`
		display: flex;

		button {
			padding: 14px 0;
			border-top: 1px solid ${defaultTheme.palette.gray};
			width: 100%;
			font-family: 'Pretendard-Medium', sans-serif;
			font-weight: 500;
			font-size: 14px;
		}

		.cancel {
			border-bottom-left-radius: 17px;
			border-right: 1px solid ${defaultTheme.palette.gray};
		}

		.selected {
			color: ${defaultTheme.palette.icon};
			margin-left: -1px;
			border-bottom-right-radius: 17px;
			border-left: 1px solid ${defaultTheme.palette.gray};
		}
	`;

	return (
		<AlertStyled>
			<p>{children}</p>
			<ButtonStyled>
				{/* eslint-disable-next-line react/button-has-type */}
				<button onClick={cancel} className="cancel">
					취소
				</button>
				{/* eslint-disable-next-line react/button-has-type */}
				<button onClick={confirm} className="selected">
					{deleteOrLogout}
				</button>
			</ButtonStyled>
		</AlertStyled>
	);
}
