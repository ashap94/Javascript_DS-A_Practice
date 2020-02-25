function minRewards(scores) {
  // Write your code here.
  let localMins = []; // next for loop,
  let localMaxes = {}; // key = index,  value is true
  let gifts = Array(scores.length).fill(1);

  for (let i = 0; i < scores.length; i++) {
    if (isLocalMin(i, scores)) {
      localMins.push(i);
    }
    if (isLocalMax(i, scores)) {
      localMaxes[i] = true;
    }
  }

  let index = 0; // index to key into localMins;

  while (index < localMins.length) {
    // iterate to the left
    left: for (let i = localMins[index] - 1; i >= 0; i--) {
      if (i in localMaxes) {
        if (localMaxes[i] === true) {
          gifts[i] = gifts[i + 1] + 1;
          localMaxes[i] = false; // no need to modify again
          break left;
        } else {
          break left;
        }
      }
      gifts[i] = gifts[i + 1] + 1;
    }

    // iterate to the right
    right: for (let j = localMins[index] + 1; j < scores.length; j++) {
      if (j in localMaxes) {
        if (localMaxes[j] === true) {
          gifts[j] = gifts[j - 1] + 1;
          localMaxes[j] = false;
          break right;
        } else {
          break right;
        }
      }
      gifts[j] = gifts[j - 1] + 1;
    }

    index++;
  }

  return gifts.reduce((a, b) => a + b);
}

function isLocalMin(i, scores) {
  if (i === 0) {
    return scores[i] < scores[i + 1];
  }
  if (i === scores.length - 1) {
    return scores[i] < scores[i - 1];
  }
  return scores[i] < scores[i - 1] && scores[i] < scores[i + 1];
}

function isLocalMax(i, scores) {
  if (i === 0) {
    return scores[i] > scores[i + 1];
  }
  if (i === scores.length - 1) {
    return scores[i] > scores[i - 1];
  }
  return scores[i] > scores[i - 1] && scores[i] > scores[i + 1];
}
