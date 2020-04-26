const getPaginatedIndex = (page, limit) => {
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;

    return [startIndex, endIndex];

}

const [start] = getPaginatedIndex(3, 5);

console.log(start)