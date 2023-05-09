import {BrowserRouter, Routes,Route,Link} from "react-router-dom"
import { CrudAddComp } from "./crud.Add";
import { CrudHomeComp } from "./crud.home";
import { CrudDetailsComp } from "./crud.details";
import { CrudUpdateComp } from "./crud.Update";

export function CrudIndexComp(){

    return(
        <div className="container-fluid">
            <BrowserRouter>
            
            <Routes>
                <Route path="/" element={<CrudHomeComp/>}/>
                <Route path="/products" element={<CrudHomeComp/>}/>
                <Route path="/addproduct" element={<CrudAddComp/>}></Route>
                <Route path="/details/:id" element={<CrudDetailsComp/>}/>
                <Route path="/updatedetail/:id" element={<CrudUpdateComp/>}/>
            </Routes>
            </BrowserRouter>
        </div>
    )
}