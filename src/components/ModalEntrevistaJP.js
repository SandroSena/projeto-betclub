import React from "react";
import { Modal, Button } from "react-bootstrap";
import styled from "styled-components";

const ModalEntrevistaJP = ({ onHide, isModalOpenJP }) => {
  const ModalTitle = styled.h3`
    font-size: 1.75rem;
    padding: 1rem;
  `;

  return (
    <Modal
      show={isModalOpenJP}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Entrevista - Jovem Pan</Modal.Title>
      </Modal.Header>
      <ModalTitle>
        <strong>COMO TRANSFORMAR A PAIXÃO POR FUTEBOL EM DINHEIRO</strong>
      </ModalTitle>
      <Modal.Body>
        Você sabia que pode ganhar dinheiro assistindo a jogos de futebol? O
        principal trader esportivo do Brasil e autor do livro Invi$ta em
        Futebol, Juliano Fontes, falou para a rádio Jovem Pan sobre como se
        tornar um investidor de sucesso.
        <br />
        <br />
        Na entrevista, Fontes conta que existe diferença entre apostas
        convencionais e o trading. No primeiro caso, você aposta em um time e,
        se ele ganhar, você lucra; se não ganhar, você perde. Já no trading,
        você pode comprar e vender ações ao longo do jogo, fazendo várias
        operações e resgatando o valor que investiu. “Se aos 30 minutos do
        segundo tempo de uma partida entre Brasil e Chile, que ainda permanece
        no zero a zero, por exemplo, você percebe que o jogo está frio e nada
        vai acontecer nos próximos dois ou três minutos, é possível comprar
        ações acreditando no empate e, em seguida, vendê-las com um lucro de 1%
        ou 2%”, explica Fontes.
        <br />
        <br />
        Em outro cenário, o especialista mostra o Brasil ganhando de 1×0 contra
        o Chile. “Se você investe no Brasil porque ele está jogando melhor e,
        quase no fim da partida, o Chile começa a fazer jogadas brilhantes, tem
        a opção de vender suas operações antes que esse gol seja concretizado”,
        diz Fontes.
        <br />
        <br />
        Esses e outros exemplos deixam claro que o trading esportivo é uma
        atividade baseada em estudos e probabilidades, diferente das apostas.
        Todos os investimentos são feitos por meio de uma bolsa esportiva,
        chamada Betfair, que oferece maior fluidez para realizar as operações
        com segurança.
        <br />
        <br />
        Ainda de acordo com Juliano Fontes, qualquer pessoa pode participar e se
        tornar um investidor, mas a recomendação é que o aprendiz goste muito de
        futebol.
      </Modal.Body>
      <Modal.Footer>
        <Button className="close" variant="" onClick={onHide}>
          <span aria-hidden="true">×</span>
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalEntrevistaJP;
