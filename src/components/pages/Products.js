import { mockData } from '../../mock/Mock';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Products.css';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Pagination from 'react-bootstrap/Pagination';
import { useState } from 'react';
import { useEffect } from 'react';
import Background from '../images/Background.jpg';
import MainHeader from '../layout/MainHeader';
function Products() {
  const [productss, setProductss] = useState([]);
  const products = mockData.map((e, i) => ({
    id: i,
    name: e.name,
    category: e.category,
    price: e.price,
    ammount: e.ammount,
    img: e.img,
  }));

  const firstProducts = products.slice(0, 9);
  const secondProducts = products.slice(9, 18);
  const thirdProducts = products.slice(18, 27);
  const firstProductsHandler = () => {
    setProductss(firstProducts);
  };
  const secondProductsHandler = () => {
    setProductss(secondProducts);
  };
  const thirdProductsHandler = () => {
    setProductss(thirdProducts);
  };
  useEffect(() => {
    firstProductsHandler();
  }, []);

  return (
    <div
      className="background"
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
      <MainHeader />
      <div className="products-content">
        <Container>
          <h1>
            Welcome To Our Galuois Bar, Select Your Magic, Enjoy The Taste
          </h1>
          <p>and remember that we have free delivery</p>
          <Row className="products-row">
            {productss.map((product) => {
              return (
                <Card className="products-card" style={{ width: '30%' }}>
                  <Card.Img
                    className="products-img"
                    variant="top"
                    src={product.img}
                  />
                  <Card.Body>
                    <Card.Title className="card-title">
                      <span>{product.name}</span> <span> {product.price}</span>
                    </Card.Title>
                    <Card.Text>
                      <p>Category: {product.category}</p>
                      <p>Ammount: {product.ammount}</p>
                    </Card.Text>
                    <Link className="fill-button">
                      <span class="fill-button-hover">
                        <span class="fill-button-text">Order Now</span>
                      </span>
                    </Link>
                  </Card.Body>
                </Card>
              );
            })}
          </Row>
          <Pagination className="pagination">
            <Pagination.Prev className="pagination-item" />
            <Pagination.Item
              className="pagination-item"
              onClick={firstProductsHandler}
            >
              {1}
            </Pagination.Item>
            <Pagination.Item
              className="pagination-item"
              onClick={secondProductsHandler}
            >
              {2}
            </Pagination.Item>
            <Pagination.Item
              className="pagination-item"
              onClick={thirdProductsHandler}
            >
              {3}
            </Pagination.Item>
            <Pagination.Next className="pagination-item" />
          </Pagination>
        </Container>
      </div>
    </div>
  );
}
export default Products;
