import React from 'react'
// import {NavLink} from 'react-router-dom'
import ReducerTrains from './../context/Trains/ReducerTrains'
import {StateTrains} from './../context/Trains/StateTrains'
import {ContextTrains} from './../context/Trains/ContextTrains'
import Filter from './../modules/Filter/Filter'
import ResultTrains from './../modules/ResultTrains/ResultTrains'


export default React.memo(() => {
	const [state, dispatch] = React.useReducer(ReducerTrains, StateTrains)

	

	return (
			<ContextTrains.Provider value={{state, dispatch}}>
				<div>
					<Filter />
					<ResultTrains />
				</div>
			</ContextTrains.Provider>
		)
})