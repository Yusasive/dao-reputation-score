# 🌟 Decentralized Reputation Score for DAO Contributions & On-Chain Work

A Web3 Work Credit Score that helps freelancers & DAO contributors **prove credibility without centralized reviews** using on-chain reputation data.

## 🚀 Overview
🔹 **Category**: Decentralized Finance (DeFi)  
🔹 **Built for**: **CrossFi Hack Africa 2025**  
🔹 **Tech Stack**: Solidity, Next.js, TypeScript, Hardhat, CrossFi Chain  
🔹 **Key Features**:  
- Aggregates DAO contributions, Gitcoin grants, and bounties.  
- Generates an **on-chain reputation score** for freelancers & DAO members.  
- Uses **CrossFi interoperability** to fetch reputation data from multiple chains (Ethereum, BNB Chain, Polygon).  
- **Trustless & decentralized**—no KYC required.  

---

## 🛠 Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/Yusasive/dao-reputation-score.git
cd dao-reputation-score
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Run the Development Server
```sh
npm run dev
```
🔹 Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

---

## 🛠 Deploy Smart Contract to CrossFi

### 1️⃣ Compile Contracts
```sh
npx hardhat compile
```

### 2️⃣ Deploy to CrossFi Testnet
```sh
npx hardhat run --network crossfi scripts/deploy.ts
```

### 3️⃣ Verify Smart Contract (Optional)
```sh
npx hardhat verify --network crossfi YOUR_CONTRACT_ADDRESS
```

🔹 Once deployed, **copy the contract address** and add it to your `.env` file.

---

## 🖥 Screenshots

### 🔹 Homepage
![Homepage](./screenshots/homepage.png)

### 🔹 Profile Dashboard
![Dashboard](./screenshots/dashboard.png)

📌 **Pro Tip**: Record a quick demo video using Loom or Screenity!

---

## 🏆 Hackathon Submission

### 🔗 Links
✅ **GitHub Repo**: [GitHub](https://github.com/Yusasive/dao-reputation-score)  
✅ **Live DApp**: [Live Demo](https://dao-reputation-score.netlify.app)  
✅ **Contract Explorer**: [CrossFi Testnet Explorer](https://explorer.crossfi.io/)  

### 📜 Smart Contract Deployment
✅ **Contract Address:** `0xYourDeployedContractAddress`  
✅ **Explorer:** [CrossFi Testnet Explorer](https://explorer.crossfi.io/)  

---

## 📂 Project Structure

```bash
/web3-reputation-score
│── /frontend          # Next.js DApp
│── /backend           # Smart Contracts (Solidity)
│── /scripts           # Deployment & Utility Scripts
│── /screenshots       # Screenshots for README
│── README.md          # Full Documentation
│── hardhat.config.ts  # Hardhat Configuration
│── package.json       # Dependencies
│── .gitignore         # Git Ignore File
```

---

## 🚀 Next Steps
🔹 Expand multi-chain data support (Arbitrum, Optimism).  
🔹 Partner with DAOs & funding platforms (Gitcoin, Snapshot).  
🔹 Build an **incentive system** where users stake tokens to vouch for others.  

---

🎯 **Want to contribute?** Fork the repo, submit a PR, or open an issue! 🚀  
