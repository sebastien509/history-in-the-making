import React from 'react';
import Create from './components/Create';
import Error from './components/Error';
import Search from './components/Search';
import EventContainer from './components/EventContainer';
import App from './components/App';

const routes = [
    {
        path: "/",
        element: <App />,
        children: [
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
                element: <Error />,
                path: "*"
            }
        ]
    },
]


export default routes