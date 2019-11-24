import React,{memo} from 'react'
import {Header, Body, Footer} from './../Helpers/routersAll'
import {withRouter} from 'react-router-dom'
import propTypes from 'prop-types'

function Layout({children}) {
    return(
        <>
            <Header/>
                <Body> 
                    {children}
                </Body>
            <Footer/>
        </>
    )
}
export default memo(withRouter(Layout))

Layout.propTypes={
    children: propTypes.element.isRequired
}
