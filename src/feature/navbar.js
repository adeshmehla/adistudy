import React,{useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
// import AdbIcon from '@mui/icons-material/Adb';

// const pages = ['11CLASS', '12CLASS'];

export const  Navbar=()=> {
  const [anchorElNav, setAnchorElNav] = useState(null);
const navigate = useNavigate("");
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
              ADI STUDY
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
                <MenuItem key={1} onClick={handleCloseNavMenu}>
                  {/* <Typography textAlign="center">{page}</Typography> */}
                  <Button textAlign="center"  onClick={() => navigate("/class11")}>11 class</Button>
                </MenuItem>
                <MenuItem key={2} onClick={handleCloseNavMenu}>
                  {/* <Typography textAlign="center">{page}</Typography> */}
                  <Button textAlign="center"  onClick={() => navigate("/class12")} >12 class</Button>
                </MenuItem>
                <MenuItem key={2} onClick={handleCloseNavMenu}>
                  <Button  sx={{ my: 2, color: 'white', display: 'block' }}  onClick={() => navigate("/about")} >About Us</Button>
                </MenuItem>
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' }, 
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            ADI STUDY
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

            <MenuItem key={1} onClick={handleCloseNavMenu}>
                  <Button  sx={{ my: 2, color: 'white', display: 'block' }} onClick={() => navigate("/class11")}>11 Class</Button>
                </MenuItem>
                <MenuItem key={2} onClick={handleCloseNavMenu}>
                  <Button  sx={{ my: 2, color: 'white', display: 'block' }}  onClick={() => navigate("/class12")} >12 Class</Button>
                </MenuItem>
                <MenuItem key={2} onClick={handleCloseNavMenu}>
                  <Button  sx={{ my: 2, color: 'white', display: 'block' }}  onClick={() => navigate("/about")} >About Us</Button>
                </MenuItem>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
