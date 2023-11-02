import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { DisplayText } from 'src/shared/ui/Text';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleAdditionalInfo.module.scss';
import { User } from '@/entities/User';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Button } from '@/shared/ui/redesigned/Button';

interface ArticleAdditionalInfoProps {
    className?: string;
    author: User;
    createdAt: string;
    views: number;
    onEdit: () => void;
}

export const ArticleAdditionalInfo = memo(
    (props: ArticleAdditionalInfoProps) => {
        const { className, author, createdAt, views, onEdit } = props;
        const { t } = useTranslation();

        return (
            <VStack
                gap="32"
                className={classNames(cls.ArticleAdditionalInfo, {}, [
                    className,
                ])}
            >
                <HStack gap="8">
                    <Avatar src={author.avatar} size={32} />
                    <DisplayText text={author.username} bold />
                    <DisplayText text={createdAt} />
                </HStack>
                <Button onClick={onEdit}>{t('Редактировать')}</Button>
                <DisplayText
                    text={t('{{count}} просмотров', { count: views })}
                />
            </VStack>
        );
    },
);
