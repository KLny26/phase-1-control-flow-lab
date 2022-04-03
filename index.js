function scuberGreetingForFeet(ride){
  if(ride <= 400) return("This one is on me!")
  if(ride <2000) return("That will be twenty bucks.")
  if(ride > 2000 && ride <= 2500) return("I will gladly take your thirty bucks.")
  if(ride >2500) return("No can do.")
}
function ternaryCheckCity(whereto){
  return whereto === 'NYC'? 'Ok, sounds good.' : 'No go.'
}
function switchOnCharmFromTip(benice){
  switch(benice){
    case 'generous' :
      return('Thank you so much.')
    case 'not as generous' :
      return('Thank you.')
    default:
      return('Bye.')
  }
}