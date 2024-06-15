import { SortOrder } from "../../util/SortOrder";

export type PreferenceOrderByInput = {
  context?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  value?: SortOrder;
};
