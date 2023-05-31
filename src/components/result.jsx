import { Box, styled } from "@mui/material";
import { DataContext } from "../context/dataprovider";
import { useContext, useState, useEffect } from "react";
const Container = styled(Box)`
     background:#e3e0ba;
     height:33vh;
`
const Result = () => {
    const [src, setSrc] = useState('');
    const { html, css, js } = useContext(DataContext);
    const srcCode = `
       <html>
         <body>${html}</body>
         <style>${css}</style>
         <script>${js}</script>
       </html>
    `
    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrc(srcCode);
        }, 1000);

        return () => clearTimeout(timeout);
    }, [html, css, js])
    return (
        <Container>
            <iframe
                srcDoc={src}
                title="Output"
                sandbox='allow-modals allow-forms allow-popups allow-scripts'
                width="100%"
                height="100%"
            />
        </Container>
    )
}
export default Result;