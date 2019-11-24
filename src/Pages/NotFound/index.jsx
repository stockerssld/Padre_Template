import React from 'react'

export default function({location}){
    return(
        <div>
            <h3>
                Pagina no encontrada 
                <code>
                    {location.pathname}
                </code>
            </h3>
        </div>
    )
}
    
