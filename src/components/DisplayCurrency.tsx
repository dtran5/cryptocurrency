import React from "react";
import { Row, Col, Container } from "react-bootstrap";

type Props = {
  name: string;
  price: number;
  symbol: string;
  marketcap: number;
  volume: number;
  priceChange: number;
};

const DisplayCurrency: React.FC<Props> = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  priceChange,
}) => {
  return (
    <Container>
      <Row>
        <Col>{name}</Col>
        <Col>{price}</Col>
        <Col>{symbol}</Col>
        <Col>{marketcap}</Col>
        <Col>{volume}</Col>
        <Col>{priceChange}</Col>
      </Row>
    </Container>
    // <div>
    //   <ul>
    //     <li>{name}</li>
    //     <li>{price}</li>
    //     <li>{symbol}</li>
    //     <li>{marketcap}</li>
    //     <li>{volume}</li>
    //     <li>{priceChange}</li>
    //   </ul>
    // </div>
  );
};

export default DisplayCurrency;
