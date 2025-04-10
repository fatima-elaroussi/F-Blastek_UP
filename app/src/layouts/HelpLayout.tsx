import { Outlet, NavLink, Navigate, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function HelpLayout() {
    const location = useLocation();
    
    // Check if we're at the root path and redirect to FAQ
    const isRootPath = location.pathname === '/help' || location.pathname === '/help/';
    
    useEffect(() => {
        // This will handle the initial redirect if we're at the root path
        if (isRootPath) {
            // This is just for logging - the actual redirect is handled by the Routes below
            console.log('Redirecting to FAQ page');
        }
    }, [isRootPath]);

    return (
        <div className="flex flex-col items-center pt-20">
            <h2 className='self-start mt-20 ml-20 text-5xl font-bold'>Website help</h2>
            <p className='self-start mt-4 ml-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, quibusdam!</p>

            <nav className='flex mt-4'>
                <NavLink to="faq" className={({ isActive }) => 
                    isActive ? "inline-block px-4 py-2 text-white bg-orange-500 rounded-lg" : 
                    "inline-block px-4 py-2 text-white bg-orange-400 rounded-lg hover:bg-orange-500"
                }>
                    FAQ
                </NavLink>
                <NavLink to="contact" className={({ isActive }) => 
                    isActive ? "inline-block px-4 py-2 ml-4 text-white bg-orange-500 rounded-lg" : 
                    "inline-block px-4 py-2 ml-4 text-white bg-orange-400 rounded-lg hover:bg-orange-500"
                }>
                    Contact
                </NavLink>
            </nav>

            {/* Redirect to FAQ if we're at the root path */}
            {isRootPath ? <Navigate to="faq" replace /> : <Outlet />}
        </div>
    );
}

export default HelpLayout;