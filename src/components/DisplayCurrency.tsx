import React from "react";
import { Row, Col, Container } from "react-bootstrap";

type Props = {
  name: string;
  price: number;
  symbol: string;
  marketcap: number;
  image: string;
  priceChange: number;
};

const DisplayCurrency: React.FC<Props> = ({
  name,
  image,
  price,
  symbol,
  marketcap,
  priceChange,
}) => {
  return (
    <>
      <Container>
        <Row className="d-flex justify-content-start align-items-center">
          <Col md={1} className="display__text">
            <img className="display__size" alt={name} src={image} />
          </Col>

          <Col md={2} className="display__text">
            {name}
          </Col>
          <Col md={2} className="display__text display__symbol">
            {symbol}
          </Col>
          <Col md={2} className="display__text">
            ${price.toLocaleString()}
          </Col>

          {priceChange < 0 ? (
            <Col className="display__text display__red">
              {priceChange.toFixed(2)}%
            </Col>
          ) : (
            <Col className="display__text display__green">
              +{priceChange.toFixed(2)}%
            </Col>
          )}
          <Col md={3} className="display__text">
            Market Cap: ${marketcap.toLocaleString()}
          </Col>
        </Row>
      </Container>
      <hr className="display__divider"></hr>
    </>
  );
};

export default DisplayCurrency;
