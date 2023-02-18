import MStepList from '@/components/molecules/MStepList';
import MSendField from '@/components/molecules/MSendField';
import { styled } from '@mui/material/styles';
import { Box, Paper, Collapse, Typography, Button, CardMedia } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useState } from 'react';
import AIconButton from '@/components/atoms/AIconButton';
import ReplayIcon from '@mui/icons-material/Replay';
import TollIcon from '@mui/icons-material/Toll';
import InfoIcon from '@mui/icons-material/Info';
import AImage from '@/components/atoms/AImage';

const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#ac001c',
      color: '#e6ce5f',
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

const StyledTableRow = styled(TableRow)(() => ({
    '&:nth-of-type(odd)': {
      backgroundColor: '#e6ce5f',
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

const steps: string[] = [
    '0É um bom momento para mudar de emprego?',
    '1Há algo que possa fazer para acelerar minha cura?',
    '2O que está atrapalhando o bom entendimento com meu parceiro?',
    '3Como faço para que meu chefe confie mais em minha capacidade?',
    '4É aconselhável iniciar tal projeto?',
    '5É conveniente tocar o projeto sozinho ou com algum sócio?'
]

const columnsCalculate = [
    'Valores',
    'Soma',
    'Nome',
    'Principal',
    'Complementar'
  ];

const rowsCalculate = [
    { id: 0, value: '', sum: '', name: '', principal: '', complement: '' },
    { id: 1, value: '', sum: '', name: '', principal: '', complement: '' },
    { id: 2, value: '', sum: '', name: '', principal: '', complement: '' },
    { id: 3, value: '', sum: '', name: '', principal: '', complement: '' },
    { id: 4, value: '', sum: '', name: '', principal: '', complement: '' },
    { id: 5, value: '', sum: '', name: '', principal: '', complement: '' }
  ];

export default function OSendTextOracle() {
    const [ question, setQuestion ] = useState('');
    const [ focusText, setFocusText ] = useState(false);
    const [ questionSended, setQuestionSended ] = useState(false);
    const [ coinTime, setCoinTimes ] = useState(0);
    const [ displayCalculate, setDisplayCalculate ] = useState('none');

    const seedQuestionOracle = () => {
        setQuestionSended((prev) => !prev);
    };

    const backQuestion = () => {
        setQuestionSended((prev) => !prev);
        setCoinTimes(0);
        setDisplayCalculate('none')
    };

    const handleFocusInput = () => {
        setFocusText((prev) => !prev);
    };

    const onClickCoinButton = () => {
        if (coinTime < 6) setCoinTimes(coinTime + 1);
        if (coinTime === 0) setDisplayCalculate('');
    };

    const onClickInfoOracle = () => {
        console.log('Info oracle');
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
                        <MSendField 
                            placeholder='Pergunte ao oráculo' 
                            change={(event) => setQuestion(event.target.value)} 
                            focus={handleFocusInput} 
                            blur={handleFocusInput} 
                            value={question} 
                            click={seedQuestionOracle}/>
                        <Box sx={{textAlign: '-webkit-center', padding:'10px'}}>
                            <Button variant="contained" startIcon={<InfoIcon />} 
                                color="error"
                                onClick={onClickInfoOracle}
                                sx={{ 
                                    bgcolor: '#ac001c', 
                                    color: '#e6ce5f',
                                    "::hover": {
                                        bgcolor: '#fff'
                                    }
                            }}>
                                Entender como funciona o ORÁCULO
                            </Button>
                        </Box>
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
                            <AIconButton icon={<ReplayIcon />} click={backQuestion} color="#e6ce5f" disabled={false} />
                        </Box>
                    </Paper>
                    <Box sx={{textAlign: '-webkit-center', padding:'10px'}}>
                        <Typography variant='caption' color='rgb(255 111 111)' component="div">JOGUE AS MOEDAS 6 VEZES PARA OBTER OS HEXAGRAMAS PRINCIPAL E COMPLEMENTAR</Typography>
                        <AImage image='https://raw.githubusercontent.com/rufedupo/codex-mutatio-app/main/public/assets/images/cara.png' alt='cara' width={100} height={100} />
                        <AImage image='https://raw.githubusercontent.com/rufedupo/codex-mutatio-app/main/public/assets/images/coroa.png' alt='coroa' width={100} height={100} />
                        <Typography variant='h6' color='rgb(255 111 111)' component="div">{coinTime}/6 VEZES</Typography>
                        <Button variant="contained" startIcon={<TollIcon />} 
                        color="error"
                        onClick={onClickCoinButton}
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
                    <Box display={displayCalculate} sx={{textAlign: '-webkit-center', padding:'10px'}}>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650, bgColor:'e6ce5f' }} size="small" aria-label="customized table">
                                <TableHead>
                                    <TableRow key="headerTable">
                                        {columnsCalculate.map(c => <StyledTableCell key={'header_'+c} align={ c === 'Valores' || c === 'Principal' || c === 'Complementar'  ? 'center' : 'left'}>{c}</StyledTableCell>)}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rowsCalculate.map((row) => (
                                        (row.name !== '') ?
                                        <StyledTableRow key={'row_'+row.id}>
                                            <StyledTableCell key={'row_'+row.id+'_value'} component="th" scope="row" align="center">
                                                {row.value}
                                            </StyledTableCell>
                                            <StyledTableCell key={'row_'+row.id+'_sum'} align="left">{row.sum}</StyledTableCell>
                                            <StyledTableCell key={'row_'+row.id+'_name'} align="left">{row.name}</StyledTableCell>
                                            <StyledTableCell key={'row_'+row.id+'_principal'} align="center">{row.principal}</StyledTableCell>
                                            <StyledTableCell key={'row_'+row.id+'_complement'} align="center">{row.complement}</StyledTableCell>
                                        </StyledTableRow> : <StyledTableRow key={'row_empty'+row.id}  sx={{display:'none'}}></StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                </Collapse>
            </Box>
        </Box>
    );
}