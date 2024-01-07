/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
    {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  	const categorySpendMap = new Map();

	const ret  = [];

  	for (const t of transactions) {
    	const { category, price} = t;
		const totalSpent = categorySpendMap.get(category) || 0;
		categorySpendMap.set(category, totalSpent + price);
  	}

	for (const [category, totalSpent] of categorySpendMap) {
		ret.push({
			category: category,
			totalSpent: totalSpent,
		})
	}

  	return ret;
}

module.exports = calculateTotalSpentByCategory;
