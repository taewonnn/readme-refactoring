import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import TopNavBarSave from '../../../components/molecules/TopNavBarSave/TopNavBarSave';
import readmeImg from '../../../assets/logo/README_color.png';
import StyledImgBox from '../../../components/molecules/StyledImgBox/StyledImgBox';
import InputBox from '../../../components/molecules/StyledForm/InputBox';
import AuthContext from '../../../store/auth-context';
import Button from '../../../components/atoms/Button/Button';

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
	// input 값 자식에게 내려주기
	// 자식 데이터를 부모한테 바로 못 보내주니깐, 부모에서 이벤트를 발생시키는 useState를 사용함
	const [userInfo, setUserInfo] = useState({
		username: '',
		accountname: '',
		intro: '',
		image: '',
	});

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
		userInfo,
		setUserInfo,
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

	// 2. body에 담은 값을 PUT으로 보내면됨
	// 버튼 클릭 시 PUT
	// 1. 입력값을 console에 나오게 확인  -> 자식 comp에서 완료
	// 2. 자식들한테서 업데이트된 보낼 내용을 가져와서 body에 담기

	const configPut = {
		method: 'put',
		url: `${API_HOST}/user`,
		headers: { Authorization: `Bearer ${token}`, 'Content-type': 'application/json' },
		data: { user: userInfo },
	};
	const navigate = useNavigate();
	const handleUpdateSubmit = async e => {
		await axios(configPut)
			.then(navigate('/myprofile'))
			.catch(err => {
				console.error(err);
			});
	};
	return (
		<form onSubmit={() => {}}>
			<TopNavBarSave handleJoinSubmit={handleUpdateSubmit} />
			<StyledImgBox image={userInfo.image} setUserInfo={setUserInfo} />
			<InputBox
				props={makeProps(
					'username',
					'username',
					'2-10자 이내로 작성해주세요.',
					'required',
					'사용자 이름',
					userInfo.username,
				)}
			/>
			<InputBox
				props={makeProps(
					'accountname',
					'accountname',
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
