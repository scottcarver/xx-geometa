// import React, { useCallback } from 'react';
import { useState, useCallback } from '@wordpress/element';

const ClipboardComponent = () => {
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [clipboardData, setClipboardData] = useState('');

    const handleButtonClick = async () => {
        try {
            // Check if the clipboard API is available
            if (navigator.clipboard) {
                // Read the text from the clipboard
                const text = await navigator.clipboard.readText();
                setClipboardData(text);
                
                // Split the latitude and longitude
                const [lat, long] = text.split(',').map(coord => coord.trim());

                // Save the values separately
                setLatitude(lat);
                setLongitude(long);
            } else {
                console.error('Clipboard API is not supported in this browser.');
            }
        } catch (err) {
            console.error('Failed to read clipboard contents: ', err);
        }
    };

    return (
        <div>
            <button onClick={handleButtonClick}>Paste and Split Lat/Long</button>
            <div>
                <p>Clipboard Data: {clipboardData}</p>
                <p>Latitude: {latitude}</p>
                <p>Longitude: {longitude}</p>
            </div>
        </div>
    );
};

export default ClipboardComponent;
