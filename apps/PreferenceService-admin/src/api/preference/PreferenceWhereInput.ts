import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type PreferenceWhereInput = {
  context?: StringNullableFilter;
  id?: StringFilter;
  userId?: StringNullableFilter;
  value?: JsonFilter;
};
