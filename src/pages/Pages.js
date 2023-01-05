import React, { useContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthContext from '../store/auth-context';
import Login from './Login/Login';
import EmailLogin from './EmailLogin/EmailLogin';
import Join from './Join/JoinMembership';
import ProfileSetting from './Join/ProfileSetting';
import Splash from './Splash/Splash';
import Home from './Home/Home';
import YourProfile from './Profile/YourProfile/YourProfile';
import MyProfile from './Profile/MyProfile/MyProfile';
import ModifyProfile from './Profile/ModifyProfile/ModifyProfile';
import Followers from './Followers/Followers';
import Followings from './Followings/Followings';
import Chat from './Chat/ChatList';
import ChatRoom from './Chat/ChatRoom';
import Upload from './Upload/Upload';
import AddProductPage from './AddProduct/AddProduct';
import Search from './Search/Search';
import NotFound from './NotFound/NotFound';
import DetailPosts from './DetailPosts/DetailPosts';

function Pages() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (window.location.pathname === '/') {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
  }, []);

  return loading ? <Splash /> : <MainPages />;
}

function MainPages() {
  const AuthCtx = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={AuthCtx.isLoggedIn ? <Home /> : <Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/emailLogin" element={<EmailLogin />} />
      <Route path="/join" element={<Join />} />
      <Route path="/join/profileSetting" element={<ProfileSetting />} />
      <Route path="/home" element={<Home />} />
      <Route path="/yourprofile/:accountName" element={<YourProfile />} />
      <Route path="/myprofile" element={<MyProfile />} />
      <Route path="/modifyProfile" element={<ModifyProfile />} />
      <Route path="/followers/:accountName" element={<Followers />} />
      <Route path="/followings/:accountName" element={<Followings />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/chat/chattingRoom" element={<ChatRoom />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/AddProduct" element={<AddProductPage />} />
      <Route path="/search" element={<Search />} />
      <Route path="/post/:id" element={<DetailPosts />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default Pages;
