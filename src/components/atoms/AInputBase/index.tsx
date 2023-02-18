import { InputBase } from "@mui/material";
import { ReactNode } from "react";

interface AInputBaseProps {
    placeholder?: string,
    change?: (param?: any, param2?: any) => void,
    focus?: (param?: any, param2?: any) => void,
    blur?: (param?: any, param2?: any) => void,
    value: string
}

export default function AInputBase({placeholder, change, focus, blur, value}: AInputBaseProps) {
    return (
        <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder={placeholder}
            inputProps={{ 'aria-label': placeholder }}
            multiline={true}
            onChange={change}
            onFocus={focus}
            onBlur={blur}
            value={value}
        />
    );
}