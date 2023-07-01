import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgests/Page/Page';

const AdminPanelPage = () => {
    const { t } = useTranslation('admin-panel');

    return (
        <Page>
            {t('Админ панель')}
        </Page>
    );
};

export default AdminPanelPage;
