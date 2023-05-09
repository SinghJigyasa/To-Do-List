import {Link, useParams} from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import {Formik,Form,Field} from 'formik'

export function CrudUpdateComp(){
    const params = useParams();
    const [name, setName] = useState('');
    const [details, setDetails] = useState([{Name:"",Price:0,Stock:true}]);
    useEffect(()=>{
        axios({
            method:"get",
            url:`http://127.0.0.1:8080/detail/${params.id}`
        }).then(response=>{
            setDetails(response.data);
        })
    },[]);
    function HandleNameChange(e){
        setName(e.target.value);
        alert(name);
    }
    return(
        <div className="container-fluid">
            <h2>Edit</h2>
            <Formik
             enableReinitialize={true}
             initialValues={{
                ProductId:details[0].ProductId,
                Name:'',
                Price:0,
                Stock:false
             }}
            
            > 
            {
                <Form>
                    <dl>
                        <dt>Name</dt>
                        <dd><Field type="text" onChange={HandleNameChange} name="Name" value={details[0].Name}/></dd>

                        <dt>Price</dt>
                        <dd><Field type="number" name="Price" value={details[0].Price}/></dd>

                        <dt>Stock</dt>
                        <dd><Field type="checkbox" name="Stock" checked={details[0].Stock}/></dd>
                    </dl>
                    <button className='btn btn-success' type='submit'>Save</button>
                </Form>
            }

            </Formik>
            <Link to='/products'>View Product</Link>
        </div>
    )
}