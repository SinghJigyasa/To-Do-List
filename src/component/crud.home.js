import axios from "axios";
import {Link, useNavigate} from "react-router-dom"
import {useState, useEffect} from "react"
export function CrudHomeComp(){
    const [product, setProduct] = useState([]);
    const navigate = useNavigate();
    function GetDetails(){
        axios({
            method:"get",
            url:"http://127.0.0.1:8080/products",
        }).then(response=>{
            setProduct(response.data)
        })
    }
    useEffect(()=>{
      GetDetails();
 
},[]);
    function DeleteProduct(e){
        var flag = window.confirm("Are you sure\n You want to delete");
        if (flag===true){
            axios({
                method:"delete",
                url:`http://127.0.0.1:8080/deleteproduct/${parseInt(e.currentTarget.value)}`
            });
             alert("Record Delete");
             navigate("/products");
             GetDetails();
        }
    }
  return(
    <div className="container-fluid">
   
        <div className="input-group">
                <input className="form-control m-4" placeholder="Search your product....." type="text"/>
                <Link to="/addproduct" className="btn btn-info m-4"><span className="bi bi-plus"/></Link>
            </div>
            <table className="table table-group-divider">
                <thead>
                    <tr>
                        <th>Product Name</th>
                    </tr>
                </thead>
                <tbody> 
                    {
                        product.map(details=>
                            <tr key={details.ProductId}>
                                <td>{details.Name}</td>
                                <td><Link className="btn btn-primary" to={'/updatedetail/'+ details.ProductId}><span className="bi bi-pen"/></Link></td>
                                <td><Link className="btn btn-warning" to={'/details/' + details.ProductId}><span className="bi bi-eye"/></Link></td>
                                <td><button className="btn btn-danger" value={details.ProductId} onClick={DeleteProduct}><span className="bi bi-trash"/></button></td>

                            </tr>
                            )
                            
                    }
                </tbody>
            </table>
    </div>
 )
}
