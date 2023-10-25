import { memo, Suspense, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { TextComponent, TextSize } from '@/shared/ui/deprecated/Text';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AddCommentForm } from '@/features/addCommentForm';
import { CommentList } from '@/entities/Comment';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import cls from '../ArticleDetailsPage/ArticleDetailsPage.module.scss';
import { getArticleComments } from '../../model/slice/articleDetailsCommentsSlice';
import { getArticleCommentIsLoading } from '../../model/selectors/comments';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { Loader } from '@/shared/ui/deprecated/Loader';

interface ArticleDetailsCommentsProps {
    className?: string;
    id?: string;
}

export const ArticleDetailsComments = memo(
    (props: ArticleDetailsCommentsProps) => {
        const { className, id } = props;
        const { t } = useTranslation();
        const dispatch = useAppDispatch();

        const comments = useSelector(getArticleComments.selectAll);
        const commentsIsLoading = useSelector(getArticleCommentIsLoading);

        useInitialEffect(() => {
            dispatch(fetchCommentsByArticleId(id));
        });

        const onSendComment = useCallback(
            (text: string) => {
                dispatch(addCommentForArticle(text));
            },
            [dispatch],
        );

        return (
            <VStack gap="16" max className={classNames('', {}, [className])}>
                <TextComponent
                    size={TextSize.L}
                    className={cls.commentTitle}
                    text={t('Комментарий')}
                />
                <Suspense fallback={<Loader />}>
                    <AddCommentForm onSendComment={onSendComment} />
                </Suspense>
                <CommentList
                    isLoading={commentsIsLoading}
                    comments={comments}
                />
            </VStack>
        );
    },
);
