import * as React from 'react';
import classnames from 'classnames';
import { PostDTO } from 'shared/dto/post.dto';

export interface IPostProps {
    data: Array<any>;
    isFetching: boolean;
}

export interface IPostErrorProps {
    error: any;
}

export const Posts: React.FunctionComponent<IPostProps> = (props) => {
    const { data, isFetching } = props;

    const sortedPosts = React.useMemo(() => {
        const sortedPosts = data?.slice();
        // Sort posts in descending chronological order
        sortedPosts?.sort((a: PostDTO, b: PostDTO) =>
            b.created.localeCompare(a.created)
        );
        return sortedPosts;
    }, [data]);

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

    return <div className={containerClassname}>{renderedPosts}</div>;
};

export const PostError: React.FunctionComponent<IPostErrorProps> = (props) => {
    const { error } = props;
    return <div>{error?.toString()}</div>;
};