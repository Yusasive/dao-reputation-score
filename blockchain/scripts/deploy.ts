import { ethers } from "hardhat";

async function main() {
  const ReputationScore = await ethers.getContractFactory("ReputationScore");
  const reputationScore = await ReputationScore.deploy();
  await reputationScore.waitForDeployment();

  console.log("ReputationScore contract deployed at:", reputationScore.target);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
 