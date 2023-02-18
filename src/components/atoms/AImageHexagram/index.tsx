import { Box } from "@mui/material"
import Image from "next/image"

interface AImageHexagramProps {
    src: string,
    width: number,
    height: number,
    alt: string
}

export default function AImageHexagram({src, width, height, alt}: AImageHexagramProps) {
    return (
        <Box>
            <img src={src.trim()!=='' && src!==undefined ? src : 'https://olaargentina.com/wp-content/uploads/2019/11/loading-gif-transparent-10.gif'} width={width} height={height} alt={alt} />
        </Box>
    )
}