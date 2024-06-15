import { SortOrder } from "../../util/SortOrder";

export type LearningModelOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  lastUpdated?: SortOrder;
  modelName?: SortOrder;
  parameters?: SortOrder;
  updatedAt?: SortOrder;
  version?: SortOrder;
};
