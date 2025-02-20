import axios from "axios";

export async function fetchGitcoinContributions(walletAddress: string) {
  const GITCOIN_API_URL = `https://api.gitcoin.co/user/${walletAddress}/grants`;

  try {
    const response = await axios.get(GITCOIN_API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching Gitcoin contributions:", error);
    return [];
  }
}
