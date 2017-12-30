import React from 'react';
import Photo from './Photo';
// import Comments from './Comments';
// I don't want comments or likes on Lilliangram

const Single = React.createClass({
  render() {
    const { postId } = this.props.params;
    // index of the post below
    const i = this.props.posts.findIndex((post) => post.code === postId);
    // console.log(i);
    // Get us the post
    const post = this.props.posts[i];
    // console.log(post);

    const postComments = this.props.comments[postId] || [];
    // video 14 it will allow us to loop over nothing const postComments = this.props.comments[postId] || [];


    return (
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props} />
        // <Comments postComments={postComments} />
        // I don't want comments or likes on Lilliangram
      </div>
    )
  }
});

export default Single;
