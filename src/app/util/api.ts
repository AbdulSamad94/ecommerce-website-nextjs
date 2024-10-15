export const fetchProduct = async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    if (!response.ok) {
        throw new Error('Failed to fetch products data check your internet connection')
    }
    return await response.json();


}
export const fetchProductById = async (id: string) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch product');
    }
    return await response.json();
};