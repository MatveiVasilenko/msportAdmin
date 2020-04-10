import React from 'react'
import {ContextTrains} from '../../context/Trains/ContextTrains'


export default React.memo(() => {
	const {state} = React.useContext(ContextTrains)

	let trains = state.trains.filter(t => t.date.substring(0,4) == state.year)
	trains = trains.filter(t => t.date.substring(5,7) == state.mounth)
	console.log(trains)

	return (
			trains.map((train, index) => {
				return <div key={index}>{train.sportsmens}</div>
			})
		)
})