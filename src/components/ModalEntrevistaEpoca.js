import React from "react";
import { Modal, Button } from "react-bootstrap";
import styled from "styled-components";
import EpocaEntrevista from "../images/epocaEntrevista.png";

const ModalEntrevistaEpoca = ({ onHide, isModalOpenEpoca }) => {
  const EntrevistaImg = styled.img`
    width: 100%;
  `;

  return (
    <Modal
      show={isModalOpenEpoca}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Entrevista - Epoca</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <EntrevistaImg src={EpocaEntrevista} />
      </Modal.Body>
      <Modal.Footer>
        <Button className="close" variant="" onClick={onHide}>
          <span aria-hidden="true">×</span>
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalEntrevistaEpoca;
