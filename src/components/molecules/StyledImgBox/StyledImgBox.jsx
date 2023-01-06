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
	margin: 0 auto;
	margin-top: 30px;
	margin-bottom: 30px;
	background-image: url(${readmeImg});
	background-size: cover;
`;

const UploadImg = styled.img`
	position: relative;
	left: 80px;
	top: 80px;
`;
export default function StyledImgBox() {
	return (
		<ImgBoxWrapper>
			<StyledImgLabel htmlFor="selectImg">
				<UploadImg src={selectProfile} alt="" />
			</StyledImgLabel>
			<StyledImgInput id="selectImg" type="file" style={{ display: 'none' }} />
		</ImgBoxWrapper>
	);
}
