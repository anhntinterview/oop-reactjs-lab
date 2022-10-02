import * as React from 'react';
import PostModel from '../../controller/post.model';
import { Loading } from 'template/component/Loading';
import { Posts, PostError } from 'app/components/Post';

export interface IPostProps {
    model: PostModel;
}

const Post: React.FunctionComponent<IPostProps> = (props) => {
    const postModel = new PostModel();
    const { data, isLoading, isFetching, isSuccess, isError, error, refetch } =
        postModel.posts;

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
            <h1>
                Post List:
            </h1>
            {content}
        </>
    );
};

export default Post;
