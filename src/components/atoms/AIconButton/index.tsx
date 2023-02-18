import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import { ReactNode } from 'react';

interface AIconButtonProps {
    icon: ReactNode,
    click?: (param?: any, param2?: any) => void,
    color?: string
}

export default function AIconButton({icon, click, color}: AIconButtonProps) {
    return (
        <IconButton type="button" sx={{ color: {color} }} aria-label="search" onClick={click}>
            {icon}
        </IconButton>
    );
}