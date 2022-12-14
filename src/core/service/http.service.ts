import { Service } from 'typedi';
import { UseQuery, UseMutation } from "core/redux/type";

 function useRTKQuery<R>(useQuery: UseQuery<R>) {
    const { data, isLoading, isFetching, isSuccess, isError, error, refetch } =
        useQuery(undefined);
    return { data, isLoading, isFetching, isSuccess, isError, error, refetch };
}

export function useRTKMutation<B>(useMutation: UseMutation<B>) {
    const [mutationAction, { isLoading, isError, isSuccess, isUninitialized }] =
        useMutation();

    return { mutationAction, isLoading, isSuccess, isError, isUninitialized };
}

@Service()
class HttpService {
    public queryAPI = useRTKQuery
    public mutationAPI = useRTKMutation;
}

export default HttpService;
