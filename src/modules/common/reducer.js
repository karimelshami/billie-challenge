import { commonInitialState } from "redux/initialState";
import { commonActionTypes } from "modules/common";
import { constants } from "utils";

const { status } = constants;

export function commonReducer(state = commonInitialState, { payload, type }) {
  switch (type) {
    case commonActionTypes.SET_SELECTED_COMPANY:
      return {
        ...state,
        ...{
          selectedCompany: payload,
        },
      };
    case commonActionTypes.EDIT_COMPANY:
      let index = payload.index;
      let editedCompaniesList = [...state.companies];
      delete payload.index;
      editedCompaniesList[index] = payload;
      return {
        ...state,
        ...{
          companies: editedCompaniesList,
          selectedCompany: { ...state.selectedCompany, status: status.SUCCESS },
        },
      };

    default:
      return state;
  }
}
