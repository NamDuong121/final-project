import React from "react";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

import "../components/styles/Shop.css";

import products from "../data/products";
import ProductList from "../components/UI/ProductList";

import { useState } from "react";

const Shop = () => {
  const [productsData, setProductsData] = useState(products);
  // const handleSort = (e) => {
  //   const sortValue = e.target.value;
  //   console.log(sortValue);
  //   if (sortValue === "ascending") {
  //     const sortAscending = products.sort(
  //       (a, b) => parseFloat(a.price) - parseFloat(b.price)
  //     );
  //     return setProductsData(sortAscending);
  //   }
  // };
  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "Mũ Lưỡi Trai") {
      const filteredProducts = products.filter(
        (item) => item.category === "Mũ Lưỡi Trai"
      );
      setProductsData(filteredProducts);
    }

    if (filterValue === "Snapback") {
      const filteredProducts = products.filter(
        (item) => item.category === "Snapback"
      );
      setProductsData(filteredProducts);
    }

    if (filterValue === "Bucket") {
      const filteredProducts = products.filter(
        (item) => item.category === "Bucket"
      );
      setProductsData(filteredProducts);
    }

    if (filterValue === "Beret") {
      const filteredProducts = products.filter(
        (item) => item.category === "Beret"
      );
      setProductsData(filteredProducts);
    }
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;

    const searchedProducts = products.filter((item) =>
      item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setProductsData(searchedProducts);
  };

  const handleSort = (e) => {
    const sortValue = e.target.value;
    if (sortValue === "ascending") {
      setProductsData((products) =>
        [...products].sort((a, b) => a.price - b.price)
      );
    } else {
      setProductsData((products) =>
        [...products].sort((a, b) => b.price - a.price)
      );
    }
  };
  return (
    <Helmet title="Shop">
      <CommonSection title="Sản Phẩm" />
      <section>
        <Container>
          <Row>
            <Col lg="3" md="6">
              <div className="fitler__widget">
                <select onChange={handleFilter}>
                  <option>Lọc</option>
                  <option value="Mũ Lưỡi Trai">Mũ Lưỡi Trai</option>
                  <option value="Snapback">Mũ Snapback</option>
                  <option value="Bucket">Mũ Bucket</option>
                  <option value="Beret">Mũ Beret</option>
                </select>
              </div>
            </Col>
            <Col lg="3" md="6" className="text-end">
              <div className="fitler__widget">
                <select onChange={handleSort}>
                  <option>Sắp Xếp</option>
                  <option value="ascending">
                    Thứ tự theo giá: Thấp đến Cao
                  </option>
                  <option value="descending">
                    Thứ tự theo giá: Cao đến Thấp
                  </option>
                </select>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="search__box">
                <input
                  type="text"
                  placeholder="Tìm kiếm..."
                  onChange={handleSearch}
                />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            {productsData.length === 0 ? (
              <h1 className="text-center fs-4">Không Tìm Thấy Sản Phẩm</h1>
            ) : (
              <ProductList data={productsData} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;
