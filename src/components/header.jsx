
import { AppBar, Toolbar, styled } from "@mui/material"
import Typography from '@mui/material/Typography';
import logo from "../logo.png"
const Styledbar = styled(AppBar)`
    background:#060606;
    height:9vh;
`
const StyledToolbar = styled(Toolbar)`
    
`
const Header = () => {
    return (
        <Styledbar position="static">
            <Toolbar>
                <img src={logo} alt="logo" style={{ padding: 3,width: 40 , borderRadius: 10}} />
                <Typography variant="h5" color="inherit" component="div">
                    WCode
                </Typography>
            </Toolbar>
        </Styledbar>
    )
}

export default Header