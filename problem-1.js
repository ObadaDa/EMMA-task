const getCommonChars = (arr) => {
    arr.sort((a, b) => a.length - b.length);

    const smallestString = arr[0];
    
    const commonChars = new Set(Array.from(smallestString));
    
    commonCharsLoop: for(const char of commonChars) {
        for(const item of arr) {
            if(!item.includes(char)){
                commonChars.delete(char);
                continue commonCharsLoop;
            }
        }
    }
    
    return Array.of(...commonChars);
}

const example1 = [
    "hello world",
    "this is a test",
    "this is an example"
];

const result = getCommonChars(example1);

console.log(result);

