import { connect } from 'mongoose';

import { MONGO_URL } from "./constants.js";

export const checkDBConnection = () => {
  connect(MONGO_URL)
    .then(() => console.log('DB Connection Successfull!'))
    .catch((err) => {
      console.log(err);
    });
};
