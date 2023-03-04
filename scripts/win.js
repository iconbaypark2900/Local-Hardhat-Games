// add the game address here and update the contract name if necessary
const gameAddr = "0x68B1D87F95878fE05B998F19b66F4baba5De1aed";
const contractName = "Game3";

async function main() {
    // attach to the game
    const game = await hre.ethers.getContractAt(contractName, gameAddr);

    // do whatever you need to do to win the game here:
    const tx1 = await game.x(45);
    await tx1.wait();
    const tx2 = await game.y(210);
    await tx2.wait();
    const tx = await game.win();
    await tx.wait();

    // did you win? Check the transaction receipt!
    // if you did, it will be in both the logs and events array
    const receipt = await tx.wait();
    console.log(receipt);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
