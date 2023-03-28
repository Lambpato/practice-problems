let convictedVictims = [];

const victim = () => {
  const victims = ['Bishan', 'Lamberto', 'Colin', 'Joyce', 'Brenda', 'Kevin', 'Justin', 'Sam', 'Tim', 'Kristian', 'Henry', 'Devin', 'Evan', 'Cynthia'];
  const pickVictim = () => victims[Math.floor(Math.random() * victims.length)];
  let currentVictim = pickVictim();

  while (convictedVictims.length < 14) {
    if (!convictedVictims.includes(currentVictim)) {
      convictedVictims.push(currentVictim);
      return convictedVictims[convictedVictims.length -1];
    } else {
      currentVictim = pickVictim();
    }
  }

  if (convictedVictims.length === 14){
    convictedVictims = [];
    convictedVictims.push(currentVictim);
    return convictedVictims[convictedVictims.length - 1];
  }
 }
