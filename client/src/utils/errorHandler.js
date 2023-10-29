export const getErrorResponse = (error) => {
  return error.response.data.errors
    ? error.response.data.errors
    : error.response.data.message
      ? error.response.data.message
      : error.response.data
}
