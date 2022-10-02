import * as React from "react";
import { BaseComponent } from "core/component/base";
import Post from "app/view/post";
import PostModel from "app/controller/post.model";
import { IPostProps } from "app/view/post";

class PostPage extends BaseComponent({
  style: {},
  model: new PostModel(),
})<IPostProps> {
  baseElement = () => <Post model={this.props.model} />;
}

export default PostPage;
