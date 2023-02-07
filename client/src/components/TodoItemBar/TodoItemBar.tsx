import { Input, Box, Button } from "@mui/material";
import { ItemBarProps } from "../../utils/types";

export default function TodoItemBar({saveTodo, inputValue, handleInputChange}:ItemBarProps){

    return(
        <Box>
            <Input onChange={handleInputChange} value={inputValue} />
            <Button onClick={saveTodo} >Add Item</Button>
        </Box>
    )
}