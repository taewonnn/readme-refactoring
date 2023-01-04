import React from 'react';
import { BottomNavBarWrap } from '../../atoms/BottomNavBarWrap/BottomNavBarWrap';
import BottomNavBarItem from '../../atoms/BottomNavBarItem/BottomNavBarItem';
import IconHome from '../../../assets/icons/nav-home.svg';
import IconHomeFill from '../../../assets/icons/nav-home-on.svg';
import IconChat from '../../../assets/icons/nav-chatting.svg';
import IconChatFill from '../../../assets/icons/nav-chatting-on.svg';
import IconUpload from '../../../assets/icons/nav-upload.svg';
import IconUploadFill from '../../../assets/icons/nav-upload-on.svg';
import IconProfile from '../../../assets/icons/nav-profile.svg';
import IconProfileFill from '../../../assets/icons/nav-profile-on.svg';

export default function BottomNavBarBasic({ type }) {
	return (
		<BottomNavBarWrap>
			<BottomNavBarItem
				to="/home"
				iconSrc={type === 'home' ? IconHomeFill : IconHome}
				isActive={type === 'home'}
				children="홈"
			/>
			<BottomNavBarItem
				to="/chat"
				iconSrc={type === 'chat' ? IconChatFill : IconChat}
				isActive={type === 'chat'}
				children="채팅"
			/>
			<BottomNavBarItem
				to="/upload"
				iconSrc={type === 'upload' ? IconUploadFill : IconUpload}
				isActive={type === 'upload'}
				children="게시물 작성"
			/>
			<BottomNavBarItem
				to="/myprofile"
				iconSrc={type === 'profile' ? IconProfileFill : IconProfile}
				isActive={type === 'profile'}
				children="프로필"
			/>
		</BottomNavBarWrap>
	);
}
