import { match } from 'assert';
import React, { FC, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import { toast } from 'react-toastify';
import ApiCalls from '../../api/ApiCalls';



const UpdateUser = () =>  {
    const {id} = useParams();
    const [userInfo,setUserInfo] = useState({id:id,firstName:"",lastName:"bbb",emailId:"cccc"});
    const navigate = useNavigate();
    

     const cancelUser = () =>{
         navigate('/users')
     }
     useEffect(() => {
        ApiCalls.updateUserById(userInfo.id).then((res)=>{
            let user=res.data;
            setUserInfo(user)
        })
     },[])
     const updateUser = (e:any) =>{
            e.preventDefault();
            let user = {firstName:userInfo.firstName,lastName:userInfo.lastName,emailId:userInfo.emailId}
             ApiCalls.updateUserById(userInfo.id).then((res)=>{
                console.log('res =>',JSON.stringify(res));
                let user=res.data;
                setUserInfo(user)
                toast.success("User successfully updated!..")
            })
             ApiCalls.updateUser(user,userInfo.id).then((res)=>{
                 navigate('/users')
             })

     }
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3'>
                        <h3 className='text-center'> Update User</h3>
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
                               <button className='btn btn-success' onClick={updateUser}>Update</button>
                               <button className='btn btn-danger' onClick={cancelUser} style={{marginLeft:"10px"}}>Cancel</button>
                         </form>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}
export default UpdateUser
