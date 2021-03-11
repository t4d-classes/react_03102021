# Exercise 5

1. Update the table to be sortable. When a user clicks a column header on the table, the list of cars should sort in ascending order based on that column value. The default sort is by id.

Hints:

a. You can call useState multiple times within a single component.

b. Element's handle mouse clicks though the onClick event. It's similar to the onChange event.

c. JavaScript array supports a sort method. The sort method is an in-place sort, so you will need to copy the array before sorting it. Also, you will need to pass a custom comparison function to the sort function to sort based upon an object's property.

d. Remember, all changes to the UI are first a change to the model.