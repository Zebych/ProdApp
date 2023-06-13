import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { initArticlesPage } from './initArticlesPage';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('initArticlesPage.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                page: 1,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: true,
                _inited: false,
            },
        });

        await thunk.callThunk();

        // Проверить что экшен запустился 4 раза pending,fullField, + 2 dispatch  внутри самого экшена
        expect(thunk.dispatch).toBeCalledTimes(4);
        // Проверить что функция была вызвана с нужным аргументом
        expect(fetchArticlesList).toHaveBeenCalledWith({ page: 1 });
    });
    test('initArticlesPage not called', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                page: 1,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: true,
                _inited: true,
            },
        });

        await thunk.callThunk();

        // Проверить что функция не была вызвана
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
});
