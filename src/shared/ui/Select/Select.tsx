import { ChangeEvent, useMemo } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOptions<T extends string> {
    value: T;
    content: string;
}

interface SelectProps<T extends string> {
    className?: string;
    label?: string | null;
    options?: SelectOptions<T>[];
    value?: T;
    onChange?: (value: T) => void;
    readonly?: boolean;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
    const { className, label, options, value, onChange, readonly } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T);
    };

    const optionsList = useMemo(
        () =>
            options?.map((opt) => (
                <option
                    key={opt.value}
                    className={cls.option}
                    value={opt.value}
                >
                    {opt.content}
                </option>
            )),
        [options],
    );

    const mods: Mods = {};

    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {label && <div className={cls.label}>{`${label}>`}</div>}

            <select
                value={value}
                onChange={onChangeHandler}
                className={cls.select}
                disabled={readonly}
            >
                {optionsList}
            </select>
        </div>
    );
};
