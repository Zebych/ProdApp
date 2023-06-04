import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { TextComponent, TextAlign, TextTheme } from 'shared/ui/Text/TextComponent';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency } from 'entities/Currency/model/types/currency';
import { CurrencySelect } from 'entities/Currency';
import { Country } from 'entities/Country/model/types/country';
import { CountrySelect } from 'entities/Country';
import { ProfileCardData } from 'entities/Profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: ProfileCardData;
    error?: string;
    isLoading?: boolean;
    readonly?: boolean;
    // Необязательные чтобы не передавать все в сторибуке
    onChangeFirstName?:(value?:string)=>void;
    onChangeLastName?:(value?:string)=>void;
    onChangeAge?:(value?:string)=>void;
    onChangeCity?:(value?:string)=>void;
    onChangeUsername?:(value?:string)=>void;
    onChangeAvatar?:(value?:string)=>void;
    onChangeCurrency?:(currency:Currency)=>void;
    onChangeCountry?:(country:Country)=>void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        error,
        isLoading,
        readonly,
        onChangeFirstName,
        onChangeLastName,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
    } = props;
    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, { [cls.loading]: true }, [className])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <TextComponent
                    theme={TextTheme.ERROR}
                    title={t('Произошла ошибка при загрузке профиля')}
                    text={t('Попробуйте обновить страницу')}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    const mods:Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>
            <div className={cls.data}>
                {data?.avatar && (
                    <div className={cls.avatarWrapper}>
                        <Avatar src={data?.avatar} alt="" />
                    </div>
                )}

                <Input
                    value={data?.first}
                    placeholder={t('Ваше имя')}
                    className={cls.input}
                    onChange={onChangeFirstName}
                    readonly={readonly}
                />

                <Input
                    value={data?.lastname}
                    placeholder={t('Ваша фамилия')}
                    className={cls.input}
                    onChange={onChangeLastName}
                    readonly={readonly}
                />

                <Input
                    value={data?.age}
                    placeholder={t('Ваша возраст')}
                    className={cls.input}
                    onChange={onChangeAge}
                    readonly={readonly}
                />

                <Input
                    value={data?.city}
                    placeholder={t('Ваша город')}
                    className={cls.input}
                    onChange={onChangeCity}
                    readonly={readonly}
                />

                <Input
                    value={data?.username}
                    placeholder={t('Ведите имя пользователя')}
                    className={cls.input}
                    onChange={onChangeUsername}
                    readonly={readonly}
                />

                <Input
                    value={data?.avatar}
                    placeholder={t('Введите ссылку на аватар')}
                    className={cls.input}
                    onChange={onChangeAvatar}
                    readonly={readonly}
                />
                <CurrencySelect
                    className={cls.input}
                    value={data?.currency}
                    onChange={onChangeCurrency}
                    readonly={readonly}
                />
                <CountrySelect
                    className={cls.input}
                    value={data?.country}
                    onChange={onChangeCountry}
                    readonly={readonly}
                />

            </div>
        </div>
    );
};
