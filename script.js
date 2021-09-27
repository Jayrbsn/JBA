
/*Declaration of variables that are required fields */
/*note: I am aware that you can make fields required in html doc. But this is how I did it for the sake
of this exercise*/ 
const dob = document.getElementById('dob')
const idNumber = document.getElementById('idNumber')
const gender = document.getElementById('gender')
const address = document.getElementById('address')
const serialNumber = document.getElementById('serialNumber')
const imei = document.getElementById('imei')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

/*call addeventlistener function for when user tried to click on create profile button */
/*Series of if statements that will call the prevent default function if any required fields are missing */
/*If the above occurs, users are also presented with a message to notify them of which fields are mandatory */
form.addEventListener('submit', (e) => {
    let messages = []
    if (dob.value === '' || dob.value == null) {
      messages.push('DOB is required')
    }

    if (idNumber.value === '' || idNumber.value == null) {
        messages.push('ID is required')
    }

    if (gender.value === '' || gender.value == null) {
        messages.push('Gender is required')
    }

    if (address.value === '' || address.value == null) {
        messages.push('Address is required')
    }

    if (serialNumber.value === '' || serialNumber.value == null) {
        messages.push('Serial Number is required')
    }

    if (imei.value === '' || imei.value == null) {
        messages.push('IMEI is required')
    }    
  
    if (messages.length > 0) {
      e.preventDefault()
      errorElement.innerText = messages.join(', ')
    }
  })

