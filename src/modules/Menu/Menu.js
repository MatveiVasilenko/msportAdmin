import React from 'react'
import {NavLink} from 'react-router-dom'

export default React.memo(() => {
	return (
			<>
				<div>
					<NavLink to="/admin">Главн</NavLink>
				</div>
				<div>
					<NavLink to="/trains">Тренировки</NavLink>
				</div>
				<div>
					<NavLink to="/liders">Лидеры спорта</NavLink>
				</div>
				<div>
					<NavLink to="/support">Обратная связь</NavLink>
				</div>
			</>
		)
})