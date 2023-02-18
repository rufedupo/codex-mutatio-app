import { Box } from "@mui/material"
import Image from "next/image"

interface AImageHexagramProps {
    src: any,
    width: number,
    height: number,
    alt: string
}

export default function AImageHexagram({src, width, height, alt}: AImageHexagramProps) {
    return (
        <Box>
            <Image src={src} width={width} height={height} alt={alt} />
        </Box>
    )
}