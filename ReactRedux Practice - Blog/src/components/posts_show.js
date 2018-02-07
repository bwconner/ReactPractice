import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchPost, deletePost} from "../actions";
import {Link} from "react-router-dom";


class PostsShow extends Component {

	componentDidMount() {
		//Check if posts data already exists, if it does don't refetch and use present data for this post
		if (!this.props.post) {
			//const postId = this.props.match.paramas.id;
			const {id} = this.props.match.params; //Destructured version of above line
			this.props.fetchPost(id);
		}
	}

	onDeleteClick() {
		console.log(this.props);
		const {id} = this.props.match.params;
		this.props.deletePost(id, ()=> {
			this.props.history.push("/");
		});
	}

	render() {
		const {post} = this.props;

		if (!post) {
			return (
				<div>Loading...</div>
			);
		}

		return(
			<div>
				<Link className="" to="/" >
					Back to Home
				</Link>
				<button 
					onClick={this.onDeleteClick.bind(this)} 
					className="btn btn-danger pull-xs-right">
					Delete Post
				</button>
				<h3>{post.title}</h3>
				<h6>Categories: {post.categories}</h6>
				<p>{post.content}</p>
			</div>

		);
	}
}

function mapStateToProps({posts}, ownProps) {
	return{post: posts[ownProps.match.params.id]};
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostsShow);