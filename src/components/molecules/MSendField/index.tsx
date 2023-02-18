import AIconButton from "@/components/atoms/AIconButton";
import { Paper } from "@mui/material";
import Box from "@mui/material/Box";
import SendIcon from '@mui/icons-material/Send';
import AInputBase from "@/components/atoms/AInputBase";

interface MSendFieldProps {
    placeholder: string,
    change?: (param?: any, param2?: any) => void,
    focus?: (param?: any, param2?: any) => void,
    blur?: (param?: any, param2?: any) => void,
    click?: (param?: any, param2?: any) => void,
    value: string
}

export default function MSendField({placeholder, change, focus, blur, click, value}: MSendFieldProps) {
    return (
        <Box>
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', borderRadius: '0px' }}
                elevation={6}
            >
                <AInputBase placeholder={placeholder} change={change} focus={focus} blur={blur} value={value}  />
                <AIconButton icon={<SendIcon />} click={click} disabled={value===''} />
            </Paper>
        </Box>
    );
}