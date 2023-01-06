import React, { useState } from 'react';
import styled from 'styled-components';
import TopNavBarSave from '../../../components/molecules/TopNavBarSave/TopNavBarSave';
import Label from '../../../components/atoms/Label/Label';
import Input from '../../../components/atoms/Input/Input';
import readmeImg from '../../../assets/logo/README_color.png';
import selectProfile from '../../../assets/icons/profile-photo.png';
import { StyledImgLabel } from '../../../components/atoms/Label/style';
import { StyledImgInput } from '../../../components/atoms/Input/style';
import StyledImgBox from '../../../components/molecules/StyledImgBox/StyledImgBox';

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
	left: 70px;
	top: 80px;
`;

const StyledForm = styled.form`
	margin: 0 auto;
	width: 322px;
	margin-bottom: 30px;
`;

export default function ModifyProfile() {
	// input 값 자식에게 내려주기
	const [data, setData] = useState({
		userName: '',
		userId: '',
		intro: '',
	});

	return (
		<>
			<TopNavBarSave />

			<StyledImgBox />
			<StyledForm>
				<Label htmlFor="userName" fontSize="12px" value="사용자 이름" color="black" />
				<Input id="userName" type="text" placeholder="2-10자 이내로 작성해주세요" required="required" />
			</StyledForm>

			<StyledForm>
				<Label htmlFor="userId" fontSize="12px" value="사용자 ID" />
				<Input id="userId" type="text" placeholder="영문,숫자,특수문만 사용 가능합니다." required="required" />
			</StyledForm>

			<StyledForm>
				<Label htmlFor="intro" fontSize="12px" value="소개" />
				<Input id="intro" type="text" placeholder="자신과 판매할 상품에 대해 소개해주세요" required="required" />
			</StyledForm>
		</>
	);
}
