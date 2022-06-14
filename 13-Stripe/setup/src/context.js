import React, { useState, useContext } from 'react'
import App from './App';
import sublinks from './data'


const AppContext= React.createContext();

const AppProvider = ({children}) => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [page, setPage] = useState({page:'', links: []});
    const [location, setLocation] = useState({});


    const openSidebar = () => {
        setIsSidebarOpen(true);
    }
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }
    const openSubmenu = (text, coordinates) => {
        console.log(text);
        const page = sublinks.find((link)=>link.page === text);
        
        setPage(page);
        setLocation(coordinates);
        setIsSubmenuOpen(true);
    }
    const closeSubmenu = () => {
        setIsSubmenuOpen(false);
    }
    return <AppContext.Provider value={{isSubmenuOpen, isSidebarOpen, closeSubmenu, closeSidebar, openSubmenu, openSidebar, page, location}}>{children}</AppContext.Provider>
}


export const useGlobalContext= () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider};