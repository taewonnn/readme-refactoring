import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchUserUl } from './SearchUserListStyle';
import SearchUserListItem from '../SearchUserListItem/SearchUserListItem';

// 검색해온 배열 데이터를 map으로 뽑아줘야할텐데 왜 안나오느널까?
function SearchUserList({ searchResult }) {
	const navigate = useNavigate();

	return (
		<SearchUserUl>
			{searchResult.map((user, i) => (
				<SearchUserListItem
					key={i}
					name={user.username}
					id={`@${user.accountname}`}
					onClick={() => navigate(`/yourprofile/${user.accountname}`)}
				/>
			))}
		</SearchUserUl>
	);
}

export default SearchUserList;
