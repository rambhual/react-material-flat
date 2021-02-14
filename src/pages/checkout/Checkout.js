import React from "react";
import { Avatar, FormControlLabel, Grid } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selector";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { addCart, removeCart } from "../../redux/cart/cart.action";

export default function CheckoutPage() {
  const cartItems = useSelector(selectCartItems);

  const dispatch = useDispatch();
  const columns = [
    {
      name: "id",
      label: "#",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "imageUrl",
      label: "Image",
      options: {
        customBodyRender: value => {
          return (
            <FormControlLabel
              control={
                <Avatar
                  style={{ marginLeft: "2rem" }}
                  src={value}
                  alt={Math.random().toString()}
                />
              }
            />
          );
        },
      },
    },
    {
      name: "name",
      label: "Name",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "quantity",
      label: "Quantity",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <FormControlLabel
              control={
                <>
                  <ChevronLeftIcon
                    onClick={() => {
                      dispatch(
                        addCart({
                          id: tableMeta.rowData[0],
                          imageUrl: tableMeta.rowData[1],
                          name: tableMeta.rowData[2],
                          quantity: tableMeta.rowData[3],
                          price: tableMeta.rowData[4],
                        }),
                      );
                    }}
                  />
                  {value}
                  <ChevronRightIcon
                    onClick={() => dispatch(removeCart(tableMeta.rowData[0]))}
                  />
                </>
              }
            />
          );
        },
      },
    },
    {
      name: "price",
      label: "Price",
      options: {
        customBodyRender: value => {
          return <FormControlLabel control={<span>${value}</span>} />;
        },

        filter: true,
        sort: true,
      },
    },
  ];
  return (
    <>
      <PageTitle title="Check out page" />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <MUIDataTable
            title="Cart List"
            data={cartItems}
            columns={columns}
            options={{
              selectableRows: false,
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}
