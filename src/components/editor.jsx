import { Box,styled } from "@mui/material"
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import CodeMirror from 'react-codemirror2';
import {Controlled as ControlledEditor} from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import '../App.css';
import { useState } from "react";
const Container = styled(Box)`
      flex-grow:1;
      flex-basic:0;
      display:flex;
      flex-direction:column;
      padding:0 8px 8px;
`
const Heading = styled(Box)`
    background: #1d1e22;
    display: flex;
    padding: 9px 12px;

`
const Top = styled(Box)`
   background:#060606;
   display:flex;
   justify-content: space-between;
   font-weight: 700;
   color:#AAAEBC;
`
const Editor = ({heading,icon,color,value,onChange}) =>{
    const handleChange = (editor,data,value) =>{
        onChange(value);
    }
    const [open,setOpen] = useState(true);
    return (
        <Container style={open ? null:{flexGrow:0}}>
            <Top>
                <Heading>
                    <Box
                    component="span"
                    style={{
                        background:color,
                        height:20,
                        width:20,
                        display:'flex',
                        placeContent:'center',
                        borderRadius:5,
                        marginRight:5,
                        paddingBottom:2,
                        color:"#000",
                    }}
                    >{icon}</Box>
                    {heading}
                </Heading>
                <CloseFullscreenIcon
                fontSize="small"
                style= {{ alignSelf:'center'}}
                onClick={()=>setOpen(prevState => !prevState)}
                />
            </Top>
            <ControlledEditor
            className='controlled-editor'
            value={value}
            onBeforeChange={handleChange}
            options={{
                theme:"material",
                lineNumbers:true,
            }}
            />
        </Container>
    )
}
export default Editor