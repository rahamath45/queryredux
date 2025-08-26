import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

  

  export const api = createApi({
         reducerPath:"postApi",
         baseQuery:fetchBaseQuery({
            baseUrl :"https://jsonplaceholder.typicode.com/"
         }),
         endpoints:(builder) => ({
            getAllPosts: builder.query({
                query: () => "/posts"
            }),
            getpostById:builder.query({
                query:(id) =>`/posts/${id}`
            }),
            newpost:builder.mutation({
                query:(postData) =>({
                    url:"/posts",
                    method:"POST",
                    body: postData
                })
            })
         })
  })

  export const {useGetAllPostsQuery,useGetpostByIdQuery,useNewpostMutation} = api;
  

  // from api, we are going to export the hooks
// hooks are generated based on the endpoint names
// hooks are always starts with 'use'
// getAllPosts is a query
// getAllPosts => use + GetAllPosts + Query => useGetAllPostsQuery
// getPostById => use + GetPostById + Query => useGetPostByIdQuery
// newPost is a mutation
// newPost => use + NewPost + Mutation => useNewPostMutation