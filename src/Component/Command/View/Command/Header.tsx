import React from 'react';

// コマンド用ヘッダ
export const Header = () => {

    return (
        <React.Fragment>
			<header className="command-item--header">
				<h2>Item</h2>
				<h2 id="newCommand" className="icon--simple new-command"></h2>
			</header>
        </React.Fragment>
    );
}