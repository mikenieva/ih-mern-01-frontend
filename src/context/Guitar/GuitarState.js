// ./client/src/context/Guitar/GuitarState.js

// ESTADO GLOBAL - STORE

// LA ARQUITECTURA QUE SE UTILIZA PARA GENERAR EL ESTADO GLOBAL SE LE CONOCE COMO FLUX.

import { useReducer } from 'react'
import GuitarContext from './GuitarContext'

const GuitarState = (props) => {

	// 1. INITIAL STATE (ESTADO INICIAL)
	const initialState = {
		guitars: [],
		hola: "mundo"
	}

	// 2. CONFIGURACIÓN DE REDUCER Y CREACIÓN DE ESTADO GLOBAL

	// 3. FUNCIONES DE CAMBIO EN ESTADO GLOBAL

	// 4. RETORNO
	return (
		<GuitarContext.Provider
			value={{
				guitars: initialState.guitars,
				hola: initialState.hola
			}}
		>
			{props.children}
		</GuitarContext.Provider>
	)


}

export default GuitarState


