import ReactMarkdown from 'react-markdown';
import { useState } from 'react';
import { Box, TextField } from '@mui/material';

export default function MarkDownArea(){
    const [mdInput, setmdInput] = useState("");
    return(
        <Box>
            <TextField multiline rows={5} value={mdInput} onChange={(e)=> setmdInput(e.currentTarget.value)}/>
            <ReactMarkdown children={mdInput}/>
        </Box>
    )
}