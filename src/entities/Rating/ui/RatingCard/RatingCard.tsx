import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserView, MobileView } from 'react-device-detect';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Card } from '@/shared/ui/Card/Card';
import { TextComponent } from '@/shared/ui/Text/TextComponent';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { Modal } from '@/shared/ui/Modal/Modal';
import { Input } from '@/shared/ui/Input/Input';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button';
import { Drawer } from '@/shared/ui/Drawer/Drawer';

interface RatingCardProps {
    className?: string;
    title?: string | null;
    feedbackTitle?: string | null;
    hasFeedback?: boolean;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
    rate?: number;
}

export const RatingCard = memo((props: RatingCardProps) => {
    const {
        className,
        title,
        feedbackTitle,
        hasFeedback,
        onCancel,
        onAccept,
        rate = 0,
    } = props;
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(rate);
    const [feedback, setFeedback] = useState('');

    const onSelectStars = useCallback((selectedStarsCount: number) => {
        setStarsCount(selectedStarsCount);
        if (hasFeedback) {
            setIsModalOpen(true);
        } else {
            onAccept?.(selectedStarsCount);
        }
    }, [hasFeedback, onAccept]);

    const acceptHandle = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(starsCount, feedback);
    }, [feedback, onAccept, starsCount]);

    const cancelHandle = useCallback(() => {
        setIsModalOpen(false);
        onCancel?.(starsCount);
    }, [onCancel, starsCount]);

    const modalContent = (
        <>
            <TextComponent title={feedbackTitle} />
            <Input value={feedback} onChange={setFeedback} placeholder={t('Ваш отзыв')} />
        </>
    );

    return (
        <Card className={className} max>
            <VStack align="center" gap="8" max>
                <TextComponent title={starsCount ? t('Спасибо за оценку') : title} />
                <StarRating selectedStars={starsCount} size={40} onSelect={onSelectStars} />
                <BrowserView>
                    <Modal isOpen={isModalOpen} lazy>
                        <VStack max gap="32">
                            {modalContent}
                            <HStack max gap="16" justify="end">
                                <Button onClick={cancelHandle} theme={ButtonTheme.OUTLINE_RED}>
                                    {t('Закрыть')}
                                </Button>
                                <Button onClick={acceptHandle} theme={ButtonTheme.OUTLINE_RED}>
                                    {t('Отправить')}
                                </Button>
                            </HStack>
                        </VStack>
                    </Modal>
                </BrowserView>
                <MobileView>
                    <Drawer isOpen={isModalOpen} lazy onClose={cancelHandle}>
                        {modalContent}
                        <VStack max gap="32">
                            <Button fullWidth onClick={acceptHandle} theme={ButtonTheme.OUTLINE_RED} size={ButtonSize.L}>
                                {t('Отправить')}
                            </Button>
                        </VStack>
                    </Drawer>
                </MobileView>

            </VStack>
        </Card>
    );
});