import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleCommentIsLoading = (state:StateSchema) => state.articleDetailsComment?.isLoading;
export const getArticleCommentError = (state:StateSchema) => state.articleDetailsComment?.error;
