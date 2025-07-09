const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true },
};

const names = ["Bob", "Ted", "Yossi"];

for (let name of names) {
  if (reservations[name]) {
    if (!reservations[name].claimed) {
      console.log("welcome "+ name);
    } else {
      console.log("Hmm, someone already claimed this reservation");
    }
  } else {
    console.log("You have no reservation")
    reservations[name] = {claimed: true}
  }
}
