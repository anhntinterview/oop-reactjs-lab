import { Container } from 'typedi';
import { validateSync, ValidationError } from 'class-validator';
import { LoginBodyRO } from 'shared/interface/user.interface';
import UserService from 'template/service/user.service';
import { useGetPostsQuery } from 'core/redux/slice';
import { useMemo } from 'react';
import classnames from 'classnames';
import { Loading } from 'template/component/Loading';
import { PostDTO } from 'shared/dto/post.dto';
import { UseQuery } from 'core/redux/app/_type';

function sortPosts(loginModel: LoginModel) {
    const data: Array<PostDTO> | unknown = loginModel.posts.data;
    console.log(data);

    if (Array.isArray(data)) {
        const sortedPosts = data.slice();
        // Sort posts in descending chronological order
        sortedPosts?.sort((a: PostDTO, b: PostDTO) =>
            b.created.localeCompare(a.created)
        );
        return sortedPosts;
    }
}

// export const PostLoading: React.FunctionComponent = () => {
//     return <Loading isLoading={true} />
// };

// export const Post: React.FunctionComponent<ILoginProps> = (props) => {
//     const loginModel = props.model;
//     const isFetching: boolean = loginModel.posts.isFetching;
//     const isLoading: boolean = loginModel.posts.isLoading;
//     const isSuccess: boolean = loginModel.posts.isSuccess;
//     const error: unknown = loginModel.posts.data;
//     if(isLoading) {
//         return <PostLoading />
//     } else if (isSuccess) {
//         if (Array.isArray(sortPosts)) {
//             const renderedPosts = sortPosts(loginModel)?.map((post) => (
//                 <div key={post.id}>
//                     <p className="post-content">
//                         {post.description?.substring(0, 100)}
//                     </p>
//                 </div>
//             ));

//             const containerClassname = classnames('posts-container', {
//                 disabled: isFetching,
//             });

//             return <div className={containerClassname}>{renderedPosts}</div>;
//         }
//     } else

// }

// export function postError(loginModel: LoginModel) {

//     if (typeof error === 'string') {
//         return <div>{error.toString()}</div>;
//     }
// }

export default class LoginModel {
    public readonly userService = Container.get(UserService);

    // public get isLogin() {
    //     return;
    // }
    // public loginBodyDto: LoginBodyRO = {
    //     user: { username: 'robert@cnbc.com', password: '1' },
    // };

    // public login = () => {
    //     this.userService.login(this.loginBodyDto);
    // };

    // public loginResult = () => {
    //     return this.userService.loginResult;
    // };

    public get posts() {
        return this.userService.posts(useGetPostsQuery);
    }

    constructor() {}
}
