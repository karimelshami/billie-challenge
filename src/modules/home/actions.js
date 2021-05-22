import homeActionTypes from "./action-types";

export function setSelectedCompany(value) {
  return {
    type: homeActionTypes.SET_SELECTED_COMPANY,
    payload: value,
  };
}

export function editCompany(value) {
  return {
    type: homeActionTypes.EDIT_COMPANY,
    payload: value,
  };
}
