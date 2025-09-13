

document.getElementById('btn-cash-out')
    .addEventListener('click', function(event){
        event.preventDefault();

        const cashOut = document.getElementById('input-cash-out').value;
        console.log(cashOut);
        const cashOutNumber = parseFloat(cashOut);
        const pinNumber = document.getElementById('input-cash-out-pin').value;

        // console.log(cashOut, pinNumber);

        if( pinNumber === '1234' )
        {
            console.log('cashout ok');
            const balance = document.getElementById('account-balance').innerText;
            const balanceNumber = parseFloat(balance);
            console.log(balanceNumber);

            const newBalance = balanceNumber - cashOutNumber;
               console.log(newBalance);

            document.getElementById('account-balance').innerText = newBalance;

        }
        else
        {
            alert('Please try again');
        }
    })