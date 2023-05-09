import {Formik,Form,Field,ErrorMessage} from "formik";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

export function CrudAddComp(){
    const navigate = useNavigate();
    return(
        <div className="container-fluid">
            Add Product
            <Formik 
                initialValues={{
                    ProductId:0,
                    Name:' ',
                    Price:0,
                    Stock:false
                }}
                onSubmit={(values)=>{
                    axios({
                        method:"post",
                        url:"http://127.0.0.1:8080/addproduct",
                        data:values
                    }).then(()=>{
                        alert("Product Added");
                        navigate("/products") 
                    })
                }}
            >
                <Form>
                    <dl>
                        <dt>Product ID</dt>
                        <dd><Field type = "text" name="ProductId"/></dd>

                        <dt>Product Name</dt>
                        <dd><Field type = "text" name="Name"/></dd>

                        <dt>Price</dt>
                        <dd><Field type = "number" name="Price"/></dd>

                        <dt>Stock</dt>
                        <dd className="form-switch"><Field className="form-check-input" type = "checkbox" name="Stock"/>Available</dd>
                    </dl>
                    <button type="submit" className="btn btn-primary">Add Product</button>
                    <Link to="/products">View Product...</Link>
                </Form>

            </Formik>
        </div>
    )
}