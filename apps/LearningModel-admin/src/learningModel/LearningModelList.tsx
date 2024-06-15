import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const LearningModelList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"LearningModels"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="lastUpdated" source="lastUpdated" />
        <TextField label="modelName" source="modelName" />
        <TextField label="parameters" source="parameters" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="version" source="version" />
      </Datagrid>
    </List>
  );
};
