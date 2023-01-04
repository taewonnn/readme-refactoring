import React, { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/atoms/Button/Button';
import useInput from '../../hooks/use-Input';
import { ErrorP, Input, InputForm, Label, LoginWrapper, TitleText } from './styled';
import AuthContext from '../../store/auth-context';
import useAxios from '../../hooks/use-api';

export function EmailLogin() {
	const [msg, setMsg] = useState('');
	const emailInputRef = useRef();
	const passwordInputRef = useRef();

	const navigate = useNavigate();

	const authCtx = useContext(AuthContext);

	const emailRegex =
		/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

	const {
		value: enteredEmail,
		isValid: enteredEmailIsValid,
		changeHandler: emailChangeHandler,
		blurHandler: emailBlurHandler,
		reset: resetEmailInput,
	} = useInput(value => emailRegex.test(value));

	const {
		value: enteredPassword,
		isValid: enteredPasswordIsValid,
		changeHandler: passwordChangeHandler,
		blurHandler: passwordBlurHandler,
		reset: resetPassword,
	} = useInput(value => value.length >= 6);

	let formIsValid = false;

	if (enteredEmailIsValid && enteredPasswordIsValid) {
		formIsValid = true;
	}

	const user = {
		user: {
			email: enteredEmail,
			password: enteredPassword,
		},
	};

	const { ResData, response } = useAxios({
		method: 'post',
		url: `${process.env.REACT_APP_BASE_URL}/user/login`,
		body: user,
		headers: {
			'Content-type': 'application/json',
		},
	});

	useEffect(() => {
		// if (response.status === 422) {
		//     setMsg(response.message);
		// }
		if (response) {
			if (response.status) {
				setMsg(response.message);
			} else {
				authCtx.login(response.user.token, response.user.accountname);
				navigate('/home');
			}
		}
	}, [response]);

	const formSubmitHandler = e => {
		e.preventDefault();

		if (!enteredEmailIsValid || !enteredPasswordIsValid) {
			return;
		}
		ResData();

		resetEmailInput();
		resetPassword();
	};

	return (
		<LoginWrapper className="login-wrap">
			<TitleText className="title">로그인</TitleText>
			<form onSubmit={formSubmitHandler}>
				<InputForm>
					<Label htmlFor="email">이메일</Label>
					<Input
						type="email"
						id="email"
						value={enteredEmail}
						onBlur={emailBlurHandler}
						onChange={emailChangeHandler}
						ref={emailInputRef}
					/>
				</InputForm>
				<InputForm>
					<Label htmlFor="pw">비밀번호</Label>
					<Input
						type="password"
						id="pw"
						value={enteredPassword}
						onBlur={passwordBlurHandler}
						onChange={passwordChangeHandler}
						ref={passwordInputRef}
					/>
					{{ msg } && <ErrorP>{msg}</ErrorP>}
				</InputForm>
				<Button size="large" type="submit" disabled={!formIsValid}>
					로그인
				</Button>
			</form>
		</LoginWrapper>
	);
}

export default EmailLogin;
