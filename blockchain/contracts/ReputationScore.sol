// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract ReputationScore {
    struct Contribution {
        address contributor;
        string description;
        string proof;
        uint256 timestamp;
    }

    Contribution[] public contributions;

    mapping(address => uint256) public reputationScores;

    event ContributionSubmitted(address indexed contributor, string description, string proof);

    function submitContribution(string memory _description, string memory _proof) public {
        contributions.push(Contribution(msg.sender, _description, _proof, block.timestamp));
        reputationScores[msg.sender] += 10; // Reward reputation points
        emit ContributionSubmitted(msg.sender, _description, _proof);
    }

    function getReputationScore(address _user) public view returns (uint256) {
        return reputationScores[_user];
    }
}
