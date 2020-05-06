import React from 'react';
import { useLogin } from '../Hooks/useLogin';
import { LoginHooks, LoginState } from '../Model/LoginData';

const FormView: React.FC<LoginHooks> = ({
    loginState,
    handleBlur
}) => {
    return (

        <article className="login__form">
        
            <form action="#" method="post">
                
                {/* ユーザ名 */}
                <label htmlFor="userName" className="login-input login__form__item">
                    <input 
                        id="userName"
                        type="text"
                        placeholder="&nbsp;"

                        defaultValue={loginState.userName.value}
                        onBlur={handleBlur}
                    />
                    <span className="login-input__placeholder">Username</span>
                    <span className="login-input__border"></span>
                </label>
                
                {/* パスワード */}
                <label htmlFor="password" className="login-input login__form__item">
                    <input 
                        id="password"
                        type="password"
                        placeholder="&nbsp;"

                        defaultValue={loginState.password.value}
                        onBlur={handleBlur}
                     />
                    <span className="login-input__placeholder">Password</span>
                    <span className="login-input__border"></span>
                </label>
                
                <br />

                <input type="submit" 
                    value="LOGIN" className="login-button login__form__item--button" />

            </form>
        </article>
    );
};

const Form = () => {

    const loginHooks: LoginHooks = useLogin();
    // FormViewへHooksから受け取った状態などを渡す
    return (
        <FormView {...loginHooks} />
    )
}

export default Form;