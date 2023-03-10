import React from 'react';
import MyPosts from './MyPosts.jsx';

class MyPostConnect extends React.Component {
  componentDidMount() {
    const { getAllPosts, token } = this.props;
    getAllPosts(token);
  }

  addNewPost = (textForNewPage) => {
    const {
      addPost, token,
    } = this.props;
    addPost(textForNewPage, token);
  };

  render() {
    const { posts, ava } = this.props;
    return (
      <MyPosts addNewPost={this.addNewPost} posts={posts} ava={ava} />
    );
  }
}
export default MyPostConnect;
