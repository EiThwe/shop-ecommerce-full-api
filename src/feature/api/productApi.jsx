import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const productApi = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({
        baseUrl:"https://shop-ecommerce-api.vercel.app",
    }),
    tagTypes: ['productApi'],
    endpoints: (builder)=>({
        getProducts: builder.query({
            query:(page)=>({
                url:`/products?page=${page}`,
                providesTags:["productApi"]
            }),
        })
    })

})
export const {useGetProductsQuery} = productApi