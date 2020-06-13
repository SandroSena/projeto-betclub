import React, { useState } from "react";
import styled from "styled-components";
import BackgroundPath from "../images/ModalBG.png";
import { Col, Container, Row, Modal, Form } from "react-bootstrap";

const Background = styled.div`
    display:flex;
    align-items:center;
    background-image: url('${BackgroundPath}');
    background-repeat: no-repeat;  
    background-position: center center;
    background-size: 100% 100%;

    @media (max-width: 767px) {
      justify-content: center;
      background-repeat: no-repeat;
      background-size: contain;
      height: auto;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
    }
  `;

const FormWrapper = styled.div`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85));
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  align-items: left;
  border: 1px solid rgba(252, 255, 44, 0.55);
  padding: 2rem;

  @media (max-width: 767px) {
    width: 90vw;
  }
`;

const FormTitle = styled.h3`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 900;
  font-size: 26px;
  line-height: 46px;
  color: #fff;

  @media (max-width: 767px) {
    font-size: 15px;
  }
`;

const Input = styled.input`
  width: 462px;
  margin-bottom: 2rem;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid rgba(252, 255, 44, 0.55);
  color: #fff;

  @media (max-width: 767px) {
    width: 230px;
  }
`;

const Text = styled.p`
  font-size: 14px;
  line-height: 46px;
  color: rgba(255, 255, 255, 0.5);
`;

const Button = styled.button`
  width: 140px;
  height: 48.38px;
  background: #00c27b;
  border: 1px solid #00c27b;
  box-sizing: border-box;
  box-shadow: 0px 0px 4px #00c27b;
  font-weight: 900;
  font-size: 24px;
  line-height: 46px;
  color: #fff;
`;

const Underline = styled.span`
  text-decoration: none;
  border-bottom: 6px solid #fae700;
  padding-bottom: 5px;
  border-radius: 10%;
  cursor: pointer;

  @media (max-width: 767px) {
    border: none;
  }
`;

const WrapperButtonClose = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  flex-flow: row;
`;

const ButtonClose = styled.button`
  border: none;
  background-color: transparent;
  color: #fff;
  font-size: 2rem;
  font-weight: 800;
`;
const ModalCallToAction = ({ onHide, isModalOpenCallToAction }) => {
  const [inputs, setInputs] = useState({
    firstname: "",
    email: "",
    phone: "",
    "field[2]": "", // coupon
  });

  const handleInputChange = (event) => {
    event.persist();
    const { name, value } = event.target;

    setInputs((inputs) => ({
      ...inputs,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);

    fetch("https://julianofontes.activehosted.com/proc.php", {
      method: "POST",
      body: data,
      mode: "no-cors",
    });
  };

  return (
    <Modal
      show={isModalOpenCallToAction}
      onHide={onHide}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Background>
        <Modal.Body>
          <Container className="p-0" fluid>
            <Row className="w-100">
              <WrapperButtonClose>
                <ButtonClose onClick={onHide}>X</ButtonClose>
              </WrapperButtonClose>
              <Col>
                <FormWrapper>
                  <Form onSubmit={handleSubmit} className="formAdquira">
                    <input type="hidden" name="u" value="21" />
                    <input type="hidden" name="f" value="21" />
                    <input type="hidden" name="s" />
                    <input type="hidden" name="c" value="0" />
                    <input type="hidden" name="m" value="0" />
                    <input type="hidden" name="act" value="sub" />
                    <input type="hidden" name="v" value="2" />
                    <FormTitle>
                      <Underline>PREEN</Underline>CHA OS CAMPOS ABAIXO:
                    </FormTitle>
                    <br></br>
                    <Input
                      type="text"
                      name="firstname"
                      placeholder="Digite seu primeiro nome"
                      value={inputs.firstname}
                      onChange={(e) => handleInputChange(e)}
                      required
                    ></Input>
                    <br></br>
                    <Input
                      type="text"
                      placeholder="E-mail"
                      name="email"
                      value={inputs.email}
                      onChange={(e) => handleInputChange(e)}
                      required
                    ></Input>
                    <br></br>
                    <Input
                      type="text"
                      placeholder="Whatsapp (Opcional)"
                      name="phone"
                      value={inputs.phone}
                      onChange={(e) => handleInputChange(e)}
                    ></Input>
                    <br></br>
                    <Input
                      type="text"
                      name="field[2]"
                      placeholder="Cupom (Opcional)"
                      value={inputs["field[2]"]}
                      onChange={(e) => handleInputChange(e)}
                    ></Input>
                    <br></br>
                    <Button type="submit">ENVIAR</Button>
                  </Form>
                </FormWrapper>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Background>
    </Modal>
  );
};

export default ModalCallToAction;
