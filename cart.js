module.exports = function(shoppingList) {
  const items = {
    Orange: 0,
    Apple: 0,
    Banana: 0
  };

  shoppingList.forEach((item) => {
    items[item]++
  });

  const OrangeCost = calculateOrangeCost(items.Orange);
  const AppleCost = calculateAppleBananaCost(items.Apple, items.Banana);

  return OrangeCost + AppleCost
}

function calculateAppleBananaCost(numOfApples, numOfBananas) {
  let spareFruit;
  let spareFruitDivision;
  let spacreFruitRest;

  if (numOfApples < numOfBananas) {
    spareFruit = numOfBananas - numOfApples
    spareFruitDivision = Math.floor(spareFruit / 2)
    spacreFruitRest = (spareFruitDivision + (spareFruit % 2)) * 20
  } else {
    spareFruit = numOfApples - numOfBananas
    spareFruitDivision = Math.floor(spareFruit / 2)
    spacreFruitRest = (spareFruitDivision + (spareFruit % 2)) * 60
  }

  const pairsCount = Math.min(numOfApples, numOfBananas);

  const pairCost = pairsCount * 60

  return pairCost + spacreFruitRest
}

function calculateOrangeCost(numOfOranges) {
  const division = numOfOranges / 3;
  const rest = numOfOranges % 3;

  return (Math.floor(division) * 2 + rest)  * 25;
}