import styled from "styled-components";

export const Table = styled.table`
  text-transform: capitalize;
  text-align: center;
  margin: 10px 0;
  // border: solid 1px rgb(224, 224, 224);
  border-collapse: collapse;
  font-size: 14px;
  background-color: #fff;
  box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  table-layout: ${(props) => (props.tableLayout ? props.tableLayout : "fixed")};
  width: 100%;
  overflow-x: hidden;
  ${({ extendStyle }) => extendStyle || ""}
`;

export const TableBody = styled.tbody``;

export const TableHead = styled.thead`
  background-color: #f6f6f6;
  font-weight: 700;
`;

export const TableRow = styled.tr`
  &&:hover {
    background-color: #f6f6f6;
    cursor: pointer;
  }
`;
export const TableCell = styled.th`
  font-weight: 400;
  color: ${(props) => (props.color ? props.color : "#474747")};
  height: 40px;
  width: ${(props) => props.width && props.width};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${(props) =>
    props.hoverEffect &&
    `
  &&:hover {
    color: #0070CD;
    cursor: pointer;
    
  }
  `}
  direction :${({ direction }) => direction || "ltr"};

  ${({ extendStyle }) => extendStyle || ""}
`;
