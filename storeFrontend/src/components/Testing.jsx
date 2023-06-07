import axios from 'axios'
import TextField from '@mui/material/TextField'
import React, { useEffect, useState } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
function Testing() {
    const [description, setDescription] = useState('');
    const [itemName, setItemName] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [imgName, setImgName] = useState('');
    const [execute, setExecute] = useState(false);
    const { user } = useAuth0();
    const email = user.email;
    const onSelectFile = async (event) => {
        event.preventDefault();
        setExecute(true);
        console.log(event);
        const file = event.target[0].files[0];
        setImgName(file.name);
        const convertedFile = await convertToBase64(file);
        const formData = new FormData();
        formData.append('image', convertedFile);
        formData.append('imageName', file.name);
        const s3URL = await axios.post(
            'http://localhost:3000/aws/upload',
            formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        );
    }
    useEffect(() => {
        const sendData = async () => {
            try {
                const response = await axios.post(
                    `http://localhost:3000/db/add_item`,
                    {
                        email: email,
                        imageName: imgName,
                        itemName: itemName,
                        description: description,
                        price: price,
                        quantity: quantity

                    }
                );
            } catch (error) {
                console.log('this error');
                console.error(error); // Handle any errors that occur
            }
        }
        if (execute) {
            sendData();
        }
    }, [imgName])
    const convertToBase64 = (file) => {
        return new Promise(resolve => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                resolve(reader.result);
            }
        })
    }

    return (
        <form onSubmit={onSelectFile} >


            <div>
                <label>
                    Upload a picture of the item:
                    <input id='image' type="file" accept="image/*" />
                </label>
            </div>
            <div>
                <TextField id="outlined-basic" label="Item name" variant="outlined" name='name' value={itemName} onChange={e => setItemName(e.target.value)} />
            </div>
            <div>
                <TextField id="outlined-basic" label="Description" variant="outlined" name='description' value={description} onChange={e => setDescription(e.target.value)} />
            </div>

            <div>
                <TextField type='number' id="outlined-basic" label="Price ($)" variant="outlined" name='price' value={price} onChange={e => setPrice(e.target.value)} />
            </div>
            <div>
                <TextField type='number' id="outlined-basic" label="Quantity" variant="outlined" name='quantity' value={quantity} onChange={e => setQuantity(e.target.value)} />
            </div>
            <input type='submit' />
        </form >
    );

}

export default Testing;