import { Container } from 'typedi';
import PostService from 'template/service/post.service';
import { useGetPostsQuery } from 'core/redux/slice';

export default class PostModel {
    public readonly postService = Container.get(PostService);

    public get posts() {
        return this.postService.posts(useGetPostsQuery);
    }

    constructor() {}
}
