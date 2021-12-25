import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import ApiCalls from '../../api/ApiCalls';


export default function () {
    const {id} = useParams()
    const [userInfo,setUserInfo] = useState<any>({id:id,firstName:"",lastName:"",emailId:""});
    const navigate = useNavigate();

    const saveUser = (e:any)=>{
         e.preventDefault();
         let user = {firstName:userInfo.firstName,lastName:userInfo.lastName,emailId:userInfo.emailId}
            ApiCalls.createUser(user).then((res)=>{
                toast.success("User successfully added!");
                navigate('/users')
                
            });
        
     }
     useEffect(() => {
       
       ApiCalls.getUserById(userInfo.id).then((res)=>{
           let user = res.data;
           setUserInfo({id:user.id,firstName:user.firstname,lastName:user.lastName,emailId:user.emailId})
       });
         
     }, [])

     const cancelUser = () =>{
         navigate('/users')
     }
    return (
        <div>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3'>
                        <h3 className='text-center'> Add User</h3>
                        <div className='card-body'>
                         <form>
                             <div className='form-group'>
                                 <label>First Name</label>
                                 <input type="text" placeholder='First Name' name='firstName' className='form-control' value={userInfo.firstName} onChange={(e)=>setUserInfo({...userInfo,firstName:e.target.value})} />

                             </div>
                             <div className='form-group'>
                                 <label>Last Name</label>
                                 <input type="text" placeholder='Last Name' name='lastName' className='form-control' value={userInfo.lastName} onChange={(e)=>setUserInfo({...userInfo,lastName:e.target.value})} />

                             </div>
                             <div className='form-group'>
                                 <label>Email</label>
                                 <input type="email" placeholder='Email' name='emailId' className='form-control' value={userInfo.emailId} onChange={(e)=>setUserInfo({...userInfo,emailId:e.target.value})} />

                             </div>
                             <div className='mt-3'>
                             <button className='btn btn-success' onClick={saveUser}>Save</button>
                               <button className='btn btn-danger' onClick={cancelUser} style={{marginLeft:"10px"}}>Cancel</button>
                             </div>
                               
                         </form>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}
