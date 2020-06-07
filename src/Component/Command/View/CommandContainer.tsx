import React from 'react';
import { Category } from './Category/Category';
import { Command } from './Command/Command';

const CommandContainerView = () => {

    return (
        <div className="command-container">

            <Category />

            <Command />
		
	</div>
    );
};

export const CommandContainer = () => {
    return (
        <CommandContainerView />
    );
};