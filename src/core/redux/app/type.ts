import { STATUS } from '../../../core/redux/app/constant';
import { UseMutation } from '@reduxjs/toolkit/dist/query/react/buildHooks';
import {
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError,
    FetchBaseQueryMeta,
    MutationDefinition,
} from '@reduxjs/toolkit/dist/query/react';

export class RTKQStateItemDTO<T> {
    readonly [name: string]: T;
}

export class RTKQStateDTO<T> {
    readonly list!: Array<T>;
    readonly count!: number;
}

export class StateDTO<T> {
    readonly data!: { list: Array<T>; count: number };
    readonly status!: STATUS;
    readonly error?: any;
}

// B: PostBody
// S: PostResponse

// export type UseMutionType<B, R> = UseMutation<
//     MutationDefinition<
//         B,
//         BaseQueryFn<
//             string | FetchArgs,
//             unknown,
//             FetchBaseQueryError,
//             {},
//             FetchBaseQueryMeta
//         >,
//         'Posts' | 'Users'| 'Events',
//         R,
//         'api'
//     >
// >;
