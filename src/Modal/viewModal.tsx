import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ApiCalls from '../api/ApiCalls';

// export default function ViewModal() {
//     const {id} = useParams();
//     const[detail,setDetail] = useState<any>({
//         id:id,
        
//     })
//     useEffect(() => {
//         ApiCalls.getUserById(detail.id).then((res)=>{
//             setDetail(res.data);
//         });
       
//     }, [])
//     console.log(detail)
//     return (
//         <div>
//            <div className='card col-md-6 offset-md-3'>
//                <h3 className='text-center'>View User Details</h3>
//                <div className='card-body'>
//                    <div className='row'>
//                        <label>First Name</label>
//                        <span>{detail.firstName}</span>
//                    </div>
//                    <div className='row'>
//                        <label>Last Name</label>
//                        <span>{detail.lastName}</span>
//                    </div>
//                    <div className='row'>
//                        <label>E-Mail</label>
//                        <span>{detail.lastName}</span>
//                    </div>

//                </div>

//            </div>
            
//         </div>
//     )
// }
