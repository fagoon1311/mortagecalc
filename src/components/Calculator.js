import React from 'react';
import { useState } from 'react';

const Calculator = () => {
    const [loanAmount, setLoanAmount] = useState('');
    const [term, setTerm] = useState('');
    const [interest, setInterest] = useState('');
    const [totalAmount, setTotalAmount] = useState('');
    const [monthlyPayment, setMonthlyPayment] = useState('');
    const [totalInterestPaid, setTotalInterestPaid] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        if (loanAmount && term && interest) {
            const principal = parseFloat(loanAmount);
            const numberofyears = parseFloat(term);
            const rateofint = parseFloat(interest);
            const monthlyInterest = rateofint / 100 / 12;
            const noOfPayments = numberofyears * 12;

            const monthlyAmount = (principal * monthlyInterest) / 
                (1 - Math.pow(1 + monthlyInterest, -noOfPayments));

            const totalAmountCalc = monthlyAmount * noOfPayments;
            const totalInterestPaidCalc = totalAmountCalc - principal;

            setMonthlyPayment(monthlyAmount.toFixed(2));
            setTotalAmount(totalAmountCalc.toFixed(2));
            setTotalInterestPaid(totalInterestPaidCalc.toFixed(2));
        } else {
            alert('Please enter all the fields.');
        }
    };

    return (
        <div className='flex flex-col'>
            <div>
                <form onSubmit={onSubmit}>
                    <div className='flex flex-row'>
                        <label className='m-2 p-2 w-[10rem]'>Loan Amount</label>
                        <input
                            className='border border-blue-100 m-2 p-2'
                            type='number'
                            value={loanAmount}
                            onChange={(e) => setLoanAmount(e.target.value)}
                        />
                    </div>
                    <div className='flex flex-row'>
                        <label className='m-2 p-2 w-[10rem]'>Loan Term</label>
                        <input
                            className='border border-blue-100 m-2 p-2'
                            type='number'
                            value={term}
                            onChange={(e) => setTerm(e.target.value)}
                        />
                    </div>
                    <div className='flex flex-row'>
                        <label className='m-2 p-2 w-[10rem]'>Interest rate (%)</label>
                        <input
                            className='border border-blue-100 m-2 p-2'
                            type='number'
                            value={interest}
                            onChange={(e) => setInterest(e.target.value)}
                        />
                    </div>
                </form>
            </div>
            <div>
                <span className='flex ml-2 p-2'>
                    Monthly payment amount: <h1 className='ml-2'>{monthlyPayment ? monthlyPayment : 0}</h1>
                </span>
                <span className='flex ml-2 p-2'>
                    Total payment amount: <h1 className='ml-2'>{totalAmount ? totalAmount : 0}</h1>
                </span>
                <span className='flex ml-2 p-2'>
                    Interest paid: <h1 className='ml-2'>{totalInterestPaid ? totalInterestPaid : 0}</h1>
                </span>
            </div>
            <div>
                <span>
                    <button className='rounded-3xl bg-slate-200 px-3 py-1 w-[8rem] m-2' onClick={onSubmit}>Calculate</button>
                    <button className='rounded-3xl bg-slate-200 px-3 py-1 m-2 w-[8rem]'>Reset</button>
                </span>
            </div>
        </div>
    );
};

export default Calculator;
