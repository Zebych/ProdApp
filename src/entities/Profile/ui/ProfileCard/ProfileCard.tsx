import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { ProfileCardData } from '../../model/types/profileCardData';

import {
    ProfileCardRedesigned,
    ProfileCardRedesignedError,
    ProfileCardRedesignedSkeleton,
} from '../ProfileCardRedisigned/ProfileCardRedesigned';

export interface ProfileCardProps {
    className?: string;
    data?: ProfileCardData;
    error?: string;
    isLoading?: boolean;
    readonly?: boolean;
    // Необязательные чтобы не передавать все в сторибуке
    onChangeFirstName?: (value?: string) => void;
    onChangeLastName?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeCurrency?: (currency: Currency) => void;
    onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const { isLoading, error } = props;

    if (isLoading) {
        return <ProfileCardRedesignedSkeleton />;
    }

    if (error) {
        return <ProfileCardRedesignedError />;
    }

    return <ProfileCardRedesigned {...props} />;
};
