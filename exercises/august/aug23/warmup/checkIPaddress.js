// Given a string, write a function that determines whether it is a valid IP address.
// numbers need to range between 0 and 255 as well as only be numbers.

function validateIP(attempt){
    const ip = attempt.split(".")
    const ipLengthIs4 = ip.length === 4
    const inRange = ip.every(segment => {
          return segment >= 0 && segment <= 255
      })
      return ipLengthIs4 && inRange
  }
  
  console.log(validateIP("172.16.254.1"))
  console.log(validateIP("155.25.365.k"))