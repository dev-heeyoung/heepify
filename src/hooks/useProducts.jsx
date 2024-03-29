import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getProducts, addNewProduct } from '../api/firebase';

export default function useProducts() {
    const queryClient = useQueryClient();

    const productsQuery = useQuery(['products'], getProducts, { staleTime: 1000 * 60 });

    const addProduct = useMutation(
        ({product, sizeOption, url}) => addNewProduct(product, sizeOption, url),
        {
        onSuccess: () => queryClient.invalidateQueries(['products']),
        }
    )
    return { productsQuery, addProduct }
}

