import { API_URL } from "../config";
import { $api } from "./api";

export const requests = {
  fetchOperator: () => $api.get(`${API_URL}/operator`),
  fetchOperatorById: (id: any) => $api.get(`${API_URL}/operator/${id}/queue`),
  sendDataOperator: (operator_id: any) =>
    $api.post(`${API_URL}/queue-next`, { operator_id: operator_id }),
};
