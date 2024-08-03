// 7. Remove Duplicates
// In an online shopping application, customers can add multiple items to their cart. However, sometimes
// customers accidentally add the same item more than once, resulting in duplicate items in their cart. The
// duplicate items not only make it difficult for the customer to track the items they want to purchase but also
// affect the accuracy of the purchase order.
// To solve this problem, the application needs to remove duplicate items from thd customer's cart. The program
// should take the customer's cart with duplicates as input, and return a new cart without duplicates.
// Write a program to solve thd problem of duplicate items in the cart by removing duplicates.


// Certainly! To remove duplicate items from the customer’s cart, we can create a function that takes the cart as input and returns a new cart without duplicates. We’ll use JavaScript for this task.

// In this example:

// We use a Map to store unique items based on their unique identifier (e.g., product ID).
// We iterate through the original cart and add each item to the map if it’s not already present.
// Finally, we convert the map values back to an array, resulting in a new cart without duplicates.


function removeDuplicatesFromCart(cart) {
    // Create a map to track unique items based on their unique identifier (e.g., product ID)
    const uniqueItemsMap = new Map();

    // Iterate through each item in the cart
    for (const item of cart) {
        // Use a unique identifier (e.g., product ID) to check for duplicates
        const itemId = item.id;

        // If the item is not already in the map, add it
        if (!uniqueItemsMap.has(itemId)) {
            uniqueItemsMap.set(itemId, item);
        }
    }

    // Convert the map values back to an array (new cart without duplicates)
    const newCart = Array.from(uniqueItemsMap.values());

    return newCart;
}

// Example usage:
const customerCart = [
    { id: 1, name: "Product A" },
    { id: 2, name: "Product B" },
    { id: 1, name: "Product A" }, // Duplicate
    { id: 3, name: "Product C" },
];

const newCart = removeDuplicatesFromCart(customerCart);
console.log(newCart);
