import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { VStack } from '@/shared/ui/redesigned/Stack';
import cls from './LoginModalSkeleton.module.scss';

export const LoginModalSkeleton = memo(() => {
    return (
        <VStack gap="16" className={classNames(cls.LoginModalSkeleton, {}, [])}>
            <Skeleton width="200px" height={16} border="8px" />
            <Skeleton width="100%" height={38} border="48px" />
            <Skeleton width="100%" height={38} border="48px" />
            <Skeleton
                width={80}
                height={38}
                border="48px"
                className={cls.loginBtn}
            />
        </VStack>
    );
});
