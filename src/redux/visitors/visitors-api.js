import { createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios';
import { BASE_URL } from 'constants';

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const visitorsApi = createApi({
  reducerPath: 'visitors',
  baseQuery: axiosBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ['Visitors'],
  endpoints(build) {
    return {
      getAllVisitors: build.query({
        query: () => ({ url: 'visitors', method: 'get' }),
        providesTags: ['Visitors'],
      }),
      getById: build.query({
        query: (visitorId) => ({ url: `visitors/${visitorId}`, method: 'get' }),
        providesTags: ['Visitors'],
      }),
      addVisitor: build.mutation({
        query: ({ name, surname, password }) => ({
          url: 'visitors',
          method: 'post',
          data: {
            name,
            surname,
            password,
          },
        }),
        invalidatesTags: ['Visitors'],
      }),
      removeVisitor: build.mutation({
        query: visitorId => ({
          url: `visitors/${visitorId}`,
          method: 'delete',
        }),
        invalidatesTags: ['Visitors'],
      }),
      updateVisitor: build.mutation({
        query: ({ visitorId, name, surname, password }) => ({
          url: `visitors/${visitorId}`,
          method: 'put',
          data: {
            name,
            surname,
            password,
          },
        }),
        invalidatesTags: ['Visitors'],
      }),
    };
  },
});

export const {
  useGetAllVisitorsQuery,
  useGetByIdQuery,
  useAddVisitorMutation,
  useRemoveVisitorMutation,
  useUpdateVisitorMutation,
} = visitorsApi;
