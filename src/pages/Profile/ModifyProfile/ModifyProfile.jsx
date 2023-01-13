import React, { useState } from 'react';
import styled from 'styled-components';
import TopNavBarSave from '../../../components/molecules/TopNavBarSave/TopNavBarSave';
import readmeImg from '../../../assets/logo/README_color.png';
import StyledImgBox from '../../../components/molecules/StyledImgBox/StyledImgBox';
import StyledForm from '../../../components/molecules/StyledForm/StyledForm';

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

export default function ModifyProfile() {
	// input 값 자식에게 내려주기
	const [data, setData] = useState({
		userName: '',
		userId: '',
		intro: '',
	});

	// 데이터 보내기
	// 1.토큰 설정 / 2. URl 설정 / 3. API 통신

	// 1.토큰 설정
	const token =
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWQyN2YxYjJjYjIwNTY2Mzc3NmIxMiIsImV4cCI6MTY3NzQ3NjM0OSwiaWF0IjoxNjcyMjkyMzQ5fQ.p6HfItN748doyV70fqnQOWwuIfWUBC2i2GiDT4XTqao';

	// 2. URL 설정
	const API_HOST = process.env.REACT_APP_BASE_URL;

	// 3. API 통신 - Post

	return (
		<>
			<TopNavBarSave />

			<StyledImgBox />

			<StyledForm
				htmlFor="userName"
				fontSize="12px"
				color="black"
				id="userName"
				type="text"
				plac
				eholder="2-10자 이내로 작성해주세요"
				required="required"
				value="사용자 이름"
			/>
			<StyledForm
				htmlFor="userId"
				fontSize="12px"
				color="black"
				id="userId"
				type="text"
				placeholder="영문,숫자,특수문만 사용 가능합니다."
				required="required"
				value="사용자 ID"
			/>
			<StyledForm
				htmlFor="intro"
				fontSize="12px"
				color="black"
				id="intro"
				type="text"
				placeholder="자신과 판매할 상품에 대해 소개해주세요"
				required="required"
				value="소개"
			/>
		</>
	);
}
