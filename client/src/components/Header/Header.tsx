import { Box, Button, Typography, Icon } from "@mui/material";
export default function Header(){


    return (
        <Box component="header">
            <Button>Calender</Button>
            <Button>Notes</Button>
            <Button>Todo's</Button>
            <Button>Login/Signup</Button>
        </Box>
    )
}