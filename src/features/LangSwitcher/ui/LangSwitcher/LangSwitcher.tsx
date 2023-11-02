import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';

import { Button } from '@/shared/ui/Button';

interface LangSwitcherProps {
    short?: boolean;
}

export const LangSwitcher = memo(({ short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button variant="clear" onClick={toggle}>
            {t(short ? 'Короткий язык' : 'Язык')}
        </Button>
    );
});
