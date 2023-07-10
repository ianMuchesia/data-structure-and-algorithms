function timeConversion(s) {
  const regex = /pm/i;
  let newArray = s.split(":");
  let hours;
  if (regex.test(s)) {
    let newArray = s.split(":");
    if (Number(newArray[0]) !== 12) {
      hours = Number(newArray[0]) + 12;

    }else{
      hours = Number(newArray[0]);
    }
    
  }else{
    let newArray = s.split(":");
    if (Number(newArray[0]) !== 12) {
      hours = newArray[0]
    }else{
      hours = "00"
    }
    
  }

  return hours  +":" + newArray[1] + ":" + newArray[2].replace(/am|pm/i, "");
}

console.log(timeConversion("12:05:45AM"));
