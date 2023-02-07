import { Input, Box, Button } from "@mui/material";
import { ItemBarProps } from "../../utils/types";

export default function TodoItemBar({saveTodo, inputValue, handleInputChange}:ItemBarProps){

    return(
        <Box component="form" onSubmit={saveTodo}>
            <Input onChange={handleInputChange} value={inputValue} />
            <Button type="submit" >Add Item</Button>
        </Box>
    )
}