import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { GHUserInformation } from "./types";

export const useGetUserInfo = (
  userName: string,
  options?: UseQueryOptions<GHUserInformation>
) => {
  return useQuery<GHUserInformation>(
    ["getUserInfo", userName],
    async () => {
      const response = await fetch(
        `${process.env.REACT_APP_GH_API_URL}/${userName}`,
        {
          method: "GET",
          headers: {
            'Accept': 'application/vnd.github+json',
            'Authorization': `Bearer ${process.env.REACT_APP_GH_TOKEN}`
          } 
        }
      );
      if (!response.ok) {
        throw new Error("failed to get current user details");
      }
      return response.json();
    },
    { enabled: !!userName, ...options }
  );
};
