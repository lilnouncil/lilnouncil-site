import useSWR from "swr";
import {graphqlRequest} from "../utils/graphql-request";
import Image from "next/image";

interface DelegateResponse {
  delegate: { nounsRepresented: [{ id: string }] }
}

const fetcher: (query: string) => Promise<any> = (query: string) => graphqlRequest(query)

export function Delegate() {
  const {data, error} = useSWR<DelegateResponse>(
    `{
      delegate(id: "0xada31add8450ca0422983b9a3103633b78938617") {
        id
        delegatedVotes
        nounsRepresented {
          id
          seed {
            head
            glasses
            body
            background
            accessory
          }
          owner {
            id
            delegate {
              id
            }
          }
        }
      }
    }`,
    fetcher
  )

  if (error) {
    return <div>Error fetching data</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  // Extracting the 'nounsRepresented' property from the 'delegate' object in the 'data' variable
  const {delegate: {nounsRepresented: nouns}} = data;

  // Sorting the 'nouns' array based on the numeric values of the 'id' property in ascending order
  nouns.sort((a, b) => parseInt(a.id, 10) - parseInt(b.id, 10));

  // Reversing the sorted 'nouns' array to achieve descending order based on 'id'
  nouns.reverse();

  return (
    <>
      <div className="flex -space-x-6 overflow-hidden p-2">
        {nouns.map((noun) => (
          <>
            <Image
              key={noun.id}
              className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
              src=""
              alt={`Lil Noun #${noun.id}`}
              title={`Lil Noun #${noun.id}`}
              width={40}
              height={40}
            />
          </>
        ))}
      </div>
    </>
  )
}
