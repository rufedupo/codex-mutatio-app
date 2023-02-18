import { Avatar } from "@mui/material";

interface AAvatarProps {
    image: any,
    alt?: string,
    width: number,
    height: number,
    variant?: any
}

export default function AAvatar({image, alt, width, height, variant}: AAvatarProps) {
    return (
        <Avatar src={image} sx={{ width: {width}, height: {height}}} variant={variant}/>
    );
}