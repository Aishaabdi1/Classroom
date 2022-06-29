-- Add your code below and execute file in MySQL Shell --
SELECT *
FROM favourite_books
JOIN book_prices ON favourite_books.book_price = book_prices.id;


