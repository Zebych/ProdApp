import { FC, lazy } from 'react';
import { LoginFormProps } from './LoginForm';

// export const AdminPanelPageAsync = lazy(() => import('./AdminPanelPage'))
export const LoginFormAsync = lazy<FC<LoginFormProps>>(
    () =>
        new Promise((resolve) => {
            // @ts-ignore
            setTimeout(() => resolve(import('./LoginForm')), 1500);
        }),
);
