import React from "react";
import { Modal, Button } from "react-bootstrap";
import styled from "styled-components";
import R7Entrevista from "../images/r7Entrevista.png";

const ModalEntrevistaR7 = ({ onHide, isModalOpenR7 }) => {
  const EntrevistaImg = styled.img`
    width: 100%;
  `;

  return (
    <Modal
      show={isModalOpenR7}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Entrevista - R7</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <EntrevistaImg src={R7Entrevista} />
      </Modal.Body>
      <Modal.Footer>
        <Button className="close" variant="" onClick={onHide}>
          <span aria-hidden="true">×</span>
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalEntrevistaR7;
