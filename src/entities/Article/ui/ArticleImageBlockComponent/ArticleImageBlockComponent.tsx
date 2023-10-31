import { memo } from 'react';
import { TextAlign, TextComponent } from '@/shared/ui/deprecated/Text';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleImageBlock } from '../../model/types/article.types';
import cls from './ArticleImageBlockComponent.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { DisplayText } from '@/shared/ui/redesigned/Text';

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(
    (props: ArticleImageBlockComponentProps) => {
        const { className, block } = props;

        return (
            <div
                className={classNames(cls.ArticleImageBlockComponent, {}, [
                    className,
                ])}
            >
                <img src={block.src} alt={block.title} className={cls.img} />
                {block.title && (
                    <ToggleFeatures
                        feature="isAppRedesigned"
                        on={<DisplayText text={block.title} align="center" />}
                        off={
                            <TextComponent
                                text={block.title}
                                align={TextAlign.CENTER}
                            />
                        }
                    />
                )}
            </div>
        );
    },
);
