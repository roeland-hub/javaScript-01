# READ IT
## EX 13
* Examine the parseMovieData function. What has changed? Why aren't we using forEach here? 
* Look at the documentation of for...in
* Look at the documentation of the .sort(à function. Explain how it's applied here.
* Notice the 2 console.table() functions. Go back to exercise 10 and console.log the movies array  before and after the createList function. What's the difference? Can you explain why there is a difference?

The forEach method has been replaced by for...in, with which all enumerable properties of an object that are keyed by strings are iterated.
includung inherited enumerable 

.sort: sorts elements by yaer (orderByYear)

difference in order of objects in array.
the .sort() ordered the list by year.