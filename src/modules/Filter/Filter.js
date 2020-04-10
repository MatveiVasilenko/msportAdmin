import React from 'react'
import Select from './../../components/Select'
import {ContextTrains} from '../../context/Trains/ContextTrains'
// import {NavLink} from 'react-router-dom'
import {DATA, BD} from '../../data'

export default React.memo(() => {
	const {dispatch} = React.useContext(ContextTrains)
	const [active, setActive] = React.useState(true)
	const [year, setYear] = React.useState("Год")
	const [mounth, setMounth] = React.useState("Месяц")

	const selectLider = (e) => {
		let liderId = e.target.value
		if (Number(liderId) !== 0) {
			const trains = BD.trains.filter(p => p.liders_id == liderId)
			dispatch({
				type: "FIND_TRAINS",
				payload: trains
			})
			setActive(false)
			setYear("Год")
			setMounth("Месяц")

			dispatch({
				type: "FIND_YEAR",
				payload: {
					year: ''
				}
			})
			dispatch({
			type: "FIND_MOUNTH",
			payload: {
					mounth: ''
				}
			})
		} else {
			setActive(true)
		}
	}

	const selectYear = (e) => {
		let year = e.target.value
		setYear(year)
		dispatch({
			type: "FIND_YEAR",
			payload: {
				year
			}
		})
	}

	const selectMounth = (e) => {
		let mounth = e.target.value
		setMounth(mounth)
		dispatch({
			type: "FIND_MOUNTH",
			payload: {
				mounth
			}
		})
	}

	return (
			<div>
			{/*Liders Select*/}
				<Select onChange={selectLider}>
					<option value={0}>Тренер</option>
					{BD.liders.map((lider, index) => {
						return (
								<option 
									key={index}
									value={lider.id}
									>
									{lider.name}
								</option>
							)
					})}
				</Select>
			{/*Year Select*/}
				<Select value={year} disabled={active} onChange={selectYear}>
					<option value={0}>Год</option>
					{DATA.years.map((year, index) => {
						return (
								<option 
									key={index}
									value={year}
									>
									{year}
								</option>
							)
					})}
				</Select>
			{/*Mounth Select*/}
				<Select value={mounth} disabled={active} onChange={selectMounth}>
					<option value={0}>Месяц</option>				
					{DATA.mounths.map((mounth, index) => {
						return (
								<option 
									key={index}
									value={mounth}
									>
									{mounth}
								</option>
							)
					})}
				</Select>
			</div>
		)
})