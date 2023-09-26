import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { CiSquareRemove } from 'react-icons/ci'
import useCart from '../hooks/useCart';

export default function CartItem({ product, product: {id, imageURL, category, title, selectedOption, price, quantity, sizeOption }}) {
    const [ subTotal, setSubTotal ] = useState(price * quantity);
    const { addOrUpdateItem, removeItem } = useCart();
    const navigate = useNavigate();

    const handlePlus = () => {
        setSubTotal(price * (quantity + 1))
        addOrUpdateItem.mutate({...product, quantity: quantity + 1});
    }

    const handleMinus = () => {
        if (quantity < 2) return;
        addOrUpdateItem.mutate({...product, quantity: quantity - 1});
        setSubTotal(price * (quantity - 1))
    }

    const handleDelete = () => removeItem.mutate(id);

    const handleSelect = (e) => {
        const changedOption = e.target.value;
        if (selectedOption === changedOption) return;
        addOrUpdateItem.mutate({...product, selectedOption: changedOption});
    }

    return (
        <li className='grid grid-cols-5 grid-rows-2 py-1 items-center gap-3 md:grid-cols-8 md:grid-rows-1 md:grid-row-none'>
            <img 
                src={imageURL} 
                alt='product' 
                onClick={() => {
                    navigate(`/products/${id}`, { state: { product } })}} 
                className='row-span-2 mr-3 cursor-pointer object-cover'/>
            <div className='col-span-2 text-left items-center align-middle'>
                <p className='opacity-60'>{category}</p>
                <h1>{title}</h1>
            </div>
            <select name="option" defaultValue={selectedOption} onChange={handleSelect} className='row-start-2 col-start-2 md:col-start-4 md:row-start-1 h-fit w-full px-3 py-0.5 border-border'>
                {sizeOption?.map((option, index) => <option key={index} value={option} >{option}</option>)}
            </select>
            <p className='text-end hidden md:text-center place-self-end md:flex md:place-self-center'>${price}</p>
            <div className='flex col-start-3 col-end-4 md:col-start-6 md:col-span-1 justify-between w-full h-fit border border-border bg-white items-center py-0.5 px-2'>
                    <AiOutlineMinus onClick={handleMinus} className='cursor-pointer'/>
                    <p className='mx-2'>{quantity}</p>
                    <AiOutlinePlus onClick={handlePlus} className='cursor-pointer'/>
            </div>
            <p className='flex justify-self-end row-start-1 col-start-4 row-span-2 md:row-span-1 md:col-start-7'>${subTotal}</p>
            <CiSquareRemove onClick={handleDelete} className='text-3xl text-point cursor-pointer justify-self-end row-start-1 row-end-3 col-start-5 row-span-3 md:row-span-1 md:row-start-1 md:row-end-1 md:col-start-8'/>
        </li>
    );
}

