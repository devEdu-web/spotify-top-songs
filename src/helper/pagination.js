function getPagination(page: number) {
    const limit = 20;
    const currentPage = Math.abs(page)
    return ( currentPage - 1 ) * limit
}

export default getPagination