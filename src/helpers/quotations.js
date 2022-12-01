import axios from "axios";

const BFF_ENDPOINT = process.env.REACT_APP_BFF_ENDPOINT;

export const createQuotation = async (quotation) => {
  const { status } = await axios.post(`${BFF_ENDPOINT}/quotation`, {
    quotation,
  });
  return status === 200;
};
