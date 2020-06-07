import React from 'react';
import { Category } from './Category/Category';
import { Command } from './Command/Command';

import { useTop } from '../Hooks/useCategory';
import { CategoryHook } from '../Model/CategoryData';

interface Prop {
    categoryHook: CategoryHook
}

const CommandContainerView: React.FC<Prop> = ({
    categoryHook
}: Prop) => {

    return (
        <div className="command-container">

            <Category {...categoryHook} />

            <Command />
		
	</div>
    );
};

export const CommandContainer = () => {
    const categoryHook: CategoryHook = useTop();
    return (
        <CommandContainerView categoryHook={categoryHook} />
    );
};