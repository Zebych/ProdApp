import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { TextComponent } from 'shared/ui/Text/TextComponent';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './ArticleListItem.module.scss';
import {
    Article,
    ArticleBlockType,
    ArticleTextBlock,
    ArticleView,
} from '../../model/types/article.types';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const { className, article, view } = props;
    const { t } = useTranslation();
    const navigate = useNavigate();

    const onOpenArticle = useCallback(() => {
        navigate(RoutePath.article_details + article.id);
    }, [article.id, navigate]);

    const types = <TextComponent text={article.type.join(', ')} className={cls.types} />;
    const views = (
        <>
            <TextComponent text={String(article.views)} className={cls.views} />
            <Icon Svg={EyeIcon} />
        </>
    );
    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlock;

        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card>
                    <div className={cls.header}>
                        <Avatar size={30} src={article.user.avatar} />
                        <TextComponent text={article.user.username} className={cls.username} />
                        <TextComponent text={article.createdAt} className={cls.date} />
                    </div>

                    <TextComponent text={article.title} className={cls.title} />
                    {types}
                    <img src={article.img} alt={article.title} className={cls.img} />
                    {textBlock && (
                        <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />
                    )}

                    <div className={cls.footer}>
                        <Button
                            onClick={onOpenArticle}
                            theme={ButtonTheme.OUTLINE}
                        >
                            {t('Читать далее...')}
                        </Button>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div
            className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
        >
            <Card onClick={onOpenArticle}>
                <div className={cls.imageWrapper}>
                    <img src={article.img} className={cls.img} alt={article.title} />
                    <TextComponent text={article.createdAt} className={cls.date} />
                </div>
                <div className={cls.infoWrapper}>
                    {types}
                    {views}
                </div>
                <TextComponent text={article.title} className={cls.title} />
            </Card>
        </div>
    );
});
