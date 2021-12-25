
import { DialogProvider } from "react-mui-dialog";
import { ThemeProvider } from "@material-ui/core";

import React, { FC, useEffect, useState } from 'react'
import { Button, Modal } from "react-bootstrap";
import { useParams } from "react-router";
import ApiCalls from "../api/ApiCalls";

// type Props = {
//   modalOpen: any,
//   onHide: any,
//   data: any
// }

const DetailModal: FC<any> = ({ modalOpen, onHide, confirmModal, id, type }) => {
  const[detail,setDetail] = useState<any>({
    id:id,
})

  useEffect(() => {
    ApiCalls.getUserById(id).then((res) => {
      setDetail(res.data);
    });
  }, [id])
  return (
  
          <Modal show={modalOpen} onHide={onHide}>
          <Modal.Header closeButton>
            <Modal.Title>User Detail</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <table className="table">
  <thead>
    <tr>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">E-Mail</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{detail.firstName}</td>
      <td>{detail.lastName}</td>
      <td>{detail.emailId}</td>
    </tr>
  </tbody>
</table>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={onHide}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      )
}
export default DetailModal;
