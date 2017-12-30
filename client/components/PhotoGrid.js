import React from 'react';
import Photo from './Photo';

const PhotoGrid = React.createClass({
  render() {
    return (
      <div className="photo-grid">
        {this.props.posts.map((post, i) => <Photo {...this.props} key={i} i={i} post={post} />)}
        // this.props is an array we are gping to map over it
        // Each child should have a unique "key" prop Check the render method, illuSketchNote
      </div>
    )
  }
});
export default PhotoGrid;
