const removeDuplicates =(arr) => {
    return Array.from(new Set(arr));
  }
  
  // Testing the removeDuplicates function
  const list = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7];
  const uniqueList = removeDuplicates(list);

  
  console.log("Original list:", list);
  console.log("List after removing duplicates:", uniqueList);