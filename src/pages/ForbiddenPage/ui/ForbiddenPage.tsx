import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgests/Page/Page';

const ForbiddenPage = () => {
    const { t } = useTranslation('forbidden-page');

    return (
        <Page>
            {t('У вас нет доступа к этой странице')}
        </Page>
    );
};

export default ForbiddenPage;
