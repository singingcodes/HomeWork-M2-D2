// <!-- MANDATORY JS EXERCISES (create a different file for this exercise)
// 1) Save this array in a variable called genres: ["Comedy", "Drama", "Romance", "Horror", "Sci-Fi", "Documentary"]
// 2) Create an unordered list using JavaScript and save it in a variable
// 3) Cycle the array and create a list-item via JavaScript for every element
// 4) Insert the genre as text in the list-item
// 5) Append the list items in the unordered list
// 6) Append the unordered list in the document. The list should appear in the page.
// -->
let genres = ["Comedy", "Drama", "Romance", "Horror", "Sci-Fi", "Documentary"];
let unorderedList = document.createElement("ul");
for (let i = 0; i < genres.length; i++) {
  let listItem = document.createElement("li");
  listItem.innerText = genres[i];
  unorderedList.appendChild(listItem);
}

document.body.appendChild(unorderedList);
