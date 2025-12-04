import { sepolia } from "viem/chains";
import { contractABI } from "./contractABI"
import { CONTRACT_ADDRESS } from "./contractAddress"
import { getWalletClient, publicClient } from "./viem";
import { Address, formatEther, parseEther } from "viem";




export const getETHPrice = async() => {
    const res = await publicClient.readContract({
        address: CONTRACT_ADDRESS,
        abi: contractABI,
        functionName: 'getPrice',
    })
    // return res;
    // const ethPrice = (Number(res))/1e18;
    // return ethPrice;

    const ethPrice = formatEther(res as bigint);
    return ethPrice;
}

export const getNumberOfFunders = async() =>{
    const res = await publicClient.readContract({
        address: CONTRACT_ADDRESS,
        abi: contractABI,
        functionName: 'getFundersCount',
    })
    return Number(res);
}

export const fundContract = async (ethAmount: number, walletAddress: Address)=>{
    const walletCliient = await getWalletClient();

    const txMash = await walletCliient.writeContract({
        address: CONTRACT_ADDRESS,
        abi: contractABI,
        functionName: 'fund',
        // value: BigInt(ethAmount * 1e18),
        value: parseEther(ethAmount),
        account: walletAddress,
        chain: sepolia
    })

    return txMash;

}