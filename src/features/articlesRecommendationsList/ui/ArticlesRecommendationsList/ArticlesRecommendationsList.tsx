import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { TextComponent, TextSize } from '@/shared/ui/Text/TextComponent';
import { ArticleList } from '@/entities/Article';
import { VStack } from '@/shared/ui/Stack';
import { useArticlesRecommendationsList } from '../../api/articleRecommendationsApi';

interface ArticlesRecommendationsListProps {
    className?: string;
}

export const ArticlesRecommendationsList = memo((props: ArticlesRecommendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { isLoading, data: articles, error } = useArticlesRecommendationsList(3);

    if (isLoading || error || !articles) {
        return null;
    }

    return (
        <VStack gap="8" className={classNames('', {}, [className])}>
            <TextComponent
                size={TextSize.L}
                text={t('Рекомендуем')}
            />
            <ArticleList
                articles={articles}
                target="_blank"
            />
        </VStack>
    );
});
