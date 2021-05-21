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
import { Form } from "./Home.style";
import Modal from "modules/common/components/Modal";
import Text from "modules/common/components/Text";
import InputField from "modules/common/components/InputField";
import Button from "modules/common/components/Button";
import { numberFormater } from "utils/functions";
const Home = () => {
  const dispatch = useDispatch();

  const { companies, selectedCompany } = useSelector(
    (state) => ({
      companies: state.common.companies,
      selectedCompany: state.common.selectedCompany,
    }),
    shallowEqual
  );
  const [isBudgetModalOpen, setIsBudgetModalOpen] = useState(false);

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
    validateBudget()
    dispatch(commonActions.editCompany(selectedCompany));
    //TODO: when the budget is sumbitted successfully a  success msg should be display
    setIsBudgetModalOpen(false);
  };

  const validateBudget =()=>{
    //TODO: VALIDATE that budget is number and budget is not smaller than the original budget
    if(selectedCompany.budget < companies[selectedCompany.index].budget){
      alert('invalid')
    }
  }

  const renderModalContent = () => {
    return (
      <div>
        <Text primaryText text={selectedCompany.name} />
        <InputField
          placeholder={`Edit ${selectedCompany.name} budget`}
          handleChange={(e) => handleInputChange(e.target.value)}
          value={selectedCompany.budget}
        />
        <Button
          data-testid="submit--button"
          handleClick={ editBudget  }
          // extendStyle={extendSearchButtonStyle}
          text={"Save budget"}
          // loading={filter.name && showSearchingLoader}
        />
      </div>
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
                <TableCell>{obj.date_of_first_purchase}</TableCell>
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
        <Modal onClose={toggleBudgetModal} content={renderModalContent()} />
      )}
    </>
  );
};

export default Home;
