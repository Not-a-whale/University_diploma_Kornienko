import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import App from './App.tsx'
import './index.css'
import store from './store.ts'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Dashboard from "./screens/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Profile from "./screens/Profile";
import {Foreigners} from "./screens/Foreigners";
import {Students} from "./screens/Students";
import {Student} from "./screens/Students/Student";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/"  element={<App />}>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path="" element={<PrivateRoute />}>
                <Route path='/profile' element={<Profile/>} />
                <Route index={true} path='/dashboard' element={<Dashboard />} />
                <Route path='/foreigners' element={<Foreigners />} />
                <Route path='/students' element={<Students />} />
                <Route path='/students/:id' element={<Student />} />
            </Route>
        </Route>
    )
)


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
)
