const getPaginatedIndex = (page, limit) => {
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    return [startIndex, endIndex];
};

const createPageMeta = (total_items, page, limit) => {
    const total_pages = Math.ceil(total_items / limit);
    return ({
        current_page: page,
        limit: limit,
        total_pages: total_pages,
        total_items: total_items,
        next_page: total_pages <= page ? null : page + 1,
        prev_page: page > 1 ? page - 1 : null
    });
};


exports.getPaginatedIndex = getPaginatedIndex;
exports.createPageMeta = createPageMeta;
