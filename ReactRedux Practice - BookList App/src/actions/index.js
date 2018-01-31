export function selectBook(book) {	
	//select book is an ActionCreator, it needs to return an action,
	//an object with a type property
	return {
		type: 'BOOK_SELECTED', //describes purpose of the action
		payload: book //clarifies conditons of action being triggered
	};
}