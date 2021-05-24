import React, { useState } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { constants } from "utils";
import { homeActions } from "modules/home";
import Header from "modules/common/components/Header";
import BudgetModal from "modules/home/components/BudgetModal";
import CompaniesTable from "modules/home/components/CompaniesTable";
import Logo from "assets/logo.png";

const Home = () => {
  const dispatch = useDispatch();

  const { companies, selectedCompany, isSelectedCompanyUpdated } = useSelector(
    (state) => ({
      companies: state.home.companies,
      selectedCompany: state.home.selectedCompany,
      isSelectedCompanyUpdated:
        state.home.selectedCompany.status === constants.status.SUCCESS,
    }),
    shallowEqual
  );

  const [isBudgetModalOpen, setIsBudgetModalOpen] = useState(false);
  const [isBudgetInvalid, setIsBudgetInvalid] = useState(false);

  const toggleBudgetModal = (companyObj, index) => {
    let currentModalState = isBudgetModalOpen;
    setIsBudgetModalOpen(!currentModalState);
    if (companyObj)
      dispatch(homeActions.setSelectedCompany({ ...companyObj, index }));

    if (currentModalState) {
      setIsBudgetInvalid(false);
      dispatch(homeActions.setSelectedCompany({}));
    }
  };

  const handleInputChange = (value) =>
    dispatch(
      homeActions.setSelectedCompany({ ...selectedCompany, budget: value })
    );

  const editBudget = () => {
    if (!validateBudget()) return;
    dispatch(homeActions.editCompany(selectedCompany));
  };

  const validateBudget = () => {
    if (selectedCompany.budget <= companies[selectedCompany.index].budget_spent) {
      setIsBudgetInvalid(true);
      return false;
    }
    return true;
  };

  return (
    <>
      <Header img={Logo} />
      <CompaniesTable
        companies={companies}
        toggleBudgetModal={toggleBudgetModal}
      />
      {isBudgetModalOpen && (
        <BudgetModal
          selectedCompany={selectedCompany}
          isSelectedCompanyUpdated={isSelectedCompanyUpdated}
          handleInputChange={handleInputChange}
          toggleBudgetModal={toggleBudgetModal}
          editBudget={editBudget}
          isBudgetInvalid={isBudgetInvalid}
        />
      )}
    </>
  );
};

export default Home;
