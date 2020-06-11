import React from "react";
import { Modal, Button } from "react-bootstrap";
import styled from "styled-components";

const ModalEntrevistaCBN = ({ onHide, isModalOpenCBN }) => {
  const ModalTitle = styled.h3`
    font-size: 1.75rem;
    padding: 1rem;
  `;

  return (
    <Modal
      show={isModalOpenCBN}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Entrevista - CBN</Modal.Title>
      </Modal.Header>
      <ModalTitle>
        <strong>
          EM ENTREVISTA PARA CBN, JULIANO FONTES EXPLICA COMO E ONDE REALIZAR
          INVESTIMENTOS ESPORTIVOS
        </strong>
      </ModalTitle>
      <Modal.Body>
        Ganhar dinheiro com futebol pode se tornar um grande e bom negócio em
        sua vida. Em entrevista para a rádio CBN, no programa CBN no Campo dos
        Negócios, realizada pelo jornalista e comentarista esportivo Carlos
        Eduardo Éboli, Juliano Fontes explica com clareza como investir nessa
        área e obter lucros com o esporte.
        <br />
        <br />
        Na conversa, o maior trader esportivo do Brasil comenta a plataforma que
        utiliza para realizar seus investimentos – a Betfair – e conta como as
        transações ocorrem nesse setor. Ele compara esse negócio à Bolsa de
        Valores e ainda exemplifica como aplicar durante uma partida de futebol.
        <br />
        <br />
        Além disso, o especialista nesse mercado deixa claro que seu trabalho
        não está relacionado apenas a uma simples aposta esportiva, mas sim ao
        trading esportivo, o que demanda muito estudo, análise de cada momento
        dos jogos e rápidas percepções de oportunidades de transações durante as
        partidas.
        <br />
        <br />
        Esses investimentos esportivos são muito conhecidos e praticados na
        Europa, mas ainda estão em expansão pelo Brasil, tendo Juliano como o
        principal instrutor dessa área. Com isso, ele também explica na
        entrevista que, apesar do momento de crise financeira pelo qual o país
        está passando, esse mercado não é diretamente afetado, já que movimenta
        investimentos de pessoas do mundo inteiro, o que garante grande liquidez
        e oportunidades de realizar bons negócios em campeonatos nacionais e
        internacionais.
      </Modal.Body>
      <Modal.Footer>
        <Button className="close" variant="" onClick={onHide}>
          <span aria-hidden="true">×</span>
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalEntrevistaCBN;
