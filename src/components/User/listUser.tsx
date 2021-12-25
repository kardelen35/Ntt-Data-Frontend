import React, { useEffect } from 'react'
import { useState } from 'react';
import { unescapeLeadingUnderscores } from 'typescript';
import UserServices from '../../services/userServices';
import ApiCalls from '../../api/ApiCalls'
import { IUser } from '../../interfaces/User'
import { useNavigate } from 'react-router-dom';
import { GridColDef } from '@mui/x-data-grid';
import { Button, Card, Modal } from 'react-bootstrap';
import DetailModal from '../../Modal/detailModal';
import { toast } from 'react-toastify';
import DeleteModal from '../../Modal/DeleteModal';
import UpdateUser from './UpdateUser';
import UpdateModal from '../../Modal/UpdateModal';
import './user.css'
import MaterialTable from 'material-table';



function ListUser() {
    const [user, setUser] = useState<IUser[]>([]);
    const [modalShow, setModalShow] = useState(false);
    const [modalShowView, setModalShowView] = useState(false);
    const [updateModal, setUpdateModal] = useState(false);
    const [id, setId] = useState(null);

    const navigate = useNavigate();
    useEffect(() => {
        ApiCalls.getUser().then((res) => {
            setUser(res.data)
        })
    }, [])
    const showView = (modalOpen: boolean, id: any) => {
        setId(id);
        setModalShowView(modalOpen);
    };

    // Delete Modal
    const showDeleteModal = (modalOpen: boolean, id: any) => {

        setId(id);
        setModalShow(modalOpen);
    };

    const submitDelete = (modalOpen: boolean, id: any) => {
        ApiCalls.deleteUser(id).then((res) => {
            setUser(user.filter((user) => user.id !== id))
            toast.success("User Deleted")
        });
        setModalShow(false);
    };
    const update = (modalOpen: boolean, id: any) => {
        ApiCalls.updateUser(user, id).then((res) => {
            navigate('/users')
        }).catch((err) => {
            console.log(err)
        })
        setUpdateModal(false);
    };
    //Edit Modal
    const editUser = (modalOpen: boolean, id: any) => {
        setId(id);
        setUpdateModal(modalOpen)
        if (!modalOpen) {
            setUpdateModal(false)
        }
    }

    return (
        <div className='mt-5' >
            <MaterialTable
                columns={[
                    { title: "id", field: "id" },
                    { title: "FirstName", field: "firstName", cellStyle: { width: "10px" } },
                    { title: "LastName", field: "lastName" },
                    { title: "Email", field: "emailId" },
                ]}
                data={user}
                actions={[
                    {
                        icon: "delete",
                        tooltip: "Delete User",
                        onClick: (event, rowData: any) => {
                            showDeleteModal(true, rowData?.id)
                        }
                    },
                    {
                        icon: "edit",
                        tooltip: "Update User",
                        onClick: (event, rowData: any) => {
                            setId(rowData?.id);
                            setUpdateModal(event)
                            if (!event) {
                                setUpdateModal(false)
                            }
                        }
                    },
                    {
                        icon: "visibility",
                        tooltip: "View User",
                        onClick: (event, rowData: any) => {
                            setId(rowData?.id);
                            setModalShowView(event);
                        }
                    }
                ]}
                options={{
                    filtering: true,
                    search: true,
                    exportButton: true,
                    maxBodyHeight: 400,
                    actionsColumnIndex: -1
                }}
                title="User"
            />
            <DeleteModal id={id} data={user} modalOpen={modalShow} onHide={() => setModalShow(false)} onClick={submitDelete} />
            <UpdateModal id={id} data={user} modalOpen={updateModal} onHide={() => setUpdateModal(false)} onClick={update} />
            <DetailModal id={id} data={user} modalOpen={modalShowView} onHide={() => setModalShowView(false)} onClick={showView} />

        </div>

    )
}
export default ListUser
