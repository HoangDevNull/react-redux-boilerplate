import { INIT_SAMPLE } from '../types/sample';

const initialState = {
  data: [1, 2, 3]
};
const sampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_SAMPLE:
      return state;
    default:
      return state;
  }
};

export default sampleReducer;
