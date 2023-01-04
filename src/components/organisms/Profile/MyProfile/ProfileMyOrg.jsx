import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import FollowCount from '../../../molecules/FollowCount/FollowCount';
import ProfileDsc from '../../../molecules/ProfileDsc/ProfileDsc';
import ProfileImg from '../../../molecules/ProfileImg/ProfileImg';
import ButtonGroupMy from '../../../molecules/ButtonGroupMy/ButtonGroupMy';
import AuthContext from '../../../../store/auth-context';

const ProfileMyWrapper = styled.div`
	width: 390px;
	margin: 0 auto;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;
const CounterDiv = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	padding-top: 30px;
`;

export default function ProfileMyOrg() {
	// 나의 프로필 정보 가져오기
	const [profile, setProfile] = useState([]);
	const { token } = useContext(AuthContext);
	const API_HOST = process.env.REACT_APP_BASE_URL;

	const config = {
		method: 'get',
		url: `${API_HOST}/user/myinfo`,
		headers: {
			Authorization: `Bearer ${token}`,
			'Content-type': 'application/json',
		},
	};

	useEffect(() => {
		axios(config)
			.then(res => {
				setProfile(res.data.user);
			})
			.catch(err => console.error('에러 발생', err));
	}, [token]);

	return (
		<ProfileMyWrapper>
			<CounterDiv>
				<FollowCount count={profile.followerCount} kind="followers" accountName={profile.accountname} />
				<ProfileImg src={profile.image} alt="ProfileImg" />
				<FollowCount count={profile.followingCount} kind="followings" accountName={profile.accountname} />
			</CounterDiv>
			<ProfileDsc username={profile.username} userId={profile.accountname} userDesc={profile.intro} />
			<ButtonGroupMy />
		</ProfileMyWrapper>
	);
}
