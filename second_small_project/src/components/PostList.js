import React from 'react';
import { connect } from 'react-redux';
import  {fetchPost} from '../actions';
import UserName from './PostUser';

class PostList extends React.Component{
    componentDidMount(){
        this.props.fetchPost();
    }

    renderList(){
        return this.props.posts.map((post)=>{
            return (
                <div className="jumbotron row" key={post.id}>
                    <div className="col-3">
                        ...
                    </div>
                    <div className="col-9">
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                        <UserName userId={post.userId}/>
                    </div>
                </div>
            );
        })
    }
    render(){
        return <div>{this.renderList()}</div>;
    }
}

const mapStateToProps = state => {
    return { posts: state.posts };
  };

export default connect(mapStateToProps,{fetchPost})(PostList);