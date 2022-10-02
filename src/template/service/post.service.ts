import { Container, Service } from 'typedi';
import HttpService from '../../core/service/http.service';
import type { UseQuery, UseMutation } from "core/redux/app/_type";

@Service()
class PostService<B, R, Q extends UseQuery<R>, M extends UseMutation<B>> {
    protected httpService = Container.get(HttpService);

    public posts(useQuery: Q) {
        return this.httpService.queryAPI(useQuery)
    }
}

export default PostService;
