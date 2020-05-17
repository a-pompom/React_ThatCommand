import React from 'react';
import { useLogin } from '../Hooks/useLogin';
import { LoginHooks, LoginState } from '../Model/LoginData';

const FormView: React.FC<LoginHooks> = ({
    state,
    handleBlur
}) => {
    return (

        <article className="login__form">
        
            <form action="#" method="post">
                
                {/* ユーザ名 */}
                <label htmlFor="userName" className="login-input login__form__item">
                    <input 
                        id="userName"
                        name="user.userName"
                        type="text"
                        placeholder="&nbsp;"

                        defaultValue={state.user.userName.value}
                        onBlur={handleBlur}
                    />
                    <span className="login-input__placeholder">Username</span>
                    <span className="login-input__border"></span>
                </label>
                {state.user.userName.errors.map((errorMessage) => {
                    return (
                        <span key={errorMessage} className="error">{errorMessage}</span>
                    )
                })}
                
                {/* パスワード */}
                <label htmlFor="password" className="login-input login__form__item">
                    <input 
                        id="password"
                        type="password"
                        name="user.password"
                        placeholder="&nbsp;"

                        defaultValue={state.user.password.value}
                        onBlur={handleBlur}
                     />
                    <span className="login-input__placeholder">Password</span>
                    <span className="login-input__border"></span>
                </label>
                {state.user.password.errors.map((errorMessage) => {
                    return (
                        <span key={errorMessage} className="error">{errorMessage}</span>
                    )
                })}
                
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