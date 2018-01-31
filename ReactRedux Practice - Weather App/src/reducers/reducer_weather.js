import {FETCH_WEATHER} from "../actions/index"

export default function(state = [], action) {
	switch(action.type) {
		case FETCH_WEATHER:
			//return state.concat([action.payload.data]);
			return [action.payload.data, ...state]; //ES6 alternative to above line to create new array with new added data at start of array
	}
	return state;
}