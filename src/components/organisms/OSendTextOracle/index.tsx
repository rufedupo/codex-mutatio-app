import MStepList from '@/components/molecules/MStepList';
import MSendField from '@/components/molecules/MSendField';
import { Box, Paper, Collapse, Typography, Button } from '@mui/material';
import { useState } from 'react';
import AIconButton from '@/components/atoms/AIconButton';
import ReplayIcon from '@mui/icons-material/Replay';
import TollIcon from '@mui/icons-material/Toll';

const steps: string[] = [
    '0É um bom momento para mudar de emprego?',
    '1Há algo que possa fazer para acelerar minha cura?',
    '2O que está atrapalhando o bom entendimento com meu parceiro?',
    '3Como faço para que meu chefe confie mais em minha capacidade?',
    '4É aconselhável iniciar tal projeto?',
    '5É conveniente tocar o projeto sozinho ou com algum sócio?'
]

export default function OSendTextOracle() {
    const [ question, setQuestion ] = useState('');
    const [ focusText, setFocusText ] = useState(false);
    const [ questionSended, setQuestionSended ] = useState(false);

    function seedQuestionOracle() {
        setQuestionSended((prev) => !prev);
    }

    function backQuestion() {
        setQuestionSended((prev) => !prev);
    }

    const handleFocusInput = () => {
        setFocusText((prev) => !prev);
    };

    return (
        <Box>
            <Box>
                <Collapse in={focusText} sx={{width: '700px'}} >
                    <MStepList
                        title='Formulação da pergunta'
                        description='Para que o Oráculo seja claro em sua resposta, a pergunta deve ser bem formulada. Obviamente, não tem sentido fazer perguntas muito genéricas, do tipo: Serei feliz? Sou atraente? Vou ganhar na Mega Sena? Ou qualquer outra pergunta cuja resposta se limite a "sim" ou "não".'
                        steps={steps} />
                </Collapse>

                <Collapse in={!questionSended} sx={{width: '700px'}} >
                    <Box sx={{  
                        position: 'fixed',
                        top: '370px',
                        width: '700px'
                    }}>
                        <MSendField placeholder='Pergunte ao oráculo' change={(event) => setQuestion(event.target.value)} focus={handleFocusInput} blur={handleFocusInput} value={question} click={seedQuestionOracle} />
                    </Box>
                </Collapse>
            </Box>
            <Box>
                <Collapse in={questionSended} sx={{width: '700px'}} >
                    <Paper elevation={6} sx={{ bgcolor: '#ac001c', display: 'flex', marginTop: '20px'}} square>
                        <Box sx={{margin: '15px', maxWidth: '100vh'}}>
                        <Typography variant='caption' color='rgb(255 111 111)' component="div">Pergunta feita ao oráculo</Typography>
                            <Typography variant='h6' color='#e6ce5f' component="div">{question}</Typography>
                        </Box>
                        <Box sx={{margin: '0 15px', paddingTop: '10px', marginLeft: 'auto'}}> 
                            <AIconButton icon={<ReplayIcon />} click={backQuestion} color="#e6ce5f" />
                        </Box>
                    </Paper>
                    <Box sx={{textAlign: '-webkit-center', padding:'10px'}}>
                        <Typography variant='caption' color='rgb(255 111 111)' component="div">JOGUE AS MOEDAS 6 VEZES PARA OBTER OS HEXAGRAMAS PRINCIPAL E COMPLEMENTAR</Typography>
                        <Button variant="contained" startIcon={<TollIcon />} 
                        color="error"
                        sx={{ 
                            bgcolor: '#ac001c', 
                            color: '#e6ce5f',
                            "::hover": {
                                bgcolor: '#fff'
                            }
                        }}>
                            Jogar as moedas
                        </Button>
                    </Box>
                </Collapse>
            </Box>
        </Box>
    );
}