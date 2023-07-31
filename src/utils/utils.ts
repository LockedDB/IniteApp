import { createAction } from '@reduxjs/toolkit';
import { useEffect } from 'react';

export function createAsyncActions<
  SuccessType = void,
  ErrorType = Error,
  RequestType = void,
>(label: string) {
  return {
    Success: createAction<SuccessType>(`${label}_SUCCESS`),
    Error: createAction<ErrorType>(`${label}_SAGA_ERROR`),
    Request: createAction<RequestType>(`${label}_REQUEST`),
  };
}

export function getErrorMessage(error: unknown) {
  if (error instanceof Error) {
    return error.message;
  } else {
    return String(error);
  }
}

export const useMountEffect = (fn: () => void) => {
  return useEffect(fn, []);
};
