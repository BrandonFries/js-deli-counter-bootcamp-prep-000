function takeANumber(katzDeliLine, customername) {
  katzDeliLine.push(customername);
  return "Welcome, ${customername}. You are number ${katzDeliLine.lenght} in line."
}
function nowServing(katzDeliLine) {
  if (katzDeliLine.length == 0)
  return "There is nobody waiting to be served!"
}else{
  return "Currently serving $katzDeliLine.shift()}."
}
}
