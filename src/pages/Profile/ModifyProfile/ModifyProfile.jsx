import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import TopNavBarSave from '../../../components/molecules/TopNavBarSave/TopNavBarSave';
import readmeImg from '../../../assets/logo/README_color.png';
import StyledImgBox from '../../../components/molecules/StyledImgBox/StyledImgBox';
import InputBox from '../../../components/molecules/StyledForm/InputBox';
import AuthContext from '../../../store/auth-context';

const ImgBoxWrapper = styled.div`
	width: 110px;
	height: 110px;
	border-radius: 50%;
	margin: 30px auto;
	background-image: url(${readmeImg});
	background-size: cover;
`;

const UploadImg = styled.img`
	position: relative;
	left: 70px;
	top: 80px;
`;

export default function ModifyProfile() {
	const makeProps = (htmlFor, id, placeholder, required, value, inputValue) => ({
		htmlFor,
		id,
		placeholder,
		required,
		value,
		inputValue,
		fontSize: '12px',
		color: 'black',
		type: 'text',
	});
	// input 값 자식에게 내려주기
	const [userInfo, setUserInfo] = useState({
		username: '',
		accountname: '',
		intro: '',
		image: '',
	});

	// 기존 데이터 가져오기
	// 1.토큰 설정
	const { token } = useContext(AuthContext);

	// 2. URL 설정
	const API_HOST = process.env.REACT_APP_BASE_URL;

	// 3. API 통신 - GET
	const config = {
		method: 'get',
		url: `${API_HOST}/user/myinfo`,
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	useEffect(() => {
		axios(config)
			.then(res => {
				setUserInfo({ ...res.data.user });
				console.log(res.data.user);
			})
			.catch(err => {
				console.error(err);
			});
	}, []);

	// 버튼 클릭 시 PUT
	// 1. 입력값을 console에 나오게 확인
	// 2. 그 입력값을 보내면됨
	const chkVal = e => {
		console.log(userInfo.username);
	};
	return (
		<form onSubmit={() => {}}>
			<TopNavBarSave />
			<StyledImgBox image={userInfo.image} />
			<InputBox
				props={makeProps(
					'userName',
					'userName',
					'2-10자 이내로 작성해주세요.',
					'required',
					'사용자 이름',
					userInfo.username,
				)}
			/>
			<InputBox
				props={makeProps(
					'userId',
					'userId',
					'영문,숫자,특수문자만 가능합니다.',
					'required',
					'사용자 ID',
					userInfo.accountname,
				)}
			/>
			<InputBox
				props={makeProps('intro', 'intro', '자신과 판매할 상품에 대해 소개해주세요.', null, '소개', userInfo.intro)}
			/>
		</form>
	);
}
