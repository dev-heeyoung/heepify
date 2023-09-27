import React from 'react';
import { useState, useRef } from 'react';
import { uploadImage } from '../../api/uploader';
import useProducts from '../../hooks/useProducts';
import Button from '../../components/Button';

export default function NewProduct() {
    const [ product, setProduct ] = useState({title:'', price:'', category:'', description:'' });
    const [ sizeOption, setSizeOption ] = useState([]);
    const [ file, setFile ] = useState();
    const inputImgRef = useRef();
    const { addProduct } = useProducts();
    const CATEGORY_OPTIONS = ['women', 'men', 'accessories'];
    const [checkList, setCheckList] = useState([
        { item: "free", checked: false },
        { item: "XS", checked: false },
        { item: "S", checked: false },
        { item: "M", checked: false },
        { item: "L", checked: false },
        { item: "XL", checked: false }
      ]);

    const handleChange = (e) => {
        const { name, value, checked, files } = e.target;

        if (name === 'file') {
            files && setFile(files[0]);
            return;
        }

        if (name === 'price' && value < 0 ) {
            alert('Please check the price');
            return;
        }

        if (name === 'size') {
            const index = checkList.findIndex((list) => list.item === value);
            checkList[index].checked = checked;
            setCheckList([...checkList]);

            if (checked) {
                setSizeOption([...sizeOption, value]);
            } else {
                setSizeOption((prev) => prev.filter((size) => size !== value));
            }
            return;
        }

        setProduct({...product, [name]: value });
    }

    const handleCheckboxReset = () => {
        for (const item of checkList) {
          item.checked = false;
        }
    
        setCheckList([...checkList]);
      };

    const checkboxValidation = () => {
        if( sizeOption === []) {
            alert('Please check the size option');
            return;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        checkboxValidation();

        uploadImage(file).then((url) => {
            addProduct.mutate(
                {product, sizeOption, url},
                {
                    onSuccess: () => {
                        setFile();
                        inputImgRef.current.value = '';
                        setProduct({title:'', price:'', category:'', description:'' })
                        setSizeOption([]);
                        handleCheckboxReset();
                        alert('Added to your products');
                    }
                }
            )
        })
    }
 

    return (
        <section className="font-basic m-auto max-w-screen-lg mt-10 mb-28 p-10 md:py-10 md:px-20">
            <h1 className='font-brand font-semibold text-4xl text-center mb-2'>Add New Product</h1>
            <p className='text-center pb-8 mb-10 border-b border-b-neutral-200'>Add new product to your website</p>
            <form onSubmit={handleSubmit} className='flex flex-col'>
                <div className='flex flex-col md:flex-row'>
                <div className='w-full md:w-1/2 relative flex flex-col'>
                    <div className='border w-full h-96 md:h-full relative mb-5 md:mb-0'>{file && <img src={file ? URL.createObjectURL(file) : ''} alt='selected file' className="absolute object-cover w-full h-full" />}</div>
                </div>
                <div className='flex flex-col w-full md:w-1/2 md:ml-5 justify-between'>
                    <div className='flex flex-col mb-3'> 
                        <label>TITLE</label>
                        <input type="text" name='title' value={product.title} required onChange={handleChange} className='border h-1/2 mt-1'/>
                    </div>
                    <div className='flex flex-col mb-3'> 
                        <label>PRICE</label>
                        <input type="number" name='price' value={product.price} required onChange={handleChange} className='border h-1/2 mt-1 appearance-none'/>
                    </div>
                    <div className='flex flex-col mb-3'> 
                        <label htmlFor="category" >CATEGORY</label>
                        <select id="category" name="category" required value={product.category} onChange={handleChange} className="h-1/2 mt-1 py-1 px-3 text-sm uppercase">
                        <option value=''>Please Select...</option>)
                        {CATEGORY_OPTIONS.map((category, key) => <option value={category} key={key}>{category}</option>)}
                        </select>
                    </div>
                    <div className='flex flex-col mb-3'> 
                        <label>SIZE</label>
                        <div className='flex flex-wrap justify-between'>
                            {checkList.map((option, index) => (
                            <div key={index} className='flex'>
                                <input type="checkbox" id={option.item} name='size' value={option.item} checked={option.checked} onChange={handleChange} className='peer scale-110 flex self-center cursor-pointer text-brand bg-gray-100 border-gray-300 rounded focus:ring-point focus:ring-2'/>
                                <label htmlFor={option.item} className='h-8 flex items-center pl-3 mr-2 opacity-70 peer-checked:opacity-100 cursor-pointer uppercase'>{option.item}</label>
                            </div>
                            )
                            )}
                        </div>
                    </div>
                    <div className='flex flex-col mb-0'> 
                        <label>DESCRIPTION</label>
                        <textarea name='description' value={product.description} rows={5} required onChange={handleChange} className='border mt-1 mb-5'/>
                    </div>
                    <input type="file" 
                        accept="image/*" 
                        name="file"
                        required 
                        onChange={handleChange} 
                        ref={inputImgRef}
                        className="text-sm text-neutral-500 file:cursor-pointer file:mr-4 file:py-2 file:px-4 file:border-0 file:font-semibold file:text-white file:bg-brand hover:file:opacity-80"/>
                </div>
                </div>
                <Button text='ADD PRODUCT' className='self-center mt-10 w-full'/>
            </form>
        </section>
    );
}

