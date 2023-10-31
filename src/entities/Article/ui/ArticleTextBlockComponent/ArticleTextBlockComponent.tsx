import { memo } from 'react';
import { TextComponent } from '@/shared/ui/deprecated/Text';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleTextBlockComponent.module.scss';
import { ArticleTextBlock } from '../../model/types/article.types';
import { ToggleFeatures } from '@/shared/lib/features';
import { DisplayText } from '@/shared/ui/redesigned/Text';

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(
    (props: ArticleTextBlockComponentProps) => {
        const { className, block } = props;

        return (
            <div
                className={classNames(cls.ArticleTextBlockComponent, {}, [
                    className,
                ])}
            >
                {block.title && (
                    <ToggleFeatures
                        feature="isAppRedesigned"
                        on={
                            <DisplayText
                                title={block.title}
                                className={cls.title}
                            />
                        }
                        off={
                            <TextComponent
                                title={block.title}
                                className={cls.title}
                            />
                        }
                    />
                )}
                {block.paragraphs.map((paragraph) => (
                    <ToggleFeatures
                        feature="isAppRedesigned"
                        on={
                            <DisplayText
                                key={paragraph}
                                text={paragraph}
                                className={cls.paragraph}
                            />
                        }
                        off={
                            <TextComponent
                                key={paragraph}
                                text={paragraph}
                                className={cls.paragraph}
                            />
                        }
                    />
                ))}
            </div>
        );
    },
);
