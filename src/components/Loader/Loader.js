import React from 'react'
import { Spinner } from 'react-bootstrap'

export const Loader = () => {
    return (
        <div>
        {
           <Spinner className="divLoading" animation="border" variant="primary"/>  
        }
    </div>
    )
}
