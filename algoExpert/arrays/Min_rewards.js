// function minRewards(scores) {
//   // Write your code here.
//   let localMins = []; // next for loop,
//   let localMaxes = {}; // key = index,  value is true
//   let gifts = Array(scores.length).fill(1);

//   for (let i = 0; i < scores.length; i++) {
//     if (isLocalMin(i, scores)) {
//       localMins.push(i);
//     }
//     if (isLocalMax(i, scores)) {
//       localMaxes[i] = true;
//     }
//   }

//   let index = 0; // index to key into localMins;

//   while (index < localMins.length) {
//     // iterate to the left
//     left: for (let i = localMins[index] - 1; i >= 0; i--) {
//       if (i in localMaxes) {
//         if (localMaxes[i] === true) {
//           gifts[i] = gifts[i + 1] + 1;
//           localMaxes[i] = false; // no need to modify again
//           break left;
//         } else {
//           break left;
//         }
//       }
//       gifts[i] = gifts[i + 1] + 1;
//     }

//     // iterate to the right
//     right: for (let j = localMins[index] + 1; j < scores.length; j++) {
//       if (j in localMaxes) {
//         if (localMaxes[j] === true) {
//           gifts[j] = gifts[j - 1] + 1;
//           localMaxes[j] = false;
//           break right;
//         } else {
//           break right;
//         }
//       }
//       gifts[j] = gifts[j - 1] + 1;
//     }

//     index++;
//   }

//   return gifts.reduce((a, b) => a + b);
// }

// function isLocalMin(i, scores) {
//   if (i === 0) {
//     return scores[i] < scores[i + 1];
//   }
//   if (i === scores.length - 1) {
//     return scores[i] < scores[i - 1];
//   }
//   return scores[i] < scores[i - 1] && scores[i] < scores[i + 1];
// }

// function isLocalMax(i, scores) {
//   if (i === 0) {
//     return scores[i] > scores[i + 1];
//   }
//   if (i === scores.length - 1) {
//     return scores[i] > scores[i - 1];
//   }
//   return scores[i] > scores[i - 1] && scores[i] > scores[i + 1];
// }

// solution below w/o errors

function minRewards(scores) {
  // Write your code here.
  let rewards = scores.map(_ => 1);
  let localMinIdxs = getLocalMins(scores);
  for (const localMinIdx of localMinIdxs) {
    expandFromMinIdx(localMinIdx, scores, rewards);
  }
  return rewards.reduce((acc, value) => acc + value);
}

function getLocalMins(array) {
  // if (array.length === 1) return [0];
  let mins = [];
  for (let i = 0; i < array.length; i++) {
    if (i === 0 && array[i] < array[i + 1]) mins.push(i);
    if (i === array.length - 1 && array[i] < array[i - 1]) {
      mins.push(i);
    }
    if (i === 0 || i === array.length - 1) continue;
    if (array[i - 1] > array[i] && array[i] < array[i + 1]) {
      mins.push(i);
    }
  }
  return mins;
}

function expandFromMinIdx(index, scores, rewards) {
  let leftIdx = index - 1;
  while (leftIdx >= 0 && scores[leftIdx] > scores[leftIdx + 1]) {
    rewards[leftIdx] = Math.max(rewards[leftIdx], rewards[leftIdx + 1] + 1);
    leftIdx--;
  }
  let rightIdx = index + 1;
  while (rightIdx < rewards.length && scores[rightIdx] > scores[rightIdx - 1]) {
    rewards[rightIdx] = rewards[rightIdx - 1] + 1;
    rightIdx++;
  }
}
