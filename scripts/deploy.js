const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");

  const gameContract = await gameContractFactory.deploy(
    ["Iron Man", "Captain America", "Thor"], // Names
    [
      "Qmb33gKW7irFg1LVy4SNAD5PxAx8MwiEPEnuGvgNhtuX7D", // Images
      "QmYPCCb1YQxbMPV99qjG2RN7bvikPhw3qY3d5kcExy3vpV",
      "QmT9CGGZSmpTkv8729NRH2Uz7nML5dzWpeeUTVZpknyicX",
    ],
    [1000, 1200, 1500], // HP values
    [100, 80, 50],
    "Thanos", // Boss name
    "QmadWCCt9sKScP2bt69ehWPTozKkUtp9YFJvejBDQQz63F", // Boss image
    10000, // Boss hp
    50 // Boss attack damage // Attack damage values
  );

  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
