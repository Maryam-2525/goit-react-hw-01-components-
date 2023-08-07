import React from 'react';
import transactions from '..data/transactions.json';


const TransactionHistory = () =>{

 return(
  <div>
    <TransactionHistory items={transactions} />
  </div>
 )
};




const Transaction = ({items}) => {
  return(
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )   
};


 
export default Transaction;