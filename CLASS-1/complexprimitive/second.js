//write a program to print the biggest number in an array.
var a = [2, 4, 5, 19, 3];
var max = a[0]; // Initialize max with the first element of the array

for (var i = 1; i < a.length; i++) {
    if (a[i] > max) {
        max = a[i]; // Update max if the current element is greater
    }
}
console.log("The biggest number is:", max);

