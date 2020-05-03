const getPaginatedIndex = (page, limit) => {
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    return [startIndex, endIndex];
};
exports.getPaginatedIndex = getPaginatedIndex;
