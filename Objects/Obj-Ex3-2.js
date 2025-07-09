const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true },
};

const keys = Object.keys(reservations)
const names = ["Bob", "Ted","Yossi","BOB","ted"];

for (const name of names) {
    let memo;
    for(const key of keys){
        if (key.toUpperCase() === name.toUpperCase()){
            memo = key; 
            break;
        }
    }   
    if (reservations[memo]) {
    if (!reservations[memo].claimed) {
      console.log("welcome "+ name);
    } else {
      console.log("Hmm, someone already claimed this reservation");
    }
  } else {

    console.log("You have no reservation")
    reservations[memo] = {claimed: true}
  }
}
