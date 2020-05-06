export interface Validator {
    validatorFunction: Function,
    args: any[]
}
export interface ValidatorFields {
    [key: string]: Validator[]
}