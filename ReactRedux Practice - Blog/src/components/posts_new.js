import React, {Component} from "react";
import {Field, reduxForm} from "redux-form";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {createPost} from "../actions";

const FIELDS = {
	"title": {
		type: "input",
		label: "Title:"
	},
	"categories": {
		type: "input",
		label: "Categories:"
	},
	"content": {
		type: "textarea",
		label: "Post Content:"
	}
}

class PostsNew extends Component {

	renderInputField(field) {
		const {meta: {touched, error}} = field;
		const className = `form-group ${touched && error ? "has-danger" : ""}`;

		return (
			<div className={className}>
				<label>
					{field.label}
				</label>
				<input
					className="form-control"
					type="text"
					{...field.input}
				/>
				<div className="text-help">
					{touched ? error : ""}
				</div>
			</div>
		);
	}

	onSubmit(values) {
		this.props.createPost(values, ()=> {
			this.props.history.push("/");
		});
	}

	render() {

		const {handleSubmit} = this.props;

		return (
			//
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<Field
					name="title"
					label="Title:"
					component={this.renderInputField}
				/>
				<Field
					name="categories"
					label="Categories:"
					component={this.renderInputField}
				/>
				<Field
					name="content"
					label="Content:"
					component={this.renderInputField}
				/>
				<button type="submit" className="btn btn-primary">
					Submit
				</button>
				<Link className="btn btn-danger btn-cancel" to="/" >
					Cancel
				</Link>
			</form>
		);
	}
}

function validate(values) {
	const errors = {};

	//Validate the inputs from values
	/*
	if (!values.title) {
		errors.title = "Please enter a title!";
	}

	if (!values.categories) {
		errors.categories = "Please enter categorie(s)!";
	}

	if (!values.content) {
		errors.content = "Please enter content!";
	}
	*/

	//Dynamic Fields Refactor
	_.each(FIELDS, (type, field) => {
		if (!values[field]) {
			errors[field] = `Please enter a valid ${field}!`;
		}		
	});

	//If errors is empty, the form is validated and can be submitted
	//If errors has any properties, it is assumed form is invalid.
	return errors;
}

export default reduxForm({
	validate,
	form: "PostsNewForm",
	fields: _.keys(FIELDS)
})(
	connect(null, {createPost})(PostsNew)
);