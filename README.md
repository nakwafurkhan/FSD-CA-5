# FSD-CA-5


Simple Voting App
You are tasked with building a React app where users can vote on items. The app should allow the user to add items, vote on them, and remove items.
Requirements:
Add an Item (Create):
Implement a form where users can input an item (e.g., a movie title or product name) to vote for. When submitted, the item should be added to the
list below the form.
2. Vote for an Item (Update):
Each item should have a "Vote" button. When clicked, the vote count for that item should increase by 1 .
3. Remove an Item (Delete):
Each item should have a "Remove" button. When clicked, the item should be removed from the list.
Example Workflow:
1 . Start with an empty list.
2. The user adds "Pizza" and "Burger" to the list.
• List:
["Pizza (0 votes)" , "Burger (0 votes)" ]
3. The user votes for "Pizza".
• Updated List:
["Pizza (1 vote) ", "Burger (0 votes)
4. The user clicks the "Remove" button next to "Burger".
• Updated List:
["Pizza (1 vote)" ]

Expected Behavior:
• Form Input Reset: After each successful submission, the form input should be cleared to allow for a new item to be added.
• Voting: When the "Vote" button is clicked, the corresponding item's vote count should increase by 1. If it's the first vote, the item's vote count should
display as "1 vote".
• Removing Items: The "Remove" button should delete an item from the list immediately when clicked.
• UI Updates: The list should update dynamically after any action (add, vote, remove).
Notes for Students:
• React Functional Components: Use React functional components and to manage the state of the list, votes, and form input.
• Handling Events: Use event handlers like and handle user actions for adding, voting, and removing items.
• State Management:
• Maintain an array of objects, where each object represents an item with its name and vote count (e.g.,
: "Pizza",
• When adding an item, push it to the state array.
• When voting for an item, update the corresponding vote count in the state.
• When removing an item, filter it out from the state array.
• Ul Updates: Ensure that after each action (add, vote, remove), the Ul correctly reflects the changes.
• Form Validation: Make sure the form cannot submit an empty item or duplicate items.
votes :