import { Field } from '../../Common/Field';

export interface Category {
    id: string,
    name: string
}

export interface TopState {
    categoryList: Category[],
    searchCategoryName: Field<string>,
    searchCommandName: Field<string>,
}

export interface Hook {
    state: TopState
};