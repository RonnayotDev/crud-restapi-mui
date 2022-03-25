import React,{ useState,useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Link from '@mui/material/Link';
import TableList from './tableList'

  
export default function SimpleContainer() {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch("https://www.mecallapi.com/api/users")
          .then(res => res.json())
          .then(
            (result) => {
              setItems(result);
            },
          )
      }, [])
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ p: 2 }}>
        <Paper elevation={3} sx={{p:2}}>
          <Box sx={{ display: "flex" }}>
            <Box sx={{ flexGrow: 1 }}>
              <strong>Users</strong>
            </Box>
            <Link href="create">
            <Button variant="contained">Created</Button>
            </Link>
          </Box>{" "}
          <TableList items={items}/>
        </Paper>
      </Container>
    </React.Fragment>
  );
}
