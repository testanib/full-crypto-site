import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './News.scss';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';
import { useGetCryptoNewsQuery } from '../../services/cryptoNewsApi';
import { useGetCryptosQuery } from '../../services/cryptoApi';


const { Text, Title } = Typography;
const { Option } = Select;
const demoImageUrl = "http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg";
const News = ({simplified}) => {
  const  [newsCategory, setNewsCategory] = useState('Cryptocurrency');
  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 28 });
  const { data } = useGetCryptosQuery(100);

  if(!cryptoNews?.value) {
    return <div>Loading...</div>
  }
  
  return (
    <Row gutter={[24,24]}>
      {!simplified && (
        <Col span={24}>
          <Select
              showSearch
              className="select-news"
              placeholder="Select a Crypto"
              optionFilterProp="children"
              onChange={(value) => setNewsCategory(value)}
              filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
            >
              <Option value="Cryptocurrency">Cryptocurrency</Option>
              {data?.data?.coins.map((coin) => <Option value={coin.name}>{coin.name}</Option>)}
          </Select>
        </Col>
      )}
      {cryptoNews.value.map((news,i) => (
        <Col key={news.id} xs={24} sm={12} lg={8} xl={6} xxl={6} key={i}>
          <Card className="news-card" hoverable>
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>{news.name}</Title>
                <img className="news-image" style={{maxWidth: '200px', maxHeight: '100px'}} src={news?.image?.thumbnail?.contentUrl || demoImageUrl} alt="news"/>
              </div>
              <p>
                {news.description > 100 ? `${news.description.substring(0,100)} ...` : news.description}
              </p>
              <div className="provider-container">
                <Avatar src={news.provider[0].image?.thumbnail?.contentUrl || demoImageUrl} alt="news"/>
                <Text className="provider-name">{news.provider[0].name}</Text>
              </div>
              <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};


News.propTypes = {};

News.defaultProps = {};

export default News;
