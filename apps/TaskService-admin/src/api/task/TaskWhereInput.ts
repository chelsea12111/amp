import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TaskWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  status?: "Option1";
  userId?: StringNullableFilter;
};
