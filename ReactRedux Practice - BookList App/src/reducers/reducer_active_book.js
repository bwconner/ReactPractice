//State arguement is not application state
//Only the state this reducer is responsible for
export default function(state = null, action) {
console.log("Action received", action);
	switch(action.type) {
		case 'BOOK_SELECTED':
		console.log(action.payload);
			return action.payload;
	}

	return state;
}