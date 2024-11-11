import React, { Children } from 'react';
import Create from './components/Create';
import Error from './components/Error';
import Search from './components/Search';
import EventContainer from './components/EventContainer';
import App from './components/App';
import EventsPage from './components/EventsPage';
import Home from './components/Home';

const routes = [
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/home",
        element: <Home />,
        children:[
            {
                path: "search",
                element: <Search />
            },
            {
                path: "create",
                element: <Create/>
            },
            {
                path: "event",
                element: <EventContainer/>
            },
            {
                path: "event/:id",
                element: <EventsPage/>
            }, 
        ]
    },
    {
            element: <Error />,
            path: "*"
    }
]



export default routes