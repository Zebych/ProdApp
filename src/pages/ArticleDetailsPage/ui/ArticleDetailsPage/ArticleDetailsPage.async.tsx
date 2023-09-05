import { lazy } from 'react';

// export const ArticleDetailsPage = lazy(() => import('./ArticleDetailsPage'))
export const ArticleDetailsPageAsync = lazy(
    () =>
        new Promise((resolve) => {
            // @ts-ignore
            setTimeout(() => resolve(import('./ArticleDetailsPage')), 400);
        }),
);
