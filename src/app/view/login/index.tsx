import * as React from 'react';
import LoginModel from '../../controller/login.model';
import { LoginBodyRO } from '../../shared/interface/user.interface';
import classnames from 'classnames';
import { useGetPostsQuery } from 'core/redux/slice';
import { Loading } from 'template/component/Loading';
import { PostDTO } from 'shared/dto/post.dto';

export interface ILoginProps {
    model: LoginModel;
}

const Login: React.FunctionComponent<ILoginProps> = (props) => {
    const loginModel = new LoginModel();
    const { data, isLoading, isFetching, isSuccess, isError, error, refetch } =
        loginModel.posts;

    // const { data, isLoading, isFetching, isSuccess, isError, error, refetch } =
    //     useGetPostsQuery();

    const sortedPosts = React.useMemo(() => {
        if (Array.isArray(data)) {
            const sortedPosts = data?.slice();
            // Sort posts in descending chronological order
            sortedPosts?.sort((a: PostDTO, b: PostDTO) => b.created.localeCompare(a.created));
            return sortedPosts;
        }
    }, [data]);

    let content;

    if (isLoading) {
        content = <Loading isLoading={true} />;
    } else if (isSuccess) {
        const renderedPosts = sortedPosts?.map((post: PostDTO) => (
            <div key={post.id}>
                <p className="post-content">
                    {post.description?.substring(0, 100)}
                </p>
            </div>
        ));

        const containerClassname = classnames('posts-container', {
            disabled: isFetching,
        });

        content = <div className={containerClassname}>{renderedPosts}</div>;
    } else if (isError) {
        content = <div>{error?.toString()}</div>;
    }

    return (
        <>
            <h1>
                Welcome come to APPLICATION! Please Login to access the system.
            </h1>
            {/* <button onClick={props.model.fetchPosts}>Login</button> */}
            {content}
        </>
    );
};

export default Login;
