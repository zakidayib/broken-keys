// Good Luck 💪🏾
function brokenKeys(string1, string2) {
  let brokenElement = [];
  for (let i = 0; i < string1.length; i++) {
    if (string2[i] !== string1[i]) {
      brokenElement.push(string1[i]);
    }
  }

  return brokenElement;
}

console.log(brokenKeys("good night", "gppd night"));
