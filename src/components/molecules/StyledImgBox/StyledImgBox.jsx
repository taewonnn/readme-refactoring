import React from 'react';
import styled from 'styled-components';
import { StyledImgLabel } from '../../atoms/Label/style';
import { StyledImgInput } from '../../atoms/Input/style';
import selectProfile from '../../../assets/icons/profile-photo.png';
import readmeImg from '../../../assets/logo/README_color.png';

const ImgBoxWrapper = styled.div`
	width: 110px;
	height: 110px;
	border-radius: 50%;
	margin: 30px auto;
	background-image: url(${props => props.image});
	background-size: cover;
`;

const UploadImg = styled.img`
	position: relative;
	left: 80px;
	top: 80px;
`;
export default function StyledImgBox({ image }) {
	console.log(image);
	return (
		<ImgBoxWrapper image={image}>
			<StyledImgLabel htmlFor="selectImg">
				<UploadImg src={selectProfile} alt="" />
			</StyledImgLabel>
			<StyledImgInput id="selectImg" type="file" style={{ display: 'none' }} />
		</ImgBoxWrapper>
	);
}
