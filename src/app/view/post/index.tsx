import * as React from 'react';
import PostModel from 'app/controller/post.model';
import { Posts, PostError } from 'app/components/Post';
import { Loading } from 'template/component/Loading';

export interface IPostProps {
    model: PostModel;
}

const Post: React.FunctionComponent<IPostProps> = (props) => {
    const { model } = props;
    const { data, isLoading, isFetching, isSuccess, isError, error, refetch } =
        model.posts;

    let content;

    if (isLoading) {
        content = <Loading isLoading={true} />;
    } else if (isSuccess) {
        if (Array.isArray(data)) {
            content = <Posts data={data} isFetching={isFetching} />;
        }
    } else if (isError) {
        content = <PostError error={error} />;
    }

    return (
        <>
            <h1>Post List:</h1>
            {content}
        </>
    );
};

export default Post;
