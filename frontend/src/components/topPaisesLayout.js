import Header from "./Header";
import paisesTop from "./paisestop";
import React from  'react'

const topPaisesLayout =() =>{

    return (
        <React.Fragment>
            <Header title="TOP 5 DE PAISES CON MENOR CANTIDAD DE CONTAGIOS POR COVID19"/>
            
            <paisesTop/>
        </React.Fragment>
        )
}
export default topPaisesLayout