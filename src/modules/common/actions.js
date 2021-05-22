import commonActionTypes from "./action-types";

export function setSelectedCompany(value) {
  return {
    type: commonActionTypes.SET_SELECTED_COMPANY,
    payload: value,
  };
}

export function editCompany(value) {
  return {
    type: commonActionTypes.EDIT_COMPANY,
    payload: value,
  };
}
