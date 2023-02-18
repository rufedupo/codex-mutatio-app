import { Avatar } from "@mui/material";

interface AIconButtonProps {
    image: any,
    alt?: string,
    width: number,
    height: number
}

export default function AImage({image, alt, width, height}: AIconButtonProps) {
    return (
        <Avatar src={image} sx={{ width: {width}, height: {height}}}/>
    );
}