import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { StyledImgLabel } from '../../atoms/Label/style';
import { StyledImgInput } from '../../atoms/Input/style';
import selectProfile from '../../../assets/icons/profile-photo.png';
import readmeImg from '../../../assets/logo/README_color.png';
import AuthContext from '../../../store/auth-context';

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
export default function StyledImgBox({ image, userInfo, setUserInfo }) {
	console.log(image);
	// 0. 이미지 관리할 상태
	const [profileImg, setProfileImg] = useState();

	// 1. 이미지를 POST
	// 1-1. 토큰 설정
	const { token } = useContext(AuthContext);

	// 1-2. API 주소 설정
	const API_HOST = process.env.REACT_APP_BASE_URL;

	// 1-3 POST
	const config = imgFile => ({
		method: 'post',
		url: `${API_HOST}/image/uploadfile`,
		headers: { 'Content-type': 'multipart/form-data' },
		data: { image: imgFile },
	});
	const uploadImg = async imgFile => {
		await axios(config(imgFile))
			.then(res => {
				console.log(res.data);
				setProfileImg(res.data.filename);
				setUserInfo(...userInfo, ...{ image: profileImg });
				console.log(res.data.filename);
				console.log(image);
			})
			.catch(err => {
				console.error(err);
			});
	};

	// 2. 받은 값을 이미지 셋팅에 보여주기
	// profileImg가 있으면 앞에 API_HOST 붙여서 보여주고, 없으면 기존 image 보여주기
	// image={profileImg ? `${API_HOST}/${profileImg}` : image}

	// 3. 수정 시 수정된 이미지 보여주고 수정한 이미지 URL을 PUT 요청위해 ModifyProfile에 전달해주기

	return (
		<ImgBoxWrapper image={profileImg ? `${API_HOST}/${profileImg}` : image}>
			<StyledImgLabel htmlFor="selectImg">
				<UploadImg src={selectProfile} alt="" />
			</StyledImgLabel>
			<StyledImgInput
				id="selectImg"
				type="file"
				style={{ display: 'none' }}
				onChange={e => uploadImg(e.target.files[0])}
			/>
		</ImgBoxWrapper>
	);
}
