// ./client/src/Router.js

// 1. IMPORTACIONES
import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import Home from './components/Home'
import Layout from './components/Layout'
import Guitars from './components/Guitars'

import GuitarState from './context/Guitar/GuitarState'

// 2. FUNCIÓN
const Router = () => {
	
	return (
		<>
			<GuitarState>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Layout />}>
							{/* localhost:3000/ */}
							<Route index element={<Home />} />
							{/* localhost:3000/registro */}
							<Route path="registro" element={<Register />} />
							{/* localhost:3000/iniciar-sesion */}
							<Route path="iniciar-sesion" element={<Login />} />
							{/* localhost:3000/guitarras */}
							<Route path="guitarras" element={<Guitars />} />
						</Route>
					</Routes>
				</BrowserRouter>
			</GuitarState>
		</>
	)
}


// 3. EXPORTACIÓN
export default Router