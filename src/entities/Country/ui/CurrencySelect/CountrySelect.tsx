import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ListBox } from '@/shared/ui/Popups/ui/ListBox/ListBox';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (country: Country) => void;
    readonly?: boolean;
}

const options = [
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
    { value: Country.Ukraine, content: Country.Ukraine },
];

export const CountrySelect = memo(({
    className, value, onChange, readonly,
}: CountrySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <ListBox
            defaultValue={t('Укажите страну')}
            label={t('Укажите страну')}
            items={options}
            className={classNames('', {}, [className])}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
            direction="top right"
        />
    /*        <Select
            label={t('Укажите страну')}
            options={options}
            className={classNames('', {}, [className])}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        /> */
    );
});
