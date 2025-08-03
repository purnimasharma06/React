import React from 'react'
import { useId } from 'react';

function InputBox({
    /* label - what we are passing (from / to)
    amount - what users enters 
    onAmountChange - jo bhi iss component ko call kar rha hai wha ye use hoga , kyuki amount change hoga to state bhi change krna pdega 
    onCurrencyChange - as there is an option both in to and from to change the currency
    currencyOptions - like usd inr and all 
    selectCurrency - list to hai currency k pr select bhi to krna hai 
    amountDisable - amount dena chahte hai ya nhi dena chahte 
    currencyDisable - 
    */
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
   const amountInputId = useId()

    return (
        /*written in back tics as if user wants to add some css then it can be added */
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}> 
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                   { label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    /*the arrow is coming from here  */
                    type="number" 
                    placeholder="Amount"
                    //input field is enabled or disabled 
                    disabled = {amountDisable}
                    value = {amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >

                    /*.map(...) is used to loop through that array and return something for each item.*/

                  {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                            {currency}
                            </option>
                        ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;