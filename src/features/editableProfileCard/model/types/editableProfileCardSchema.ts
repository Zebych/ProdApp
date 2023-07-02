import { ProfileCardData } from 'entities/Profile';
import { ValidateProfileError } from '../consts/consts';

export interface ProfileSchema {
    data?: ProfileCardData;
    form?: ProfileCardData;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
    validateErrors?: ValidateProfileError[];
}
