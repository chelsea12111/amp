import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type InteractionWhereInput = {
  id?: StringFilter;
  message?: StringNullableFilter;
  response?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
  userId?: StringNullableFilter;
};
