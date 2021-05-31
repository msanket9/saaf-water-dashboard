import React from 'react'
import DashboardTwoToneIcon from '@material-ui/icons/DashboardTwoTone';
import TimelineIcon from '@material-ui/icons/Timeline';
import MapTwoToneIcon from '@material-ui/icons/MapTwoTone';
import OpacityTwoToneIcon from '@material-ui/icons/OpacityTwoTone';
export const SidebarData = [
    {
        title: "Dashboard",
        icon: <DashboardTwoToneIcon />,
        link: "/Home",
    },
    {
        title: "Charts",
        icon: <TimelineIcon />,
        link: "/ ", /* add page here */
        
        
    },
    {
        title: "Map",
        icon: <MapTwoToneIcon />,
        link: "/ ",/* add page here */
    },
    {
        title: "Lab Test",
        icon: <OpacityTwoToneIcon />,
        link: "/ ", /* add page here */
       
    }
]