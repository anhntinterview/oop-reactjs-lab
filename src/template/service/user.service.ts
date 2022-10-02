import { Container, Service } from 'typedi';
import { coreSliceApi } from '../../core/redux/slice';
// import { useLoginMutation } from '../../redux/user/slice';
import type {
    LoginBodyRO,
    UserRO,
} from '../../shared/interface/user.interface';
import { useGetPostsQuery } from 'core/redux/slice';
import HttpService from '../../core/service/http.service';
import { PostDTO } from 'shared/dto/post.dto';
import type { UseQuery, UseMutation } from "core/redux/app/_type";

@Service()
class UserService<B, R, Q extends UseQuery<R>, M extends UseMutation<B>> {
    protected httpService = Container.get(HttpService);

    public posts(useQuery: Q) {
        return this.httpService.queryAPI(useQuery)
    }
}

// @Service()
// class UserService<LoginBodyRO, UserRO> {
//     protected httpService = Container.get(HttpService<LoginBodyRO, UserRO>);

//     public getUser() {}

//     public getUsers() {}

//     public get posts() {
//         return this.httpService.useRTKQuery(useGetPostsQuery);
//     };

//     // public login = async (loginBody: LoginBodyRO) => {
//     //     // await this.httpService.withUseMutation?.execUseMutationResult(coreSliceApi.useLoginMutation, loginBody)
//     // };

//     // public loginStatus = () =>
//     //     this.httpService.withUseMutation?.useMutationStatus;

//     // public get loginResult() {
//     //     return {}
//     //     // return this.httpService.withUseMutation?.useMutationResult;
//     // }

//     // public get token() {
//     //     return;
//     // }

//     // public logout = () => {};

//     constructor() {}
// }

export default UserService;
