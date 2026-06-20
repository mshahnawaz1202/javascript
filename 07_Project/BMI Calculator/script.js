const form = document.querySelector('form')
form.addEventListener('submit', function(e){
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')

    if( height <= 0 || height === '' || isNaN(height) ){
        result.innerHTML = 'Please Give a Valid height!'
    }
    else if( weight <= 0 || weight === '' || isNaN(weight) ){
        result.innerHTML = 'Please Give a Valid weight!'
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        let category = '';

        if (bmi < 18.5) {
            category = 'Underweight';
        }
        else if (bmi >= 18.5 && bmi < 25) {
            category = 'Normal Weight';
        }
        else {

            category = 'Overweight';
        }

        result.innerHTML = `
            <p>Your BMI: <strong>${bmi}</strong></p>
            <p>Category: <strong>${category}</strong></p>
            `;
    }



});








