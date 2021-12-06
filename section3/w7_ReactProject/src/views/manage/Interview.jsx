import React from 'react'

import {Route,Routes,Navigate,Outlet} from 'react-router-dom'



function Interview({match}){

        return (
            <div>
                {/* <Routes>
                    <Route path={match.path + "/list"} component={List} />
                    <Route path={match.path + "/add"} component={Add} />
                    <Route path={match.path + "/edit/:id"} component={Edit} />
                    <Redirect from={match.path} to={match.path + "/list"} exact />
                    
                    <Route path="" element={<Navigate to="/list" />}/>
                </Routes> */}
                <Outlet/>
            </div>
        )

    
}


export default Interview;
