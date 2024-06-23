import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {

const [amount, setAmount] = useState(0);
const [from, setFrom] = useState("usd")
const [to, setTo] = useState("inr")
const [convertedAmount, setConvertedAmount] = useState(0)


const CurrencyInfo = useCurrencyInfo(from)
const options = Object.keys(CurrencyInfo)
const swap = () =>{
  setFrom(to)
  setTo(from)
  setConvertedAmount(amount);
  setAmount(convertedAmount)
}

const convert = () => {
  setConvertedAmount(amount * CurrencyInfo[to])
}

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://img.freepik.com/premium-vector/money-transfer-background_115579-657.jpg?w=900')`,
        }}
    >
        <div className="w-full">
            <div className=" lg:w-full sm:w-full md:w-full sm:max-w-md md:max-w-md lg:max-w-md sm:mx-auto md:mx-auto lg:mx-auto mx-3 border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setFrom(currency)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute hover:bg-blue-800 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            <span className='font-extrabold text-2xl'>&uarr;&darr;</span>
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="hover:bg-blue-800 w-full bg-blue-600 font-bold text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default App
