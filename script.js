//your code here
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
function compareWithoutArticle(a, b) {
  const ignoreArticles = /^(a|an|the)\s+/i;
  const cleanA = a.replace(ignoreArticles, '');
  const cleanB = b.replace(ignoreArticles, '');
  return cleanA.localeCompare(cleanB);
}

touristSpots.sort(compareWithoutArticle);
console.log(touristSpots);
