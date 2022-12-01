import axios from "axios";

const BFF_ENDPOINT = process.env.REACT_APP_BFF_ENDPOINT;

export const sendEmailContactClient = async (quotation) => {
  const { status } = await axios.post(
    `${BFF_ENDPOINT}/notification/contact/client`,
    { quotation }
  );
  return status !== 200;
};

export const sendEmailContactAdmin = async (quotation) => {
  const result = await axios.post(
    `${BFF_ENDPOINT}/notification/contact/admin`,
    { quotation }
  );

  return result.status !== 200;
};
