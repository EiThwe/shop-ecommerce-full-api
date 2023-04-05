import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shop-ecommerce-api.vercel.app/user",
  }),
  tagTypes: ["authApi"],
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (user) => ({
        url: "/signup",
        method: "POST",
        body: user,
    }),
    invalidatesTags: ["authApi"],
    }),
    login: builder.mutation({
        query: (user)=>({
            url:"/login",
            method:"POST",
            body: user,
        }),
        invalidatesTags: ["authApi"]
      }),
  }),
});
export const {useSignupMutation,useLoginMutation} = authApi;
