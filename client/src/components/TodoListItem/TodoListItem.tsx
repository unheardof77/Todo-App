import { ListItemProps } from "../../utils/types";
import { Box, Button, Typography } from "@mui/material";

export default function TodoListItem({message, deleteTodo}:ListItemProps){
    

    return(
        <Box>
            <Typography>{message}</Typography>
            <Button onClick={deleteTodo}>Delete</Button>
        </Box>
    )
}