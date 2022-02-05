import Home from './Components/Home'
import About from './Components/About'
import Customer from './Components/Customer/Customer'
import CustomerEdit from './Components/Customer/Edit'
import CustomerDetails from './Components/Customer/Details'
import CustomerNavbar from './Components/Customer/Navbar'

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
        path: '/customer',
        component: Customer,
        children: [
            {
                path: '',
                component: CustomerNavbar,
            },
            {
                path: ':id/details',
                component: CustomerDetails,
            },
            {
                path: ':id/edit',
                component: CustomerEdit,
                name:'customer_edit'
            },
        ]
    }
];