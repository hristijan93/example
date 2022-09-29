function findMultiples(integer, limit) {
    let answer = [];

    for (let i = 1; i <= limit; i++) {
        if(i % integer === 0) {
            answer.push(i);
        }
    }

    return answer;


}

console.log(findMultiples(5, 7));