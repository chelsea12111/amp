import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type LearningModelWhereInput = {
  id?: StringFilter;
  lastUpdated?: DateTimeNullableFilter;
  modelName?: StringNullableFilter;
  parameters?: JsonFilter;
  version?: StringNullableFilter;
};
