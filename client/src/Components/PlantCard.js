import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";

import { useState } from "react";
import Form from "react-bootstrap/Form";

import Modal from "react-bootstrap/Modal";
import { delete_product, edit_product } from "../redux/Action/ProductAction";

const PlantCard = ({ prod }) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispacth = useDispatch();
  const [image, setImage] = useState(prod.image);
  const [price, setPrice] = useState(prod.price);
  const [prodName, setProd] = useState(prod.prodName);
  const [description, setDescription] = useState(prod.description);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(edit_product(prod._id, { image, prodName, price, description }));
    handleClose();
  };
  return (
    <div style={{ margin: "2rem" }}>
      <Card className="carte" style={{ width: "20rem" }}>
        <Card.Img variant="top" style={{ height: "300px" }} src={prod.image} />
        <Card.Body>
          <Card.Title>{prod.prodName}</Card.Title>

          <Button variant="success">{prod.price}</Button>
          <span
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "20px",
            }}
          >
            <Button
              variant="danger"
              onClick={() => dispacth(delete_product(prod._id))}
            >
              Delete
            </Button>
            <Button variant="warning" onClick={handleShow}>
              EDIT
            </Button>
          </span>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header>
              <Modal.Title>Edit</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Product Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Product name"
                    onChange={(e) => setProd(e.target.value)}
                    value={prodName}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>price</Form.Label>
                  <Form.Control
                    type="Number"
                    placeholder="Price"
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>URL</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter image URL"
                    onChange={(e) => setImage(e.target.value)}
                    value={image}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Product Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Product name"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="warning " onClick={handleSubmit}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PlantCard;
