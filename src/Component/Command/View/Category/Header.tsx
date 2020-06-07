import React from 'react';

// カテゴリ用ヘッダ
export const Header = () => {

    return (
        <React.Fragment>
            <header className="command-category--header">
                <h2>Category</h2>

                <h2 id="newCategory" className="icon--simple new-category"></h2>
            </header>
        </React.Fragment>
    );
}