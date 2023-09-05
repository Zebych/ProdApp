import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore, AppDispatch } from './config/store';
import type {
    StateSchema,
    ThunkConfig,
    ReduxStoreWithManager,
    StateSchemaKey,
} from './config/StateSchema';

export {
    StoreProvider,
    createReduxStore,
    StateSchema,
    ThunkConfig,
    ReduxStoreWithManager,
    StateSchemaKey,
};
export type { AppDispatch };
