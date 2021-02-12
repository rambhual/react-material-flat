import { homeTypes } from "./home.types";

const initialState = {
  sections: [
    {
      title: "hats",
      imageUrl:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
      id: 1,
      linkUrl: "shop/hats",
    },
    {
      title: "jackets",
      imageUrl:
        "https://images.unsplash.com/photo-1612831200091-c08595b18e6b?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      id: 2,
      linkUrl: "shop/jackets",
    },
    {
      title: "sneakers",
      imageUrl:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      id: 3,
      linkUrl: "shop/sneakers",
    },
    {
      title: "women's",
      imageUrl:
        "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      size: "large",
      id: 4,
      linkUrl: "shop/women",
    },
    {
      title: "mens",
      imageUrl:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      size: "large",
      id: 5,
      linkUrl: "shop/mens",
    },
  ],
  loading: false,
  errorMessage: "",
};

export const homeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
