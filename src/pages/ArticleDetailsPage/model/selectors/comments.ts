import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticleCommentIsLoading = (state: StateSchema) => {
    return state.articlesDetailsPage?.comments?.isLoading;
};

export const getArticleCommentError = (state: StateSchema) => {
    return state.articlesDetailsPage?.comments?.error;
};
