import _ from "lodash";
import {FETCH_POST, FETCH_POSTS, DELETE_POST} from "../actions";
import {} from "../actions";

export default function (state = {}, action) {
	switch (action.type) {
		case FETCH_POST:
			//const post = action.payload.data;
			//const newState = {...state};
			//newState[post.id] = post;
			//return newState;
			//Can be shortened to:
			return {...state, [action.payload.data.id]: action.payload.data};
		case FETCH_POSTS:
			return _.mapKeys(action.payload.data, "id");
		case DELETE_POST:
			return _.omit(state, action.payload);
		default:
			return state;
	}
}