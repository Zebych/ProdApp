import React, { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { LoginModal } from '@/features/AuthByUsername';
import { HStack } from '@/shared/ui/redesigned/Stack';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { AppLink, AppLinkTheme } from '@/shared/ui/deprecated/AppLink';
import { TextComponent, TextTheme } from '@/shared/ui/deprecated/Text';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getUserAuthData } from '@/entities/User';
import { NotificationButton } from '@/features/notificationButton';
import { AvatarDropdown } from '@/features/avatarDropdawn';
import cls from './Navbar.module.scss';
import { getRouteArticleCreate } from '@/shared/const/router';
import { toggleFeatures, ToggleFeatures } from '@/shared/lib/features';
import { Button } from '@/shared/ui/redesigned/Button';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const mainClass = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => cls.NavbarRedesigned,
        off: () => cls.Navbar,
    });

    if (authData) {
        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <header className={classNames(mainClass, {}, [className])}>
                        <HStack gap="16" className={cls.actions}>
                            <NotificationButton />
                            <AvatarDropdown />
                        </HStack>
                    </header>
                }
                off={
                    <header className={classNames(mainClass, {}, [className])}>
                        <TextComponent
                            className={cls.appName}
                            title={t('ProdApp')}
                            theme={TextTheme.INVERTED}
                        />

                        <AppLink
                            className={cls.createBtn}
                            to={getRouteArticleCreate()}
                            theme={AppLinkTheme.SECONDARY}
                        >
                            {t('Создать статью')}
                        </AppLink>
                        <HStack gap="16" className={cls.actions}>
                            <NotificationButton />
                            <AvatarDropdown />
                        </HStack>
                    </header>
                }
            />
        );
    }

    return (
        <header className={classNames(mainClass, {}, [className])}>
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <Button
                        variant="clear"
                        className={cls.links}
                        onClick={onShowModal}
                    >
                        {t('Войти')}
                    </Button>
                }
                off={
                    <ButtonDeprecated
                        theme={ButtonTheme.CLEAR_INVERTED}
                        className={cls.links}
                        onClick={onShowModal}
                    >
                        {t('Войти')}
                    </ButtonDeprecated>
                }
            />

            {isAuthModal && (
                <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
            )}
        </header>
    );
});
