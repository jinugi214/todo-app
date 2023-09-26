import { BrowserRouter, Routes, Route, useParams, Link } from 'react-router-dom'
import './TodoApp.css'
import LogoutComponent from './LogoutComponent'
import LoginComponent from './LoginComponent'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import ListTodosComponent from './ListTodosComponent'
import ErrorComponent from './ErrorComponent'
import WelcomeComponent from './WelcomeComponent'

export default function TodoApp() {
    return (
        <div className="TodoApp">
            <BrowserRouter>
                <HeaderComponent />
                <Routes>
                    <Route path='/' element={<LoginComponent />} />
                    <Route path='/login' element={<LoginComponent />} />
                    <Route path='/welcome/:username' element={<WelcomeComponent />} />
                    <Route path='/todos' element={<ListTodosComponent />} />
                    <Route path='/logout' element={<LogoutComponent />} />

                    <Route path='*' element={<ErrorComponent />} />
                </Routes>
                <FooterComponent />
            </BrowserRouter>
        </div>
    )
}






