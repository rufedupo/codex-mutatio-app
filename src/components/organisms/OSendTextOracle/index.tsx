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
import HexagonIcon from '@mui/icons-material/Hexagon';

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

const coins = [
    { id: 0, name: 'cara', value: 3, image: 'https://raw.githubusercontent.com/rufedupo/codex-mutatio-app/main/public/assets/images/faceCoin.png' },
    { id: 1, name: 'coroa', value: 2, image: 'https://raw.githubusercontent.com/rufedupo/codex-mutatio-app/main/public/assets/images/crownCoin.png' }
];

const yinYangs = [
    { id: 0, name: 'Pequeno Yin', value: 6, principal: '--', complement: '---' },
    { id: 1, name: 'Yang', value: 7, principal: '---', complement: '---' },
    { id: 2, name: 'Yin', value: 8, principal: '--', complement: '--' },
    { id: 3, name: 'Grande Yang', value: 9, principal: '---', complement: '--' }
];

const symbols = [
    { id: 0, name: 'Céu', firstLine: '---', secondLine: '---', thirtLine: '---'},
    { id: 1, name: 'Trovão', firstLine: '--', secondLine: '--', thirtLine: '---'},
    { id: 2, name: 'Água', firstLine: '--', secondLine: '---', thirtLine: '--'},
    { id: 3, name: 'Montanha', firstLine: '---', secondLine: '--', thirtLine: '--'},
    { id: 4, name: 'Terra', firstLine: '--', secondLine: '--', thirtLine: '--'},
    { id: 5, name: 'Vento', firstLine: '---', secondLine: '---', thirtLine: '--'},
    { id: 6, name: 'Fogo', firstLine: '---', secondLine: '--', thirtLine: '---'},
    { id: 7, name: 'Lago', firstLine: '--', secondLine: '---', thirtLine: '---'}
]

const codeHexagrams = [
    { code: 1, outside: 0, inside: 0},
    { code: 2, outside: 4, inside: 4},
    { code: 3, outside: 2, inside: 1},
    { code: 4, outside: 3, inside: 2},
    { code: 5, outside: 2, inside: 0},
    { code: 6, outside: 0, inside: 2},
    { code: 7, outside: 4, inside: 2},
    { code: 8, outside: 2, inside: 4},
    { code: 9, outside: 5, inside: 0},
    { code: 10, outside: 0, inside: 7},
    { code: 11, outside: 4, inside: 0},
    { code: 12, outside: 0, inside: 4},
    { code: 13, outside: 0, inside: 6},
    { code: 14, outside: 6, inside: 0},
    { code: 15, outside: 4, inside: 3},
    { code: 16, outside: 1, inside: 4},
    { code: 17, outside: 7, inside: 1},
    { code: 18, outside: 3, inside: 5},
    { code: 19, outside: 4, inside: 7},
    { code: 20, outside: 5, inside: 4},
    { code: 21, outside: 6, inside: 1},
    { code: 22, outside: 3, inside: 6},
    { code: 23, outside: 3, inside: 4},
    { code: 24, outside: 4, inside: 1},
    { code: 25, outside: 0, inside: 1},
    { code: 26, outside: 3, inside: 0},
    { code: 27, outside: 3, inside: 1},
    { code: 28, outside: 7, inside: 5},
    { code: 29, outside: 2, inside: 2},
    { code: 30, outside: 6, inside: 6},
    { code: 31, outside: 7, inside: 3},
    { code: 32, outside: 1, inside: 5},
    { code: 33, outside: 0, inside: 3},
    { code: 34, outside: 1, inside: 0},
    { code: 35, outside: 6, inside: 4},
    { code: 36, outside: 4, inside: 6},
    { code: 37, outside: 5, inside: 6},
    { code: 38, outside: 6, inside: 7},
    { code: 39, outside: 2, inside: 3},
    { code: 40, outside: 1, inside: 2},
    { code: 41, outside: 3, inside: 7},
    { code: 42, outside: 5, inside: 1},
    { code: 43, outside: 7, inside: 0},
    { code: 44, outside: 0, inside: 5},
    { code: 45, outside: 7, inside: 4},
    { code: 46, outside: 4, inside: 5},
    { code: 47, outside: 7, inside: 2},
    { code: 48, outside: 2, inside: 5},
    { code: 49, outside: 7, inside: 6},
    { code: 50, outside: 6, inside: 5},
    { code: 51, outside: 1, inside: 1},
    { code: 52, outside: 3, inside: 3},
    { code: 53, outside: 5, inside: 3},
    { code: 54, outside: 1, inside: 7},
    { code: 55, outside: 1, inside: 6},
    { code: 56, outside: 6, inside: 3},
    { code: 57, outside: 5, inside: 5},
    { code: 58, outside: 7, inside: 7},
    { code: 59, outside: 5, inside: 2},
    { code: 60, outside: 2, inside: 7},
    { code: 61, outside: 5, inside: 7},
    { code: 62, outside: 1, inside: 3},
    { code: 63, outside: 2, inside: 6},
    { code: 64, outside: 6, inside: 2}
]

