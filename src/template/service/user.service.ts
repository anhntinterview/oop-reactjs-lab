import { Container, Service } from 'typedi';
import HttpService from '../../core/service/http.service';

@Service()
class UserService {
    protected httpService = Container.get(HttpService);

    public getUser() {}

    public getUsers() {}

    // public login = async (loginBody: LoginBodyRO) => {
    //     // await this.httpService.withUseMutation?.execUseMutationResult(coreSliceApi.useLoginMutation, loginBody)
    // };

    // public loginStatus = () =>
    //     this.httpService.withUseMutation?.useMutationStatus;

    // public get loginResult() {
    //     return {}
    //     // return this.httpService.withUseMutation?.useMutationResult;
    // }

    // public get token() {
    //     return;
    // }

    // public logout = () => {};

    constructor() {}
}

export default UserService;
