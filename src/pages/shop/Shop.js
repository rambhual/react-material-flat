import React from "react";
import { useSelector } from "react-redux";
import PageTitle from "../../components/PageTitle/PageTitle";
import ShopItem from "./components/ShopItem";

export default function ShopPage() {
  const { collections } = useSelector(state => state.shop);
  return (
    <>
      <PageTitle title="Shop Page" />
      {collections.map(collection => (
        <ShopItem {...collection} />
      ))}
    </>
  );
}
