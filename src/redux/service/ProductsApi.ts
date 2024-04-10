import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: "productsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8082/api/v1/",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "products",
    }),
  }),
});
export const { useGetProductsQuery } = productApi;
export const useGetProducts = useGetProductsQuery;
// Export a custom hook for getting all products
export const useGetAllProducts = () => useGetProductsQuery({}); // Pass any necessary parameters if required by your API
export default productApi;
