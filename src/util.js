export default function formatCurrency(num){
   // return "$" + Number(num.toFixed(1)).toLocaleString() + " ";
   return (new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR'
  }).format(num));

}