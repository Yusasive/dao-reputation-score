import axios from "axios";

const SNAPSHOT_API = "https://hub.snapshot.org/graphql";

export async function fetchSnapshotVotes(walletAddress: string) {
  const query = `
    {
      votes(where: { voter: "${walletAddress}" }) {
        proposal {
          id
          title
          space { id }
        }
      }
    }
  `;

  try {
    const response = await axios.post(SNAPSHOT_API, { query });
    return response.data.data.votes;
  } catch (error) {
    console.error("Error fetching Snapshot votes:", error);
    return [];
  }
}
