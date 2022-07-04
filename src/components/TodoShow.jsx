import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteData, fetchData } from '../Redux/Action';
import './TodoShow.css'
import {AiFillDelete} from 'react-icons/ai'
import {BiEdit} from 'react-icons/bi'
import { useState } from 'react';

import { useNavigate, useSearchParams } from 'react-router-dom';
import { ModelEdit } from './Model';

export const ShowData=()=>{
    const [searchParams,setSearchParams]=useSearchParams()
    const [toggle,setToggle]=useState(true)
    const [Country,SetCountry]=useState(
        searchParams.getAll(" ")||[])
    
    console.log(Country)
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const data=useSelector((state)=>state.userReducer.data)
    useEffect(()=>{
dispatch(fetchData())
    },[dispatch])
    console.log(data)
 
    const handleDelete=(id)=>{
           dispatch(deleteData(id))
        // dispatch(fetchData())
        

    }
  useEffect(()=>{
    if(Country){
        var params={
            Country:searchParams.getAll("India"),
        }
        console.log(params)
    }
  },[dispatch,Country])
    
    return(
        <div>
            <div> <input type="text" className='inputclass' placeholder='filter by country'
            onChange={(e)=>SetCountry(e.target.value)}/>
                <button>filter by</button></div>
            <table className='main'>
                <thead className='tablerow'> 
                <td>id</td>
                  <td>Country</td>
                    <td>City</td>
                    <td>Population</td>
                    <td>Delete</td>
                  
                    <td>Edit</td>
                </thead>
               
                {data?.map((el)=><tr className='tablecontent'>

                        <td>{el.id}</td>
                        <td>{el.Country}</td>
                        <td>{el.City}</td>
                        <td>{el.Population}</td>
                       <td className='button'> <button className='button' 
                       onClick={()=>handleDelete(el.id)}><AiFillDelete/></button></td>
                        <td className='button'><button className='button'
                       onClick={()=>navigate(`/edit/${el.id}`)} ><BiEdit/></button></td>
                    </tr>
                )}
            </table>
        </div>
    )
}