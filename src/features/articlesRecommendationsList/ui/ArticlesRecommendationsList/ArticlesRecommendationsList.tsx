import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { TextComponent, TextSize } from '@/shared/ui/deprecated/Text';
import { VStack } from '@/shared/ui/deprecated/Stack';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleList } from '@/entities/Article';
import { useArticlesRecommendationsList } from '../../api/articleRecommendationsApi';

interface ArticlesRecommendationsListProps {
    className?: string;
}

export const ArticlesRecommendationsList = memo(
    (props: ArticlesRecommendationsListProps) => {
        const { className } = props;
        const { t } = useTranslation();
        const {
            isLoading,
            data: articles,
            error,
        } = useArticlesRecommendationsList(3);

        if (isLoading || error || !articles) {
            return null;
        }

        return (
            <VStack
                data-testid="ArticlesRecommendationsList"
                gap="8"
                className={classNames('', {}, [className])}
            >
                <TextComponent size={TextSize.L} text={t('Рекомендуем')} />
                <ArticleList articles={articles} target="_blank" />
            </VStack>
        );
    },
);
