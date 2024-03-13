import { useQuery } from "@apollo/client";
import { GET_SERVER } from "../../../graphql/queries/GetServer";
import { GetServerQuery, GetServerQueryVariables } from "../../../gql/graphql";

export function useServers() {
  const { data: dataServer, loading, error } = useQuery<
    GetServerQuery,
    GetServerQueryVariables
  >(GET_SERVER);

  return {
    server: dataServer?.getServer,
    loading,
    error,
  };
}
