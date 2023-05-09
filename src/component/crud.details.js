import axios from "axios"
import { useParams,Link } from "react-router-dom"
import { useState, useEffect } from "react"
export function CrudDetailsComp(){
    const params = useParams();
    const [showdetails, setDetails] = useState([{Name:'',Price:0,Stock:false}]);
    useEffect(()=>{
        axios({
            method:"get",
            url:`http://127.0.0.1:8080/detail/${params.id}`
        }).then((response)=>{
            setDetails(response.data);
        })
    },[params.id])
    return(
        <div className="container-fluid">
            <h2>Product details </h2>
            <dl>
                <dt>Name</dt>
                <dd>{showdetails[0].Name}</dd>
                <dt>Price</dt>
                <dd>{showdetails[0].Price}</dd>
                <dt>Stock</dt>
                <dd>{(showdetails[0].Stock===true)?"Available":"Out of stock"}</dd>
            </dl>
            <Link to="/products">View Product</Link>

        </div>
    )
}