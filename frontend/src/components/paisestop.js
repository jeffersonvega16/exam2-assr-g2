import React, {useState,useEffect} from 'react'
import axios from 'axios'
import {Line} from 'react-charts-2'

function paisesTop(){
    const [casos,setCasos]=useState([]);
    const state = {
        labels:['1','2','3','4','5'],
        dataset:[
            {
                label:'Num Casos',
                backgroundColor: 'rgba(70,190,194,3)',
                borderColor:'rgba(0,0,0,1)',
                borderWidth:5,
                data: casos
            }
        ]
    }
    const opciones = {
        maintainAspectRadio: false,
        responsive: true
    }
    const peticionApi = async()=>{
        await axios.get('http://localhost:8080/api/pais')
        .then(responsive=>{
            console.log(responsive.data);
            var respuesta = responsive.data;
            var nCasos = [];
            respuesta.map(elemento=>{
                nCasos.push(elemento.casos);
            });
        }
        
        )
    }
    useEffect(()=>{
        peticionApi();
    },[]);
    return (
        <div>
            <Line
            data = {state}
            options = {opciones}
            />
        </div>
    );
}
export default paisesTop;