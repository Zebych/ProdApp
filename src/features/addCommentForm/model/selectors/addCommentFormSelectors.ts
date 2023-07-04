import { StateSchema } from '@/app/providers/StoreProvider';

// ?? - если левая часть === null || undefined то сработает правая ( обработка случая если state.addCommentForm?.text === 0 || false...)
export const getAddCommentFormText = (state: StateSchema) => state.addCommentForm?.text ?? '';
export const getAddCommentFormError = (state: StateSchema) => state.addCommentForm?.error;
