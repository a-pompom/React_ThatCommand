import React from 'react';

export const Input = () => {

    return (

        <form className="command-item--body__input hidden-item" id="commandInput">

            {/* コマンド名 */}
            <label htmlFor="title" className="command-input">
                <input type="text" id="title" placeholder="&nbsp;" />
                <span className="command-input__placeholder">Title</span>
                <span className="command-input__border"></span>
            </label>

            {/* コマンドのカテゴリ */}
            <label htmlFor="subCategory" className="command-input">
                <input type="text" id="subCategory" placeholder="&nbsp;" />
                <span className="command-input__placeholder">Sub Category</span>
                <span className="command-input__border"></span>
            </label>

            {/* メモ */}
            <label htmlFor="memo" className="command-textarea">
                <textarea id="memo" placeholder="&nbsp;"></textarea>
                <span className="command-textarea__placeholder">Memo</span>
                <span className="command-textarea__border"></span>
            </label>

            <input 
                type="submit" 
                value="ADD"
                className="command-button" 
            />

        </form>

    );
};