import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
} from "modules/common/components/Table";
import Header from "modules/common/components/Header";
import { commonActions } from "modules/common";
import { tableHead } from "./Home.constants";
import Logo from "assets/logo.png";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import Modal from "modules/common/components/Modal";
import Text from "modules/common/components/Text";
import InputField from "modules/common/components/InputField";
import Button from "modules/common/components/Button";
import SuccessMessage from "modules/common/components/SuccessMessage";
import { numberFormater } from "utils/functions";
import { constants } from "utils";

const Home = () => {
  const dispatch = useDispatch();

  const { companies, selectedCompany, isSelectedCompanyUpdated } = useSelector(
    (state) => ({
      companies: state.common.companies,
      selectedCompany: state.common.selectedCompany,
      isSelectedCompanyUpdated:
        state.common.selectedCompany.status === constants.status.SUCCESS,
    }),
    shallowEqual
  );
  const [isBudgetModalOpen, setIsBudgetModalOpen] = useState(false);
  const [isBudgetInvalid, setIsBudgetInvalid] = useState(false);

  const toggleBudgetModal = (companyObj, index) => {
    setIsBudgetModalOpen(!isBudgetModalOpen);
    if (companyObj) {
      dispatch(commonActions.setSelectedCompany({ ...companyObj, index }));
    }
  };

  const handleInputChange = (value) =>
    dispatch(
      commonActions.setSelectedCompany({ ...selectedCompany, budget: value })
    );

  const editBudget = () => {
    if (!validateBudget()) return;
    dispatch(commonActions.editCompany(selectedCompany));
    //TODO: when the budget is sumbitted successfully a  success msg should be display
  };

  const validateBudget = () => {
    //TODO: VALIDATE that budget is number and budget is not smaller than the original budget
    if (selectedCompany.budget < companies[selectedCompany.index].budget) {
      setIsBudgetInvalid(true);
      return false;
    }
    return true;
  };

  const renderModalContent = () => {
    return (
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
                text={"You must enter a budget greater than the older budget"}
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
    );
  };

  return (
    <>
      <Header img={Logo} />
      <Table>
        <TableHead>
          {tableHead.map((element) => (
            <TableCell color="#7e7e7e">{element}</TableCell>
          ))}
        </TableHead>
        <TableBody>
          {companies.map((obj, index) => {
            return (
              <TableRow
                onClick={() => toggleBudgetModal(obj, index)}
                key={index}
                title="edit budget"
              >
                <TableCell>{obj.name}</TableCell>
                <TableCell>
                  {new Date(obj.date_of_first_purchase).toLocaleDateString(
                    "de-DE"
                  )}
                </TableCell>

                <TableCell>{numberFormater(obj.budget, 2)}</TableCell>
                <TableCell>{numberFormater(obj.budget_spent, 2)}</TableCell>
                <TableCell>
                  {numberFormater(obj.budget - obj.budget_spent, 2)}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      {isBudgetModalOpen && (
        <Modal
          onClose={toggleBudgetModal}
          title={selectedCompany.name}
          content={renderModalContent()}
        />
      )}
    </>
  );
};

export default Home;
