import axios from "axios";

const GRAPH_API_URL =
  "https://api.thegraph.com/subgraphs/name/snapshot-labs/snapshot";

export async function fetchDaoVotes(walletAddress: string) {
  const query = `
    {
      votes(where: { voter: "${walletAddress}" }) {
        id
        proposal {
          id
          title
          choices
        }
        choice
        created
      }
    }
  `;

  try {
    const response = await axios.post(GRAPH_API_URL, { query });
    return response.data.data.votes;
  } catch (error) {
    console.error("Error fetching votes:", error);
    return [];
  }
}
