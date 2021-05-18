import React from "react";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
} from "modules/common/components/Table";
import { tableHead, fakeData } from "./Home.constants";

const Home = () => {
  return (
    <Table>
      <TableHead>
        {tableHead.map((element) => (
          <TableCell color="#7e7e7e">{element}</TableCell>
        ))}
      </TableHead>
      <TableBody>
        {fakeData.map((obj, index) => {
          return (
            <TableRow key={index}>
              <TableCell>{obj.name}</TableCell>
              <TableCell>{obj.date_of_first_purchase}</TableCell>
              <TableCell>{obj.budget}</TableCell>
              <TableCell>{obj.budget_spent}</TableCell>
              <TableCell>{obj.budget - obj.budget_spent}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default Home;
