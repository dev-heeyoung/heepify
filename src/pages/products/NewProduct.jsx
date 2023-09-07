import React from 'react';
import { useState } from 'react';
import { uploadImage } from '../../api/uploader';
import { addNewProduct } from '../../api/firebase';
import Button from '../../components/Button';

export default function NewProduct() {
    const [ product, setProduct ] = useState({});
    const [ sizeOption, setSizeOption ] = useState([]);
    const [ file, setFile ] = useState();

    const handleChange = (e) => {
        const { name, value, checked, files } = e.target;

        if (name === 'file') {
            files && setFile(files[0]);
            return;
        }

        if (name === 'size') {
            if (checked) {
                setSizeOption([...sizeOption, value]);
            } else {
                setSizeOption((prev) => prev.filter((size) => size !== value));
            }
            return;
        }

        setProduct({...product, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        uploadImage(file).then((url) => {
            addNewProduct(product, sizeOption, url)
        })
    }
 

    return (
        <section className="font-basic m-auto max-w-screen-lg border border-neutral-500 mt-12 py-14 px-20">
            <h1 className='font-brand font-semibold text-4xl text-center mb-2'>Add New Product</h1>
            <p className='text-center pb-8 mb-10 border-b border-b-neutral-200'>Add new product to your website</p>
            <form onSubmit={handleSubmit} className='flex flex-col'>
                <div className='flex'>
                <div className='w-1/3 relative flex flex-col'>
                    <div className='border w-full h-full relative'>{file && <img src={URL.createObjectURL(file)} alt='selected file' className="absolute object-cover w-full h-full" />}</div>
                </div>
                <div className='flex flex-col w-2/3 ml-5 justify-between'>
                    <div className='flex flex-col mb-3'> 
                        <label>TITLE</label>
                        <input type="text" name='title' value={product.title} required onChange={handleChange} className='border h-1/2 mt-1'/>
                    </div>
                    <div className='flex flex-col mb-3'> 
                        <label>PRICE</label>
                        <input type="number" name='price' value={product.price} required onChange={handleChange} className='border h-1/2 mt-1'/>
                    </div>
                    <div className='flex flex-col mb-3'> 
                        <label htmlFor="category" >CATEGORY</label>
                        <select id="category" name="category" required onChange={handleChange} className="h-1/2 mt-1 py-1 px-3 text-sm">
                            <option value="">--- Choose category ---</option>
                            <option value="women">WOMEN</option>
                            <option value="men">MEN</option>
                            <option value="accessories">ACCESSORIES</option>
                        </select>
                    </div>
                    <div className='flex flex-col mb-3'> 
                        <label>SIZE</label>
                        <div className='flex flex-wrap justify-between'>
                            <div className='flex'>
                                <input type="checkbox" id="free-checkbox" name="size" value="free" onChange={handleChange} className='peer scale-110 flex self-center cursor-pointer text-brand bg-gray-100 border-gray-300 rounded focus:ring-point focus:ring-2'/>
                                <label htmlFor="free-checkbox" className='h-8 flex items-center pl-3 mr-2 opacity-70 peer-checked:opacity-100 cursor-pointer'>FREE</label>
                            </div>
                            <div className='flex'>
                                <input type="checkbox" id="xs-checkbox" name="size" value="xs" onChange={handleChange} className='peer scale-110 flex self-center cursor-pointer text-brand bg-gray-100 border-gray-300 rounded focus:ring-point focus:ring-2'/>
                                <label htmlFor="xs-checkbox" className='h-8 flex items-center pl-3 mr-2 opacity-70 peer-checked:opacity-100 cursor-pointer'>XS</label>
                            </div>                            
                            <div className='flex'>
                                <input type="checkbox" id="s-checkbox" name="size" value="s" onChange={handleChange} className='peer scale-110 flex self-center cursor-pointer text-brand bg-gray-100 border-gray-300 rounded focus:ring-point focus:ring-2'/>
                                <label htmlFor="s-checkbox" className='h-8 flex items-center pl-3 mr-2 opacity-70 peer-checked:opacity-100 cursor-pointer'>S</label>
                            </div>
                            <div className='flex'>
                                <input type="checkbox" id="m-checkbox" name="size" value="m" onChange={handleChange} className='peer scale-110 flex self-center cursor-pointer text-brand bg-gray-100 border-gray-300 rounded focus:ring-point focus:ring-2'/>
                                <label htmlFor="m-checkbox" className='h-8 flex items-center pl-3 mr-2 opacity-70 peer-checked:opacity-100 cursor-pointer'>M</label>
                            </div>
                            <div className='flex'>
                                <input type="checkbox" id="l-checkbox" name="size" value="l" onChange={handleChange} className='peer scale-110 flex self-center cursor-pointer text-brand bg-gray-100 border-gray-300 rounded focus:ring-point focus:ring-2'/>
                                <label htmlFor="l-checkbox" className='h-8 flex items-center pl-3 mr-2 opacity-70 peer-checked:opacity-100 cursor-pointer'>L</label>
                            </div>
                            <div className='flex'>
                                <input type="checkbox" id="xl-checkbox" name="size" value="xl" onChange={handleChange} className='peer scale-110 flex self-center cursor-pointer text-brand bg-gray-100 border-gray-300 rounded focus:ring-point focus:ring-2'/>
                                <label htmlFor="xl-checkbox" className='h-8 flex items-center pl-3 mr-2 opacity-70 peer-checked:opacity-100 cursor-pointer'>XL</label>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col mb-3'> 
                        <label>DESCRIPTION</label>
                        <input type="text" name='description' value={product.description} required onChange={handleChange} className='border h-1/2 mt-1'/>
                    </div>
                    <input type="file" 
                        accept="image/*" 
                        name="file" r
                        equired 
                        onChange={handleChange} 
                        className="mt-2 text-sm text-neutral-500 file:cursor-pointer file:mr-4 file:py-2 file:px-4 file:border-0 file:font-semibold file:text-white file:bg-brand hover:file:opacity-80"/>
                </div>
                </div>
                <Button text='ADD PRODUCT' className='self-center mt-10'/>
            </form>
        </section>
    );
}