let rowsCalculate: any[] = [];
let hexagramsLogList: any[] = [];

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
        setDisplayCalculate('none');
        rowsCalculate = [];
    };

    const handleFocusInput = () => {
        setFocusText((prev) => !prev);
    };

    const onClickCoinButton = () => {
        if (coinTime < 6) { 
            let oneCoin = coins[Math.floor(Math.random() * 2)];
            let twoCoin = coins[Math.floor(Math.random() * 2)];
            let threeCoin = coins[Math.floor(Math.random() * 2)];
            let sumCoins = oneCoin.value + twoCoin.value + threeCoin.value;
            let yinYang = yinYangs.find((yy) => yy.value == sumCoins);
            rowsCalculate[coinTime] = { 
                id: coinTime,
                values: [oneCoin.image, twoCoin.image, threeCoin.image],
                sum: oneCoin.value+'+'+twoCoin.value+'+'+threeCoin.value+'='+sumCoins,
                name: yinYang?.name,
                principal: yinYang?.principal,
                complement: yinYang?.complement
            };
            setCoinTimes(coinTime + 1);
        } 
        if (coinTime === 0) setDisplayCalculate('');
    };

    const onClickCreateHexagrams = () => {  
        let symbolOutsidePrincipal = symbols.find(symbol => rowsCalculate[5].principal === symbol.firstLine && 
                                                   rowsCalculate[4].principal === symbol.secondLine &&
                                                   rowsCalculate[3].principal === symbol.thirtLine);

        let symbolInsidePrincipal = symbols.find(symbol => rowsCalculate[2].principal === symbol.firstLine && 
                                                  rowsCalculate[1].principal === symbol.secondLine &&
                                                  rowsCalculate[0].principal === symbol.thirtLine);
        let hexagramPrincipal = codeHexagrams.find(hp => hp.outside === symbolOutsidePrincipal?.id && hp.inside === symbolInsidePrincipal?.id);
        let symbolOutsideComplement = symbols.find(symbol => rowsCalculate[5].complement === symbol.firstLine && 
                                                    rowsCalculate[4].complement === symbol.secondLine &&
                                                    rowsCalculate[3].complement === symbol.thirtLine);
 
        let symbolInsideComplement = symbols.find(symbol => rowsCalculate[2].complement === symbol.firstLine && 
                                                   rowsCalculate[1].complement === symbol.secondLine &&
                                                   rowsCalculate[0].complement === symbol.thirtLine);
        let hexagramComplement = codeHexagrams.find(hc => hc.outside === symbolOutsideComplement?.id && hc.inside === symbolInsideComplement?.id);                                           
        console.log('principal');
        console.log(symbolOutsidePrincipal);  
        console.log(symbolInsidePrincipal);  
        console.log(hexagramPrincipal);

        console.log('complementar');
        console.log(symbolOutsideComplement);  
        console.log(symbolInsideComplement);  
        console.log(hexagramComplement);
        let count = 0;
        codeHexagrams.forEach(c => {
            hexagramsLogList[count] = c.code + ' = ' + symbols.find(s => s.id === c.outside)?.name + '/'+ symbols.find(s => s.id === c.inside)?.name;
            count++;
        });
        console.log(hexagramsLogList);
    }

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
                        <Box display='flex' justifyContent='space-between'>
                            <Box sx={{ marginTop: '15px' }}>
                                <AImage image={coins[0].image} alt='cara' width={100} height={100} />
                                <Typography variant='caption' color='#d7cfa5' component="div">CARA</Typography>
                            </Box> 
                            <Box>
                                <Typography variant='h6' color='rgb(255 111 111)' component="div">{coinTime}/6 VEZES</Typography>
                                <Button variant="contained" startIcon={<TollIcon />} 
                                    color="error"
                                    onClick={onClickCoinButton}
                                    disabled={coinTime>=6}
                                    sx={{ 
                                        bgcolor: '#ac001c', 
                                        color: '#e6ce5f',
                                        marginTop: '15px',
                                        "&:disabled": {
                                            color: '#5c5223'
                                        }
                                    }}>
                                        Jogar as moedas
                                </Button>
                            </Box>
                            <Box sx={{ marginTop: '15px' }}>
                                <AImage image={coins[1].image} alt='coroa' width={100} height={100} />
                                <Typography variant='caption' color='#847129' component="div">COROA</Typography>
                            </Box>   
                        </Box>
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
                                            <StyledTableCell key={'row_'+row.id+'_value'} component="th" scope="column">
                                                <Box display='flex'>
                                                    {row.values.map((image: any) => (
                                                        <AImage image={image} alt='coroa' width={20} height={20} />
                                                    ))}
                                                </Box>
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
                        <Button variant="contained" startIcon={<HexagonIcon />} 
                            color="error"
                            onClick={onClickCreateHexagrams}
                            disabled={coinTime<6}
                            sx={{ 
                                bgcolor: '#ac001c', 
                                color: '#e6ce5f',
                                marginTop: '15px',
                                "&:disabled": {
                                    color: '#5c5223'
                                }
                            }}>
                                Gerar Hexagramas
                        </Button>
                    </Box>
                </Collapse>
            </Box>
        </Box>
    );
}