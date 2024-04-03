import  React,{useState,useEffect} from 'react';
import { useSelector } from 'react-redux';
import { BigNumber } from 'ethers';
import { usePrepareSendTransaction, useSendTransaction } from 'wagmi';
import Selector from '../Components/SelectorButton';

 
export function SendEther() { 

  const[Tour,SetTour] = useState(null);
  const[amount,setAmount] = useState(BigNumber.from(0));


  const setSelectedtourAmount = (selected)=>{
    if(selected === "Cuyabeno"){
      setAmount("10000000000000000")
    }
    if(selected === "Papallacta"){
      setAmount("20000000000000000")
    }
    if(selected === "Otavalo"){
      setAmount("30000000000000000")
    }
    if(selected === "Mindo"){
      setAmount("40000000000000000")
    }
    if(selected === "Quilotoa"){
      setAmount("50000000000000000")
    }
    if(selected === "Cotopaxi-H"){
      setAmount("60000000000000000")
    }
    if(selected=== "Cotopaxi-S"){
      setAmount("70000000000000000")
    }
    if(selected === "Galapagos-S"){
      setAmount("80000000000000000")
    }
    if(selected === "Galapagos-H"){
      setAmount("90000000000000000")
    }
    if(selected === "Galapagos-P"){
      setAmount("100000000000000000")
    }

  }

  const selectedTour = useSelector((state) => state.selectedTour);
  console.log("Selected",selectedTour)
  

useEffect(()=>{
  setSelectedtourAmount(selectedTour)
  console.log("AMOUNT:",amount);
},[selectedTour])


  const { config } = usePrepareSendTransaction({
    request: { to: '0xA6ee1E5EA0332c0B4A258808505EEd60C688C931', value: BigNumber.from(amount) },
  }) 

  const { data, isLoading, isSuccess, sendTransaction, isError,error } =
    useSendTransaction(config)



  return (
    <>
      <h1 style={{ fontFamily: 'Futura, sans-serif' }}> Pay With ETH: </h1>
     
      <div style={{ 
        backgroundColor: '#fff9e6', 
        fontFamily: 'Futura', 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        fontSize: '20px', 
        fontWeight: 'bold', 
        margin: '0 0 20px', 
        color: '#00773e', 
      }}>
        <div style={{
  
        }}>
          <h3> To pay using ETH </h3>
          <ol style={{ textAlign: 'left', paddingLeft: '30px' }}>
            <li>Select the reserve you are making</li>
            <li>Click the "Send Transaction" button</li>
            <li>Confirm the amount you are paying in your wallet</li>
            <li>Confirm the transaction in your wallet</li>
          </ol>
        <Selector/>
          <button style={{ 
            backgroundColor: 'black', 
            color: 'white', 
            padding: '10px 20px', 
            borderRadius: '5px',
            border: 'none',
            boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
            fontWeight: 'bold',
            fontSize: '18px',
            fontFamily: 'Futura',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease-in-out',
            marginTop: '20px'
          }} 
        
          onClick={() => sendTransaction?.()}
          onMouseEnter={(e) => e.target.style.backgroundColor = 'gray'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'black'}
           
          >
              
            Send Transaction
          </button>
          {isLoading && <div style={{ marginTop: '20px' }}>Check Wallet</div>}
          {isSuccess && <div style={{ marginTop: '20px' }}>Transaction: {JSON.stringify(data)}</div>}
          {error?.message=='User rejected request' && <div style={{ marginTop: '20px' }}>You rejected the transaction</div>}
        </div>
      </div>
    </>
  );
}

 // <SettypeForm/>

export function SendETHForm (){
  const [amount, setAmount] = React.useState('')
  const debouncedAmount = useDebounce(amount, 500)
  const value = utils.parseEther('0.01');
  const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareContractWrite({
    address: PAYMENT_CONTRACT_ADDRESS,
    abi: PAYMENT_CONTRACT_ABI,
    functionName: 'PayNow',
    args: [ value ],
    //debouncedAmount ? utils.parseEther(debouncedAmount) : null
    // value: utils.parseEther(amount), 
  })
  const { data, error, isError, write } = useContractWrite(config)
  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  })
  return(
    <form
    onSubmit={(e) => {
      e.preventDefault()
      write?.()
    }}
    >
      <label for="payAmount">Amount</label>
      <input
        id="payAmount"
        onChange={(e) => setAmount(e.target.value)}
        placeholder="0.1"
        value={amount}
      />
      <button>Pay</button>
      {(isPrepareError || isError) && (
        <div>Error: {(prepareError || error)?.message}</div>
      )}
    </form>
  )
 
}


export default function ETHPayment(){

    return(
      <>
      <SendEther/>
      </>
     

    )
}