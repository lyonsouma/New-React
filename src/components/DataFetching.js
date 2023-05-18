import React, {useState, useEffect} from 'react'

function DataFetching (){
    const [post , setPost] =  useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res =>{console.log(res)})
        .catch()
    })

    return(
        <div></div>
    )
    
}
export default DataFetching