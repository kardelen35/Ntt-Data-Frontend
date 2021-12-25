
import { DialogProvider } from "react-mui-dialog";
import { ThemeProvider } from "@material-ui/core";

import React, { FC, useEffect, useState } from 'react'
import { Button, Modal } from "react-bootstrap";
import { useNavigate, useParams } from "react-router";
import ApiCalls from "../api/ApiCalls";
import { toast } from 'react-toastify';

const UpdateModal: FC<any> = ({ modalOpen, onHide, confirmModal, id, onClick }) => {
    const navigate = useNavigate();
    const[detail,setDetail] = useState<any>({
        id:id,
    })
      useEffect(() => {
        ApiCalls.getUserById(id).then((res) => {
          setDetail(res.data);
        });
      }, [id])

    const updateUser = (e:any) =>{
        e.preventDefault();
         ApiCalls.updateUser(detail,id).then((res)=>{
             navigate('/users')
             window.location.reload();
         })
 }

  return (
  
          <Modal show={modalOpen} onHide={onHide}>
          <Modal.Header closeButton>
            <Modal.Title>User Update</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className='container'>
                <div className='row'>
                    <div className='col-md-6 offset-md-3'>
                        <h3 className='text-center'> Update User</h3>
                        <div className='mx-auto'>
                            <form>
                                <div className='form-group'>
                                    <label>First Name</label>
                                    <input type="text" placeholder='First Name' name='firstName' className='form-control' value={detail.firstName} onChange={(e) => setDetail({ ...detail, firstName: e.target.value })} />

                                </div>
                                <div className='form-group'>
                                    <label>Last Name</label>
                                    <input type="text" placeholder='Last Name' name='lastName' className='form-control' value={detail.lastName} onChange={(e) => setDetail({ ...detail, lastName: e.target.value })} />

                                </div>
                                <div className='form-group'>
                                    <label>Email</label>
                                    <input type="email" placeholder='Email' name='emailId' className='form-control' value={detail.emailId} onChange={(e) => setDetail({ ...detail, emailId: e.target.value })} />

                                </div>
                            </form>
                        </div>

                    </div>

                </div>

            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={onHide}>
              Cancel
            </Button>
            <Button className='btn btn-success'  onClick={updateUser}>Update</Button>
          </Modal.Footer>
        </Modal>
      )
}
export default UpdateModal;
