import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import { add_product } from "../redux/Action/ProductAction";
const AddPlant = () => {
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);
  const [prodName, setProd] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(add_product({ image, prodName, price, description }));
    navigate("/product");
  };
  return (
    <div style={{ marginTop: "10rem" }}>
      <Card style={{ width: "500px", left: "35%" }}>
        <Card.Body>
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
                onChange={(e) => {
                  setImage(e.target.value);
                }}
                value={image}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Product description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Product descriptiob"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              />
            </Form.Group>

            <Button variant="warning" onClick={handleSubmit}>
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AddPlant;
