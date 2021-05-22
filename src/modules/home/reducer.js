import { homeInitialState } from "redux/initialState";
import { homeActionTypes } from "modules/home";
import { constants } from "utils";

const { status } = constants;

export function homeReducer(state = homeInitialState, { payload, type }) {
  switch (type) {
    case homeActionTypes.SET_SELECTED_COMPANY:
      return {
        ...state,
        ...{
          selectedCompany: payload,
        },
      };
    case homeActionTypes.EDIT_COMPANY:
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
