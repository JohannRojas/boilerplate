import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com'}),
  endpoints: (builder) => ({
    getPostsByUser: builder.query({
      query: (todoId) => `/posts/${ todoId }`
    })
  })
})

export const { useGetPostsByUserQuery } = postApi