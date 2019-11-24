import {BrowserRouter,Switch, Route} from 'react-router-dom'
import NotFound from '../Pages/NotFound'
import Layout from '../Layout'
import React,{memo} from 'react'

function Hola(){
    return(
        <>
        Hola
        </>
    )
}
export default memo(function Routers(){
    return(
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route path="/" exact render={()=>(<Hola/>)} /> 
                    <Route component={NotFound}/>
                </Switch>
            </Layout>
        </BrowserRouter> 
    )
})