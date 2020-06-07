import React from 'react';

// 新規カテゴリ入力欄
export const Input = () => {

    return (
        <React.Fragment>

            <form className="command-category--body__input hidden-item" id="categoryInput">

                <label htmlFor="categoryName" className="category-input">
                    <input type="text" id="categoryName" placeholder="&nbsp;" />
                    <span className="category-input__placeholder">Category</span>
                    <span className="category-input__border"></span>
                </label>

                <input 
                    type="submit" 
                    value="ADD"
                    className="category-button" 
                />

            </form>

        </React.Fragment>
    );
}