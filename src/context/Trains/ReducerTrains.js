const ReducerTrains = (state, action) => {
	switch (action.type) {
		case "FIND_TRAINS":
			state.trains = action.payload
		return state
		case "FIND_YEAR":				
		return {
			...state,
			year: action.payload.year
		}	
		case "FIND_MOUNTH":					
		return {
			...state,
			mounth: action.payload.mounth
		}			
		
		default: 
		return state
	}
}
export default ReducerTrains;