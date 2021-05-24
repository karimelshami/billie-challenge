import React from "react";
import Modal from "modules/common/components/Modal";
import InputField from "modules/common/components/InputField";
import Button from "modules/common/components/Button";
import SuccessMessage from "modules/common/components/SuccessMessage";
import Text from "modules/common/components/Text";
import PropTypes from "prop-types";

const BudgetModal = (props) => {
  const {
    selectedCompany,
    isSelectedCompanyUpdated,
    toggleBudgetModal,
    editBudget,
    handleInputChange,
    isBudgetInvalid,
  } = props;
  return (
    <Modal
      onClose={toggleBudgetModal}
      title={`${selectedCompany.name}'s budget`}
      content={
        <>
          {isSelectedCompanyUpdated ? (
            <SuccessMessage msg="Budget edited successfully" />
          ) : (
            <>
              <InputField
                placeholder={`Edit ${selectedCompany.name} budget`}
                handleChange={(e) => handleInputChange(e.target.value)}
                value={selectedCompany.budget}
                type="number"
              />
              {isBudgetInvalid && (
                <Text
                  errorText
                  text={"You must enter a budget greater than the budget spent"}
                />
              )}
              <Button
                data-testid="submit--button"
                handleClick={editBudget}
                text={"Save budget"}
              />
            </>
          )}
        </>
      }
    />
  );
};

export default BudgetModal;

BudgetModal.propTypes = {
  selectedCompany: PropTypes.object,
  isBudgetInvalid: PropTypes.bool,
  isSelectedCompanyUpdated: PropTypes.bool,
  handleInputChange: PropTypes.func,
  editBudget: PropTypes.func,
};
