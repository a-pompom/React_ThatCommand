import React from 'react';

const Form = () => {

    return (

        <article className="login__form">
        
            <form action="#" method="post">
                
                <label htmlFor="userName" className="login-input login__form__item">
                    <input type="text" placeholder="&nbsp;" id="userName" />
                    <span className="login-input__placeholder">Username</span>
                    <span className="login-input__border"></span>
                </label>
                
                <label htmlFor="password" className="login-input login__form__item">
                    <input type="password" placeholder="&nbsp;" id="password" />
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

export default Form;