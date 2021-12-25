import React, { FC } from 'react'
import { Button, Modal } from 'react-bootstrap'

const DeleteModal: FC<any> = ({ modalOpen, onHide,onClick,id}) => {
    return (
        <Modal show={modalOpen} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body><div className="alert alert-danger">Are you sure do you want to delete user?</div></Modal.Body>
        <Modal.Footer>
          <Button variant="default" onClick={onHide}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => onClick(modalOpen, id) }>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    )
}
export default DeleteModal
