import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './Cryptocurrencies.scss';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input} from 'antd';
import { useGetCryptosQuery } from '../../services/cryptoApi';

const Cryptocurrencies = ({simplified}) => {
  const count = simplified ? 10 : 100;
  const { data: cryptoList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos ] = useState(cryptoList?.data?.coins);
  

  if(isFetching) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Row gutter={[32,32]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          <Col xs={24} sm={12} md={8} lg={6} xl={4} className="crypto-card" key={currency.id}>
            <Link to={`/crypto/${currency.id}`}>
              <Card title={`${currency.rank}. ${currency.name}`}
                    extra={<img className="crypto-image" src={currency.iconUrl} />}
                    hoverable
              >
                <p>Price: ${Math.round(currency.price * 100) / 100}</p>
                <p>Price: ${millify(currency.price, {precision: 2})}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {millify(currency.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};




Cryptocurrencies.propTypes = {};

Cryptocurrencies.defaultProps = {};

export default Cryptocurrencies;
