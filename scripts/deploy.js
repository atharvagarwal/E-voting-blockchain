const hre = require("hardhat");
const path = require("path");
const fs = require("fs");

async function main() {
  console.log("Deployment started!");

  const [deployer] = await ethers.getSigners();
  const address = await deployer.getAddress();
  console.log(`Deploying the contract with the account: ${address}`);

  const Voting = await hre.ethers.getContractFactory("Voting");
  const contract = await Voting.deploy("Ongoing Election");
  await contract.waitForDeployment()
  console.log(`Voting deployed to ${contract.target}`);
  
  saveContractFiles(contract);
}

function saveContractFiles(contract) {
    const contractDir=path.join(__dirname, "..","frontend","src","contracts");
    if(!fs.existsSync(contractDir)){
        fs.mkdirSync(contractDir);
    }

    fs.writeFileSync(path.join(contractDir, `contract-address-${network.name}.json`),
    JSON.stringify({Voting:contract.target},null,2)
    );

    const VotingArtifact=artifacts.readArtifactSync("Voting");
    fs.writeFileSync(path.join(contractDir, `Voting.json`),
    JSON.stringify(VotingArtifact,null,2)
    );

}

main().catch(error => {
  console.log(error);
  process.exitCode = 1;
});


// npx hardhat run scripts/deploy.js --network localhost