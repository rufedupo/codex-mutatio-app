import { List, ListItem, Paper, Typography, ListItemText, Box } from "@mui/material";

interface MStepListProps {
    title: string,
    description: string,
    stepsTitle: string,
    steps: string[]
}

export default function MStepList({title, description, stepsTitle, steps}: MStepListProps) {
    return (
        <Paper sx={{ 
            p: '2px 4px', 
            alignItems: 'center', 
            backgroundColor: '#ac001c',
            padding: '20px',
            color: '#e6ce5f'
        }}  square>
            <Typography variant='h6'>{title}</Typography><br/>
            <Typography variant='caption'>{description}</Typography>
            <Box sx={{paddingTop: '10px'}}>
                <Typography variant='subtitle2'>{stepsTitle}</Typography>
            </Box>
            <List dense={true}>
                {steps.map(s => 
                    <ListItem key={"step_"+s.substring(0)}>
                        <ListItemText
                            primary={s.substring(1, s.length)}
                        />
                    </ListItem>
                )}
            </List>
        </Paper>
    );
}