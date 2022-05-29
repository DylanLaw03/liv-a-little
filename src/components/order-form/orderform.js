import { Button, Select, TextField } from '@material-ui/core';
import { Box } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import { useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';

const sendPurchaseRequest = async (name, contactInfo, numStickers) => {

    // POST to /purchaseRequest
    let response = await fetch("https://liv-a-little-api.herokuapp.com/purchaseRequest",{
    method: "POST",
    headers: {
        'accept': 'application/json',
        'Content-Type': "application/json"
      },
    body: JSON.stringify({"name": name,
                        "contactInfo": contactInfo,
                        "numStickers": numStickers})
    })

    return response;
}



export const OrderForm = (props) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('')
    const [numStickers, setNumStickers] = useState(1)

    // handlers
    const handleSubmit = async (event) => {
        console.log(numStickers)
        let request = await sendPurchaseRequest(name, phoneNumber, numStickers);
        if (request.status === 200) {
            alert("Request Sent")
        }

    }

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    }

    const handleNumStickersChange = (event) => {
        setNumStickers(event.target.value)
    }
    return (
        <Box className='order-form-box'>
            <form className='order-form'>
                <Box className='order-form-name-box'>
                    <label className='order-form-name-label'>
                        <TextField 
                        onChange={handleNameChange}
                        value={name}
                        placeholder='Full Name'/>
                    </label>
                </Box>

                <Box className='order-form-phone-number-box'>
                    <label className='order-form-phone-number-label'>
                    <TextField 
                        onChange={handleNumberChange}
                        value={phoneNumber}
                        placeholder='Phone Number or Email'/>
                    </label>
                </Box>

                <Box className='order-form-number-stickers-box'>
                <InputLabel id="order-form-number-stickers-helper-label">Number of Stickers: </InputLabel>
                    <Select className='order-form-number-stickers'
                    labelId='order-form-number-stickers-helper-label'
                    onChange={handleNumStickersChange}
                    value={numStickers}
                    disableUnderline>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={9}>9</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                    </Select>
                </Box>



                <Box className='order-form-submit-button-box'>
                        <Button className='order-form-submit-button'
                        variant='contained'
                        disableElevation 
                        onClick={handleSubmit}>Submit</Button>
                </Box>
                
            </form>
        </Box>
    )
}