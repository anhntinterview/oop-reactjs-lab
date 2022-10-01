import { Inject, Service } from 'typedi';
import type {
    RootState,
    // UseMutionType
} from 'core/redux/app/store';
import { useAppSelector } from 'core/redux/app/hook';
// import { selectLoginResult } from 'app/redux/user/slice/selector';
import type {
    MutationTrigger,
    UseMutation,
    UseQuery,
} from '@reduxjs/toolkit/dist/query/react/buildHooks';
import { PostDTO } from 'shared/dto/post.dto';

export type UseQueryType = {
    data: Array<PostDTO> | unknown;
    isLoading: boolean;
    isFetching: boolean;
    isSuccess: boolean;
    isError: boolean;
    error: unknown;
    refetch: () => void;
};

export type UseMutaionType = {
    mutationAction: MutationTrigger<any>;
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
    isUninitialized: boolean;
};

export function useRTKQuery(useQuery: UseQuery<any>): UseQueryType {
    const { data, isLoading, isFetching, isSuccess, isError, error, refetch } =
        useQuery(undefined);
    return { data, isLoading, isFetching, isSuccess, isError, error, refetch };
}

export function useRTKMutation(useMutation: UseMutation<any>): UseMutaionType {
    const [mutationAction, { isLoading, isError, isSuccess, isUninitialized }] =
        useMutation();

    return { mutationAction, isLoading, isSuccess, isError, isUninitialized };
}

@Service()
class HttpService<B, R> {
    public useRTKQuery = useRTKQuery;
    public useRTKMutation = useRTKMutation;
}

export default HttpService;
