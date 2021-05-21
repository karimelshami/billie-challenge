import { commonInitialState } from "redux/initialState";
import { commonActionTypes } from "modules/common";
import { constants } from "utils";

const { status } = constants;

export function commonReducer(state = commonInitialState, { payload, type }) {
  switch (type) {
    // case commonActionTypes.GET_ALL_WHATEVER:
    //   return {
    //     ...state,
    //     ...{
    //       allWhatever: {
    //         status: status.FETCHING,
    //       },
    //     },
    //   };
    // case commonActionTypes.GET_ALL_WHATEVER_SUCCESS:
    //   return {
    //     ...state,
    //     ...{
    //       allWhatever: {
    //         status: status.SUCCESS,
    //         ...payload,
    //       },
    //     },
    //   };
    // case commonActionTypes.GET_ALL_WHATEVER_FAIL:
    //   return {
    //     ...state,
    //     ...{
    //       allWhatever: {
    //         status: status.FAIL,
    //       },
    //     },
    //   };
    case commonActionTypes.SET_SELECTED_COMPANY:
      return {
        ...state,
        ...{
          selectedCompany: payload,
        },
      };
    case commonActionTypes.EDIT_COMPANY:
      console.log(payload, "PAYLOAD");
      let index = payload.index;
      let editedCompaniesList = [...state.companies];
      delete payload.index;
      editedCompaniesList[index] = payload;
      return {
        ...state,
        ...{
          companies: editedCompaniesList,
        },
      };

    default:
      return state;
  }
}
