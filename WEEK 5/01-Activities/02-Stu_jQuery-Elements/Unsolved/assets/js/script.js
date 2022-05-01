// TODO: Select the existing DOM element, <div id="root">, and assign to a new variable
// Hint: Visit the documentation https://api.jquery.com/

// TODO: Create a `<p>` element that will store an author's name and assign that created element to a new variable
 var root = $ ('#root');
// TODO: Add the following text to the newly created `<p>` element: "~ Carol Dweck"
var pEL = $('<p>')
// TODO: Add the class `plain` to the author element
pEL.text ('~ Carol Dweck')
// TODO: Create a new `<h1>` element that will store an author's quote and assign it to new variable
pel.attr ('class', 'plain')
pEL.addclass ('plain')

// TODO: Add the following quote text to the quote element, "Love Challenges, Be Intrigued by Mistakes, Enjoy Effort, and Keep Learning."
var h1E1 = $ ('<h1>Love Challenges, Be Intrigued by Mistakes, Enjoy Effort, annd Keep Learning')
// TODO: Apply the class `fancy` to the quote element
h1E1.addClass ('fancy')
// TODO: Append the author element to the quote element
pE1.append(h1E1);
// TODO: Append the quote element to the HTML element with an ID of `root` in `index.html`
root.append(h1E1)