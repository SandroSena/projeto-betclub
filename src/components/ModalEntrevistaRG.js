import React from "react";
import { Modal, Button } from "react-bootstrap";
import styled from "styled-components";

const ModalEntrevistaRG = ({ onHide, isModalOpenRG }) => {
  const ModalTitle = styled.h3`
    font-size: 1.75rem;
    padding: 1rem;
  `;

  return (
    <Modal
      show={isModalOpenRG}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Entrevista - Rádio Globo</Modal.Title>
      </Modal.Header>
      <ModalTitle>
        <strong>TORNE-SE UM INVESTIDOR</strong>
      </ModalTitle>
      <Modal.Body>
        Em entrevista para a Rádio Globo, Juliano Fontes, idealizador do site
        <a href="www.investimentofutebol.com"> www.investimentofutebol.com</a>,
        explicou o que é o trader esportivo – modalidade de investimento que
        mistura mercado de ações com aposta esportiva on-line. Mas o que isso
        significa?
        <br />
        <br />
        Significa que é possível tornar-se um investidor acompanhando partidas
        de futebol, comprando e vendendo palpites dados ao longo da partida; ou,
        ainda, por meio dos resultados fechados, que, na modalidade, são
        chamados de investimentos. O aporte inicial é a partir de US$ 4.
        <br />
        <br />
        Durante a entrevista, Fontes conta que o trader esportivo existe há 16
        anos na Europa, onde chega a movimentar milhões de dólares entre times
        pequenos. No Brasil, onde o investimento ainda é pouco conhecido,
        partidas entre times grandes de campeonatos como o Brasileirão, Copa das
        Américas ou Libertadores costumam movimentar entre US$ 300 e US$ 400
        mil. “Há dois anos, o mercado brasileiro movimentava apenas metade
        desses valores”, afirma Fontes.
        <br />
        <br />
        O investidor salienta que, apesar de o trader esportivo derivar de
        apostas, ele é considerado um investimento. “As leis brasileiras são
        antigas e não contemplam a modalidade. Porém, o investimento é legal e
        os ganhos são declarados normalmente no imposto de renda, sendo
        transferidos para contas correntes nacionais, ou sacados via caixa
        eletrônico”, explica Fontes aos ouvintes da Rádio Globo.
        <br />
        <br />
        Para mais informações, tanto para novatos quanto para investidores que
        desejam se aprimorar na modalidade, Juliano Fontes pode ser contatado
        pelo site www.investimentofutebol.com.
      </Modal.Body>
      <Modal.Footer>
        <Button className="close" variant="" onClick={onHide}>
          <span aria-hidden="true">×</span>
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalEntrevistaRG;
