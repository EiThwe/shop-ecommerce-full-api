import React, { useState } from "react";
import { useGetProductsQuery } from "../feature/api/productApi";
import Card from "./Card";
import Loading from "../components/Loading";
import Pagination from "./Pagination";

const Products = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useGetProductsQuery(page);
  console.log(data, isLoading);
  const products = data?.data;
  console.log(products);
  return (
    <>
      {isLoading && <Loading />}
      <div className="grid lg:grid-cols-4 md:grid-cols-3 xs:grid-cols-2 grid-cols-1 xs:gap-2 gap-5 md:m-5">
        {products?.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
      <Pagination page={page} setPage={setPage} />
    </>
  );
};

export default Products;
