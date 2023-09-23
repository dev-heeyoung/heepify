import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { CiSquareRemove } from 'react-icons/ci'
import useCart from '../hooks/useCart';

export default function CartItem({ item, item: {id, imageURL, category, title, selectedOption, price, quantity, sizeOption }}) {
    const [ subTotal, setSubTotal ] = useState(price * quantity);
    const { addOrUpdateItem, removeItem } = useCart();

    const handlePlus = () => {
        setSubTotal(price * (quantity + 1))
        addOrUpdateItem.mutate({...item, quantity: quantity + 1});
    }

    const handleMinus = () => {
        if (quantity < 2) return;
        addOrUpdateItem.mutate({...item, quantity: quantity - 1});
        setSubTotal(price * (quantity - 1))
    }

    const handleDelete = () => removeItem.mutate(id);

    const handleSelect = (e) => {
        const changedOption = e.target.value;
        if (selectedOption === changedOption) return;
        addOrUpdateItem.mutate({...item, selectedOption: changedOption});
    }

    return (
        <li className='grid grid-cols-8 grid-row-none py-1 gap-5'>
            <img src={imageURL} alt='product' className='mr-3'/>
            <div className='col-span-2 text-left items-center mt-2'>
                <p className='opacity-60'>{category}</p>
                <h1>{title}</h1>
            </div>
            <select name="option" defaultValue={selectedOption} onChange={handleSelect} className='h-fit px-2 py-0.5 w-3/5 justify-self-center border-border mt-5'>
                {sizeOption?.map((option, index) => <option key={index} value={option} >{option}</option>)}
            </select>
            <p className='text-center mt-5'>${price}</p>
            <div className='flex justify-between w-3/5 h-fit border border-border bg-white items-center justify-self-center mt-5 py-0.5 px-2'>
                    <AiOutlineMinus onClick={handleMinus} className='cursor-pointer'/>
                    <p className='mx-2'>{quantity}</p>
                    <AiOutlinePlus onClick={handlePlus} className='cursor-pointer'/>
            </div>
            <p className='text-right mt-5'>${subTotal}</p>
            <CiSquareRemove onClick={handleDelete} className='text-3xl text-point cursor-pointer justify-self-end mt-5'/>
        </li>
    );
}

