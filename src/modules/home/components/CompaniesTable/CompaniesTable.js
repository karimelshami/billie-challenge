import React from "react";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
} from "modules/common/components/Table";
import { tableHead } from "./CompaniesTable.constants";
import { numberFormater } from "utils/functions";
import PropTypes from "prop-types";

const CompaniesTable = (props) => {
  const { companies, toggleBudgetModal } = props;
  return (
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
  );
};
export default CompaniesTable;

CompaniesTable.propTypes = {
  companies: PropTypes.arrayOf({
    name: PropTypes.string,
    id: PropTypes.string,
    budget: PropTypes.number,
    budget_spent: PropTypes.number,
    date_of_first_purchase: PropTypes.string,
  }),
  toggleBudgetModal: PropTypes.bool,
};
