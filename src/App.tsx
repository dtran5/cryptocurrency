import React, { useState, useEffect } from "react";
import axios from "axios";
//components
import DisplayCurrency from "./components/DisplayCurrency";
//styles
import { Container, InputGroup, FormControl, Button } from "react-bootstrap";

/*
  - Create interface for incoming request data from call to API
  - Defining the types for each property on each crypto object coming in
  - Pass to useState - each object going into cryptoList array MUST follow ICurrency structure
*/
interface ICurrency {
  id: string;
  name: string;
  current_price: number;
  symbol: string;
  market_cap: number;
  total_volume: number;
  price_change_percentage_24h: number;
}

const App: React.FC = () => {
  const [cryptoCoins, setCryptoCoins] = useState<ICurrency[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      )
      .then((res) => {
        setCryptoCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  /*
    - Takes our initial API call data and filters them out on search
    - If API call data matches typed in search, it will be included in render
    - coinSearch returns an array of coins that match our search
    - filter returns our array based on how we filter and we filter by if search includes letters
  */
  const coinSearch = cryptoCoins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container>
      <h1 className="text-center">Cryptocurrency</h1>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={search}
          /*
            - Change event
            - <> Indicate the HTML element type
            - Function doesnt return anything -> void
          */
          onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
            setSearch(e.target.value)
          }
        />
        <InputGroup.Append>
          <Button variant="outline-secondary">Button</Button>
        </InputGroup.Append>
      </InputGroup>
      {coinSearch.map((crypto) => (
        <DisplayCurrency
          key={crypto.id}
          name={crypto.name}
          price={crypto.current_price}
          symbol={crypto.symbol}
          marketcap={crypto.market_cap}
          volume={crypto.total_volume}
          priceChange={crypto.price_change_percentage_24h}
        />
      ))}
    </Container>
  );
};

export default App;
