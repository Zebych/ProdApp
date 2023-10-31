import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { DisplayText } from '@/shared/ui/redesigned/Text';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { UiDesignSwitcher } from '@/features/uiDesignSwitcher';

const SettingsPage = memo(() => {
    const { t } = useTranslation();

    return (
        <Page>
            <VStack gap="16">
                <DisplayText title={t('Настройки пользователя')} />
                <UiDesignSwitcher />
            </VStack>
        </Page>
    );
});

export default SettingsPage;
