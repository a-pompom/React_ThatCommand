import React from 'react';

import { Header } from './Header';
import { List } from './List';
import { Input } from './Input';

export const Command = () => {

    return (

        <React.Fragment>

            <article className="command-item">

                <Header />

                <main className="command-item--body">

                    <Input />

                    <List />

                </main>

            </article>

        </React.Fragment>
    );
};