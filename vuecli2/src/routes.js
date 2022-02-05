import Home from './Components/Home'
import About from './Components/About'
import Customer from './Components/Customer'

export const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/about-us',
        component: About
    },
    {
        path: '/customer/:id',
        component: Customer
    }
];