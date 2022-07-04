

import { Route,Routes } from "react-router-dom"
import { CountryEdit } from "./CountryEdit"
import { Navbar } from "./Navbar"

import { CountryAdd } from "./CountryAdd"
import { ShowData } from "./TodoShow"
export const AllRoutes=()=>{
    return(
        <>
        <Navbar/>
         <Routes>
            <Route path="/" element={<CountryAdd/>}/>
            <Route path="show" element={<ShowData/>}/>
            <Route path="edit/:id" element={<CountryEdit/>} />
         </Routes>

        </>
    )
}