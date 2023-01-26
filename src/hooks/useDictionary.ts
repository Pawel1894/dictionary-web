import { TWord } from "./../types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useDictionary(word: string | undefined) {
  return useQuery({
    queryKey: ["dictionary", word],
    queryFn: async (): Promise<Array<TWord>> => {
      return axios({
        method: "GET",
        url: `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => {
        return response.data;
      });
    },
    enabled: !!word,
  });
}
