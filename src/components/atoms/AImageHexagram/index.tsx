import { Box } from "@mui/material"

interface AImageHexagramProps {
    src: any,
    width: number,
    height: number
}

export default function AImageHexagram({src, width, height}: AImageHexagramProps) {
    return (
        <Box>
            <img src={src} width={width} height={height} />
        </Box>
    )
}