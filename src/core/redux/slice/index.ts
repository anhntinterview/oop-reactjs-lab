import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { selectLoginResult } from 'app/redux/user/slice/selector';
import { PostDTO, RTKQStateDTO } from "shared/dto/post.dto";
// import { LoginBodyRO, UserRO } from 'shared/interface/user.interface';

export const coreSliceApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
    // prepareHeaders: (headers, { getState }) => {
    //     const token = selectLoginResult;
    //     console.log(`token: `, token);

    //     return { ...headers, 'Content-Type': 'application/json' };
    // },
  }),
  tagTypes: ["Posts", "Users", "Events"],
  endpoints: (builder) => ({
    getPosts: builder.query<Array<PostDTO>, void>({
      query: () => "/articles",
      // providesTags: ["Post"],
      transformResponse(rawResult: RTKQStateDTO<PostDTO>, meta, arg) {
        return rawResult.list;
      },
      providesTags: (result) => {
        return result
          ? [
              ...result.map(({ id }) => ({ type: "Posts" as const, id })),
              { type: "Posts", id: "LIST" },
            ]
          : [{ type: "Posts", id: "LIST" }];
      },
    }),
    // login: builder.mutation({
    //     query: (accountLogin: LoginBodyRO) => ({
    //         url: '/users/login',
    //         method: 'POST',
    //         body: accountLogin,
    //     }),
    //     transformResponse(rawResult: UserRO, meta, arg) {
    //         return rawResult;
    //     },
    // }),
  }),
  // endpoints: () => ({}),
});

export const { useGetPostsQuery } = coreSliceApi;

export default coreSliceApi.reducer;
