import {InputBox} from './Component';
import custom from './CustomHooks/custom'
import { useState } from 'react'
import './App.css'

function App() {
  
 let [amount  , setAmount] = useState(0);
 let [convertedAmount , setConvertedAmount] = useState(0);
 let [from , setFrom] = useState("USD");
 let [to , setTo] = useState("INR");

 let currencyInfo = custom(from);
//  console.log(currencyInfo)
//   let currenInfo = currencyInfo[from];
//   console.log(currenInfo)

  let options = Object.keys(currencyInfo);
//   console.log(options);

const swap = ()=>{
    setTo(from);
    setFrom(to);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
}

let convert = ()=>{

     setConvertedAmount(amount * currencyInfo[to]);

}


 let Url = 'https://images.pexels.com/photos/10507540/pexels-photo-10507540.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'

 return (
  <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
          backgroundImage: `url(${Url})`
      }}
  >
      <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
              <form
                  onSubmit={(e) => {
                      e.preventDefault();
                      convert();
                  }}
              >
                  <div className="w-full mb-1">
                      <InputBox
                          label="From"
                          amount={amount} 
                          onAmountChange={(amount)=> setAmount(amount)} 
                        //   amountDisabled={false}
                          currencyOptions={options}
                          onCurrencyChange={(currency) => setAmount(amount)}
                          selectCurrency={from}
                      />
                  </div>
                  <div className="relative w-full h-0.5">
                      <button
                          type="button"
                          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                          onClick={swap}
                      >
                          swap
                      </button>
                  </div>
                  <div className="w-full mt-1 mb-4">
                      <InputBox
                          label="To"
                          amount={convertedAmount}
                          onCurrencyChange={(currency) => setTo(currency )}
                          currencyOptions={options}
                        //   currencyDisabled={false}
                          selectCurrency={to}
                          amountDisabled 
                      />
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                      Convert 
                  </button>
              </form>
          </div>
      </div>
  </div>
);
}

export default App
