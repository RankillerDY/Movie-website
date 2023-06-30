import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, MenuItem } from '@mui/material'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
import { UserAuth } from './firebase/Authe'
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null | HTMLElement > (null))
  const { theme, toggle, dark } = useContext(ThemeContext)

  const { user, logOut, googleSignIn } = UserAuth();
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate()

  const styleAvatar = {
    position: "absolute",
    top: "50%",
    left: "15px",
    fontSize: "larger",
    zIndex: 1,
    transform: "translateY(-50%)",
  }

  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error);
    }
  }
  const ButtonStyle = {
    my: 2,
    alignItems: "center",
    backgroundColor: "black",
    borderRadius: "9px",
    display: "flex",
    fontFamily: "Outfit",
    fontSize: "1.2rem",
    justifyContent: "center",
    width: "55px",
    padding: "5.625px 11.25px",
    textAlign: "center",
    heigh: "55px"
  }
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate('/Dashboard')
    }
  }, [user])
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const open = Boolean(anchorEl)
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div className='container-fluid Heading' style={{
      backgroundColor: theme.backgroundColor,
      color: theme.color,
      outline: 'none',
    }}>
      <nav >
        <div className='container-fluid Navigation'>
          <div className='header-wrapper'>
            <button
              onClick={handleClick}
              id='resources-button'
              aria-controls={open ? 'resources-menu' : undefined}
              aria-aria-haspopup='true'
              aria-expanded={open ? 'true' : undefined}><i class="fa-sharp fa-solid fa-book-medical"></i></button>

            <Link to={`/`}><img src='assets/logo.png' className='header_img'></img></Link>

            <form action="#" class="search-form">
              <input type="text" class="search-bar"
                placeholder="Search Movies..." />
              <i class="fa-solid fa-magnifying-glass"></i>
            </form>

            <div className="check">
              <input
                id="check"
                type="checkbox"
                onClick={toggle}

                data-testid="toggle-theme-btn"
              />
              <label htmlFor="check"></label>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              {user?.displayName ? (
                <div>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar alt={user.email} src={user.photoURL} sx={styleAvatar} />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography textAlign="center"  ><Link to='/dashboard' style={{ textDecoration: "none" }}>Dashboard</Link></Typography>
                    </MenuItem>
                    <MenuItem>
                      <Typography textAlign="center" onClick={handleSignOut}>Logout</Typography>
                    </MenuItem>
                  </Menu>
                </div>
              ) : (
                <span style={ButtonStyle}>
                  <Button
                    sx={{ padding: 0 }}
                    onClick={handleGoogleSignIn}
                  >
                    {/* Sign in */}
                    <i class='bi bi-person-workspace' style={{ backgroundColor: 'black', padding: 0, color: 'white' }}></i>
                  </Button>
                </span>
              )}
            </div>
          </div>
        </div>
      </nav>
      {/* <h5>Find Movies, TV shows and more</h5> */}
      <Menu id='resources-menu' anchorEl={anchorEl} open={open} MenuListProps={{
        'aria-labelledby': 'resources-button'
      }}
        onClose={handleClose} className='dropdow-header'>
        <Link to={`/`}> <MenuItem onClick={handleClose}> <a href="#">Home</a></MenuItem></Link>
        <Link to={`/About`}>  <MenuItem onClick={handleClose}> <a href="#about">About</a></MenuItem></Link>
        <Link to={`/Contact`}><MenuItem onClick={handleClose}> <a href="#contact">Contact</a></MenuItem></Link>

      </Menu>

    </div>
  )
}
