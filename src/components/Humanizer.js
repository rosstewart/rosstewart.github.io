import React from "react";
import { Text, Heading} from "@chakra-ui/react";
// import { Avatar, Heading, VStack, Box, HStack } from "@chakra-ui/react";
// import FullScreenSection from "./FullScreenSection";
// import ProfilePic from "../profile.png";
import { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from '@fortawesome/free-solid-svg-icons';

function Humanizer() {
    const [inputValue, setInputValue] = useState('');
    const [outputValue, setOutputValue] = useState('');
    const [copyFeedback, setCopyFeedback] = useState(false);
    const [showError, setShowError] = useState('');
    const maxCharacters = 1750

    const validateInput = () => {
        if (inputValue.length === 0) {
            setShowError('Input cannot be empty.');
            return false;
        }
        if (inputValue.length > maxCharacters) {
            setShowError('Input exceeds the maximum allowed characters.');
            return false;
        }
        setShowError(''); // Reset the error
        return true;
    };

    const sendDataToLambda = async () => {
        if (validateInput()) {
            const lambdaUrl = 'https://po9hky5st1.execute-api.us-east-2.amazonaws.com/makeHum'; // Replace with your actual API Gateway URL
            try {
                const response = await axios.post(lambdaUrl, { body: inputValue });
                if (response.status === 200) {
                    console.log("Response from Lambda:", response.data.body);
                    // Here, response.data.body will contain the modified text
                    setOutputValue(response.data.body)
                } else {
                    console.error("Error from Lambda:", response);
                }
            } catch (error) {
                console.error("Error sending data to Lambda:", error);
            }
        }
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(outputValue)
            .then(() => {
                setCopyFeedback(true);
                setTimeout(() => {
                    setCopyFeedback(false);
                }, 2000); // hides feedback after 3 seconds
            });
    }


    return (
        <div style={{ marginBottom: "50px", width: "100%" }}>
            <Heading as="h1" style={{ textAlign: 'center', paddingBottom: '5px' }} size="lg" >AI Text Humanizer</Heading>
            <Text as="p" style={{ textAlign: 'center', paddingBottom: '30px' }} size="xs">Pass any AI detection software</Text>

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center', // Center the children (input and output sections)
                gap: '50px',
                maxWidth: '1280px',
                minWidth: '180px',
                margin: '0 auto',
                padding: '0 30px'
            }}>

                {/* Input Section */}
                <div style={{
                    flex: '1',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center', // Centered by default
                    width: '100%',
                    maxWidth: '640px',
                    minWidth: '300px'
                }}>
                    <Heading as="h2" style={{ alignSelf: 'start', paddingBottom: '10px' }} size="sm">Camouflage Your Text</Heading>
                    <textarea
                        style={{
                            color: 'black',
                            width: '100%',
                            maxWidth: '640px',
                            minWidth: '300px',
                            height: '200px',
                            padding: '10px',
                            borderRadius: '8px',
                            border: '1px solid #ccc',
                            resize: 'none',
                        }}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Type your text here..."
                    ></textarea>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%'
                    }}>
                        <div style={{ marginTop: '10px', padding: '0 7px 0' }}>
                            <button
                                style={{
                                    padding: '10px 15px',
                                    borderRadius: '5px',
                                    border: '1px solid rgba(255, 255, 255, 0.5)',
                                    backgroundColor: "rgba(0, 0, 0, 0.25)",
                                    color: '#fff',
                                    cursor: 'pointer'
                                }}
                                onClick={sendDataToLambda}
                            >
                                Humanize
                            </button>
                        </div>
                        <p style={{
                            color: (inputValue.length > maxCharacters) ? 'red' : 'white', alignSelf: 'start', marginTop: '7px', marginRight: '7px',
                            borderRadius: '4px',
                            padding: '3px 4.5px',
                            border: '1px solid rgba(255, 255, 255, 0.5)',
                            backgroundColor: "rgba(255, 255, 255, 0.25)",
                        }}>
                            {inputValue.length}/{maxCharacters}
                        </p>
                    </div>
                    {showError && <div style={{ color: 'red', marginTop: '5px' }}>{showError}</div>}
                </div>

                {/* Output Section */}
                {outputValue.length != 0 && <div style={{
                    flex: '1',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center', // Centered by default
                    width: '100%',
                    maxWidth: '640px',
                    minWidth: '300px'
                }}>
                    <Heading as="h2" style={{ alignSelf: 'start', paddingBottom: '10px' }} size="sm">Humanized Text</Heading>
                    <div
                        style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.3)',
                            width: '100%',
                            maxWidth: '640px',
                            minWidth: '300px',
                            height: '200px',
                            padding: '10px',
                            borderRadius: '8px',
                            border: '1px solid #ccc',
                            overflowY: 'scroll',
                        }}
                    >
                        {outputValue}
                    </div>
                    <div style={{ marginTop: '10px' }}>
                        <button
                            style={{
                                padding: '5px 10px',
                                borderRadius: '5px',
                                border: '1px solid rgba(255, 255, 255, 0.5)',
                                backgroundColor: "#fff",
                                color: '#000000',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                fontSize: '0.85rem',
                                gap: '8px'
                            }}
                            onClick={copyToClipboard}
                        >
                            {!copyFeedback && <FontAwesomeIcon icon={faCopy} />}
                            {copyFeedback ? "Copied!" : "Copy"}
                        </button>
                    </div>
                </div>}

            </div>
        </div>
    );

}

export default Humanizer;