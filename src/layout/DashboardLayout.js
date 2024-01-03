import React from 'react';
import { Outlet} from 'react-router-dom';
import Sidebar from './Sidebar';
const DashboardLayout = () => {



    return (
        <div className='bg-background' style={{ height: '100vh', overflowY: 'auto' }}>
               <div className='grid grid-cols-5 gap-5 p-5'>
             
             <div className='col-span-1'>
               <Sidebar />
             </div>
 
 
             <div className='col-span-4 '>
                    <Outlet />
             </div>
         </div>
     </div>
    );
};

export default DashboardLayout;