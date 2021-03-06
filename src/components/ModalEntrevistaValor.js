import React from "react";
import { Modal, Button } from "react-bootstrap";
import styled from "styled-components";
import ValorEntrevista from "../images/valorEntrevista.png";

const ModalEntrevistaValor = ({ onHide, isModalOpenValor }) => {
  const EntrevistaImg = styled.img`
    width: 100%;
  `;

  return (
    <Modal
      show={isModalOpenValor}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Entrevista - Valor</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <EntrevistaImg src={ValorEntrevista} />
      </Modal.Body>
      <Modal.Footer>
        <Button className="close" variant="" onClick={onHide}>
          <span aria-hidden="true">×</span>
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalEntrevistaValor;
