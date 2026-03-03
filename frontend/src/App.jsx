import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style.scss'
import Courses from './components/Courses'
import Detail from './components/Detail'
import Login from './components/Login'
import Register from './components/Register'
import MyLearning from './components/pages/account/myLearning'
import View from './components/View'
import CreateCourse from './CreateCourse'
import MyCourses from './components/pages/account/MyCourses'
import WatchCourse from './components/pages/account/WatchCourse'

function App() {

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home/>}/>
					<Route path='/courses' element={<Courses/>}/>
					<Route path='/detail' element={<Detail/>}/>
					<Route path='/login' element={<Login/>}/>
					<Route path='/register' element={<Register/>}/>
					<Route path='/account/my-learning' element={<MyLearning/>}/>
					<Route path='/account/my-courses' element={<MyCourses/>}/>
					<Route path='/account/my-courses/view' element={<View/>}/>
					<Route path='/account/my-courses/create' element={<CreateCourse/>}/>
					<Route path='/account/watch-course' element={<WatchCourse/>}/>
				</Routes>
			</BrowserRouter>			
		</>
	)
}

export default App
