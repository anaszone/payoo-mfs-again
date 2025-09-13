
//add money to the account

document.getElementById('btn-add-money')
    .addEventListener('click', function(event){
        event.preventDefault();
        const addMoneyInput = document.getElementById('input-add-money').value;
        console.log(addMoneyInput);

        const pinNumberInput = document.getElementById('input-pin-number').value;
        console.log(pinNumberInput);
        
        if( pinNumberInput === '1234' )
        {
            console.log('adding money to your account');

            const balance = document.getElementById('account-balance').innerText;

            const addMoneyNumber = parseFloat(addMoneyInput);
            const balanceNumber = parseFloat(balance);

            const newBalance = addMoneyNumber + balanceNumber;
            console.log(newBalance);

            document.getElementById('account-balance').innerText = newBalance;
        }
        else
        {
            alert('failed to add money to your account');
        }



    } );