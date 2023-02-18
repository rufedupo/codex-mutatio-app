import MStepList from '@/components/molecules/MStepList';
import MSendField from '@/components/molecules/MSendField';
import { styled } from '@mui/material/styles';
import { Box, Paper, Collapse, Typography, Button } from '@mui/material';
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
import AAvatar from '@/components/atoms/AAvatar';
import HexagonIcon from '@mui/icons-material/Hexagon';
import AImageHexagram from '@/components/atoms/AImageHexagram';

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
    '0- É um bom momento para mudar de emprego?',
    '1- Há algo que possa fazer para acelerar minha cura?',
    '2- O que está atrapalhando o bom entendimento com meu parceiro?',
    '3- Como faço para que meu chefe confie mais em minha capacidade?',
    '4- É aconselhável iniciar tal projeto?'
]

const columnsCalculate = [
    'Valores',
    'Soma',
    'Nome',
    'Principal',
    'Complementar'
  ];

const coins = [
    { id: 0, name: 'cara', value: 3, image: 'https://raw.githubusercontent.com/rufedupo/codex-mutatio-app/main/public/assets/images/coins/faceCoin.png' },
    { id: 1, name: 'coroa', value: 2, image: 'https://raw.githubusercontent.com/rufedupo/codex-mutatio-app/main/public/assets/images/coins/crownCoin.png' }
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

const infoHexagrams = [
    {code: 1, image: 'https://raw.githubusercontent.com/rufedupo/codex-mutatio-app/main/public/assets/images/hexagrams/hexagram_1.png', title: 'O CRIATIVO', imageTitle:'Céu sobre céu', description:'O criativo é forte e luminoso. Encontra soluções para criar coisas novas. Êxito.', inside:'Força', outside:'Brilho', bottomLine:'Não é momento para fazer mudanças. Embora possua a força para realizá-las, ela ainda não está em seu apogeu.', twoLine:'Podem ser percebidos os efeitos positivos do próprio comportamento. O caminho escolhido é o correto.', threeLine:'Período de popularidade, de reconhecimento geral. Se não cair na arrogância, não haverá perigo.', fourLine:'É o momento adequado para escolher se quer se destacar ou se prefere o anonimato. Ambas as posições são corretas e possíveis.', fiveLine:'Avanço decidido no campo do trabalho, no campo social ou nos estudos.', topLine:'As últimas atuações estiveram maculadas pela soberba. É necessário retificar o quanto antes esse sentimento.'},
    {code: 2, image: 'https://raw.githubusercontent.com/rufedupo/codex-mutatio-app/main/public/assets/images/hexagrams/hexagram_2.png', title: 'O RECEPTIVO', imageTitle:'Terra sobre terra', description:'O receptivo é acolhedor. É capaz de sustentar outros e aceita a orientação de quem sabe guiar.', inside:'Perseverança', outside:'Receptivo', bottomLine:'É preciso prestar atenção aos primeiros sinais de decadência; somente assim poderá encará-la da maneira certa.', twoLine:'Com a verdade, serão alcançadas grandes metas. Não se deve tentar estratégias; mas ser natural.', threeLine:'Todo trabalho realizado é importante; buscar somente o que dá brilho é como começar a casa pelo telhado.', fourLine:'Em épocas de perigo, não se deve fazer nenhuma ostentação, mas, ao contrário, resguardar-se em solidão ou em meio a uma multidão.', fiveLine:'O êxito depende exclusivamente da discrição. Não se deve comentar os planos até o momento em que possam ser cumpridos.', topLine:'Quem está em posto subordinado deve acatar, não dirigir.'},
    {code: 3, image: 'https://raw.githubusercontent.com/rufedupo/codex-mutatio-app/main/public/assets/images/hexagrams/hexagram_3.png', title: 'DIFICULDADE INICIAL', imageTitle:'Água sobre trovão', description:'No começo, costuma haver dificuldade, e, diante delas, o sábio atua e contribui na condução da ação pelo caminho certo.', inside:'Arrojo e decisão', outside:'Perigo', bottomLine:'Se no início há impedimentos, não se deve avançar à força; o correto é deter-se com prudência.', twoLine:'As dificuldades são solucionadas de supetão, e isso produz desconfiança. É preciso aceitar a mudança.', threeLine:'Quando surgem dificuldades, é melhor pedir ajuda e conselho aos que já passaram por isso.', fourLine:'Se a própria força não é suficiente para dirimir as dificuldades, é necessário contar com o auxílio de outros.', fiveLine:'Há gente que se intromete e critica o que os outros fazem. Não é questão de brigar, mas de continuar perseverando com humildade.', topLine:'Pouco pode esperar aquele que se deixa abater pelos tropeços do início e abandona o empreendimento.'},
    {code: 4, image: 'https://raw.githubusercontent.com/rufedupo/codex-mutatio-app/main/public/assets/images/hexagrams/hexagram_4.png', title: 'A INSENSATEZ JUVENIL', imageTitle:'Montanha sobre água', description:'Quem não escuta e sempre crê estar com a razão se comporta como um nércio. Perde a possibilidade de aprender e não aproveita sua experiência.', inside:'Perigo', outside:'Imobilidade', bottomLine:'Impor limites não significa dominar, mas ensinar. Uma tentativa de repressão resulta em humilhação.', twoLine:'Não é necessário fazer tudo por si mesmo: o homem sábio solicita a ajuda de pessoas experientes para resolver seus problemas.', threeLine:'Os fracos buscam elevar-se imitanto os fortes. Não é preciso se importar com os aduladores.', fourLine:'Diante de um néscio que acredita mais em sua imaginação do que na realidade, a única coisa que se pode fazer é deixar que a realidade se imponha. Essa atitude traz humilhação.', fiveLine:'Buscar ensinamento com os que sabem traz grande ventura.', topLine:'Diante do néscio, é necessário defender-se dos abusos.'},
    {code: 5, image: 'https://raw.githubusercontent.com/rufedupo/codex-mutatio-app/main/public/assets/images/hexagrams/hexagram_5.png', title: 'A ESPERA (NUTRIÇÃO)', imageTitle:'Água sobre céu', description:'Quando alguém é forte diante do perigo, não se joga de cabeça nele para mudar a situação; sabe esperar.', inside:'Força', outside:'Perigo', bottomLine:'Quando o perigo ainda está longe, mas é detectado, o correto é seguir agindo com total naturalidade.', twoLine:'Quando aparecem as incompatibilidades, surge o alarme. As difamações se calam para quem é perseverante e não dá ouvido a elas.', threeLine:'Quando se dá um passo em falso, ficando em situação de perigo, sempre há aqueles que tentam se aproveitar da situação.', fourLine:'Se o perigo já está presente e a situação é desesperadora, a única coisa que se pode fazer é esperar que o destino se cumpra. Qualquer ação pode aumentar ainda mais o dano.', fiveLine:'É necessário aprender a reconhecer as pausas de tranquilidade que se apresentam até na situação mais perigosa.', topLine:'Quando o perigo anunciado se cumpre, já não há nada que se possa fazer; somente ter consciência de que se inicia um novo ciclo ascendente.'},
    {code: 6, image: 'https://raw.githubusercontent.com/rufedupo/codex-mutatio-app/main/public/assets/images/hexagrams/hexagram_6.png', title: 'CONFLITO', imageTitle:'Céu sobre água', description:'Em uma disputa levada até o fim, ninguém ganha; todos perdem. Diante de brigas e discussões, devemos estar dispostos à conciliação.', inside:'Astúcia', outside:'Força', bottomLine:'Se o conflito se encontra no começo, o melhor é abandoná-lo antes que seja tarde.', twoLine:'Se o adversário é evidentemente superior, a retirada não é nenhuma vergonha.', threeLine:'O arrebatamento não garante nenhuma posição; somente a serenidade e a confiança no trabalho benfeito permitem sair vitorioso.', fourLine:'Brigar com alguém mais fraco não traz nenhuma ventura, e, sim, peso na consciência. É necessário esperar.', fiveLine:'Pode ser necessária a presença de um juiz justo.', topLine:'Quem leva a disputa a seu amargo final recebe logo outros ataques e se envolve em novas brigas.'},
    {code: 7, image: 'https://raw.githubusercontent.com/rufedupo/codex-mutatio-app/main/public/assets/images/hexagrams/hexagram_7.png', title: 'O EXÉRCITO', imageTitle:'Terra sobre água', description:'Em um exército há força, disciplina e convicção; estas são as armas que levam à vitória. Na vida cotidiana, sem essas qualidades pouco se pode fazer.', inside:'Perigo', outside:'Obediência', bottomLine:'Ao começar uma empreitada que implique luta, a ordem e a clareza interna são imprescindíveis para o êxito.', twoLine:'Às vezes, os méritos de alguém são colhidos por uma pessoa hierarquicamente superior. Nenhum defeito.', threeLine:'Quando a condução não é exercida pela pessoa certa, surgem conflitos e mal-entendidos.', fourLine:'Diante de inimigos que o superem em força, se impõe a retirada. Lutar contra eles não é sinal de coragem, mas de ignorância.', fiveLine:'Toda luta deve ter ordem; não é questão de atacar qualquer gesto, mas somente as coisas que merecerem censura.', topLine:'Não se deve exagerar no momento de se mostrar agradecido, mas dar a cada um o que é seu.'},
    {code: 8, image: 'https://raw.githubusercontent.com/rufedupo/codex-mutatio-app/main/public/assets/images/hexagrams/hexagram_8.png', title: 'MANTER-SE UNIDO (SOLIDARIEDADE)', imageTitle:'Água sobre terra', description:'A união com os outros deve ser complementar e estimulante para todos. Onde há uma solidária adesão, é possível um grande avanço.', inside:'Docilidade', outside:'Astúcia', bottomLine:'No momento de estabelecer relações com iguais, é necessário a sinceridade.', twoLine:'As relações com os outros devem ser, antes de tudo, internas, e não baseadas apenas na conveniência. Somente assim haverá sucesso.', threeLine:'Quando se liga com pessoas sem afinidade, não se deve cair em uma falsa camaradagem, mas mostrar-se distante e correto.', fourLine:'É lícito aproximar-se do líder com uma atitude aberta; é necessário, porém, manter a firmeza interior.', fiveLine:'Se forem desenvolvidos o vigor e a pureza interiores, as pessoas vão se aproximar por si mesmas.', topLine:'Se, no momento de se associar, a pessoa não o faz por medo da entrega, mais tarde haverá de lamentar sua indecisão.'},
    {code: 9, image: 'https://raw.githubusercontent.com/rufedupo/codex-mutatio-app/main/public/assets/images/hexagrams/hexagram_9.png', title: 'O PODER DE DOMAR DO PEQUENO', imageTitle:'Vento sobre céu', description:'Somente mediante a suavidade é que o fraco consegue reter e refrear o forte.', inside:'Força', outside:'Suavidade', bottomLine:'O forte costuma conseguir as coisas lançando-se adiante. Neste caso, encontra-se em um terreno que não lhe corresponde. É necessário manter-se quieto.', twoLine:'Por experiência alheia, sabe-se que o caminho está obstruído. Pretender avançar à força conduz à humilhação.', threeLine:'Foi dado um passo em falso e encontrou-se resistência onde se esperava vitória. É preciso esperar que a situação mude.', fourLine:'Ao tentar convencer um poderoso a agir bem, corre-se perigo. O único modo de fazê-lo é com total veracidade.', fiveLine:'A alegria compartilhada é dupla alegria. É possível conseguir uma união que permita o avanço.', topLine:'Dando pequenos passos, alcançou-se uma alta posição. É necessário tranquilizar-se.'},
    {code: 10, image: 'https://raw.githubusercontent.com/rufedupo/codex-mutatio-app/main/public/assets/images/hexagrams/hexagram_10.png', title: 'A CONDUTA (TRILHAR)', imageTitle:'Céu sobre lago', description:'O comportamento em sociedade é regido por leis que se aprendem, basicamente, no trato. Se forem seguidas corretamente, as portas se abrirão sem esforço.', inside:'Serenidade', outside:'Energia', bottomLine:'As pessoas capazes e inteligentes mostram-se simples. Sua força não reside no que mostram, mas em seu interior.', twoLine:'Permanecer afastado do mundo, somente fiel a seus próprios princípios, não é nenhum defeito. A lealdade consigo mesmo traz ventura.', threeLine:'Aqueles que, sendo fracos, tomam a si mesmos por fortes, avançam cegamente para o perigo e atraem sobre si a desgraça.', fourLine:'Se tiver força interior e uma atitude prudente e temerosa, o êxito está assegurado.', fiveLine:'Há momentos em que somente cabe agir com decisão, energicamente. Este é um desses momentos.', topLine:'Para saber se haverá êxito, é necessário olhar para trás, tentando compreender os resultados de ações anteriores.'},
    {code: 11, image: 'https://raw.githubusercontent.com/rufedupo/codex-mutatio-app/main/public/assets/images/hexagrams/hexagram_11.png', title: 'PAZ', imageTitle:'Terra sobre céu', description:'Quando os bons sentimentos ocupam a mente e o coração, quando não há a necessidade de exibir força, a pessoa se sente em paz. É tempo de florescimento.', inside:'Força', outside:'Docilidade', bottomLine:'Quando chega o tempo de agir, é preciso fazê-lo com decisão e energia.', twoLine:'É necessário seguir o próprio caminho; suportar os incultos com benevolência e não se deixar influenciar por eles.', threeLine:'A todo florescimento segue uma decadência; o inverno sucede o verão. Quem observa essa lei não se assusta diante das épocas mais duras.', fourLine:'Em épocas de confiança mútua, não é necessário se manter afastado. O conveniente é unir-se a outros com total espontaneidade.', fiveLine:'As uniões entre pessoas de diferentes círculos sociais, se são modestas e não têm segundas intenções. trazem ventura.', topLine:'Nas épocas difíceis, quando tudo sai mal, é necessário refugiar-se no círculo íntimo de amigos.'},
    {code: 12, image: 'https://raw.githubusercontent.com/rufedupo/codex-mutatio-app/main/public/assets/images/hexagrams/hexagram_12.png', title: 'ESTAGNAÇÃO', imageTitle:'Céu sobre terra', description:'Em épocas de estagnação, quando se sabe que o que se deseja não vai adiante, é necessário manter-se fiel a seus princípios e se recolher.', inside:'Docilidade', outside:'Força', bottomLine:'Quando já não há possibilidade de ação, o mais importante é saber retirar-se a tempo.', twoLine:'Uma pessoa se vê rodeada de medíocres que adulam seus chefes, mas não cai em tal situação; mantém-se firme e não se deixa enganar.', threeLine:'Os medíocres ocupam postos que ganharam de maneira ilegítima, mas todos já começam a se dar conta de que não é o que lhes corresponde.', fourLine:'O tempo de estagnação está chegando a seu fim. É necessário preparar-se para a mudança.', fiveLine:'Em épocas em que a estagnação chega ao fim, é necessário ter a máxima precaução. Nesses momentos, não é bom se sentir muito seguro.', topLine:'Para que o tempo de estagnação se transforme em época de florescimento, é necessário um esforço sereno e firme.'},
    {code: 13, image: 'https://raw.githubusercontent.com/rufedupo/codex-mutatio-app/main/public/assets/images/hexagrams/hexagram_13.png', title: 'COMUNIDADE COM OS HOMENS', imageTitle:'Céu sobre fogo', description:'Para que seja possível a união com os outros, é necessário manter uma atitude interna muito clara e ocupar o lugar que lhe corresponda.', inside:'Clareza', outside:'Força', bottomLine:'Para que a união entre grupos e equipes seja possível, não se devem permitir arranjos secretos.', twoLine:'Há, no grupo, pessoas que buscam seus interesses egoístas e não o bem de todos. Unir-se a elas conduz à humilhação.', threeLine:'Quando o medo dos outros incita a aplicar-lhes armadilhas, a espiá-los em segredo, os fundamentos da comunidade se rompem.', fourLine:'É tempo de reconciliação. Não é possível a luta, e isso, no momento, é venturoso.', fiveLine:'Há pessoas que estão exteriormente separadas, mas cujos corações estão unidos. Com esforço, poderão vencer os obstáculos que se interpõem entre elas.', topLine:'Um se junta aos outros sem objetivos particulares. Não se trata de uma sociedade secreta, mas de um grupo que trabalha junto.'},
    {code: 14, image: 'https://raw.githubusercontent.com/rufedupo/codex-mutatio-app/main/public/assets/images/hexagrams/hexagram_14.png', title: 'GRANDES POSSES', imageTitle:'Fogo sobre céu', description:'Quando se unem fortaleza e clareza, a força se manifesta com delicadeza e autocontrole. Quem estiver nessa posição terá grande progresso.', inside:'Fortaleza', outside:'Clareza', bottomLine:'Sempre se deve resistir à tentação de se aliar a pessoas más, embora estas percorram o caminho mais curto. É necessário manter-se firme nos próprios princípios.', twoLine:'Uma grande posse não significa somente muitos bens, mas a possibilidade de que estes possam movimentar-se. É necessário buscar ajuda.', threeLine:'Para uma pessoa mesquinha, uma grande posse é uma desgraça, pois tem de se ocupar constantemente em conservá-la, em vez de avançar.', fourLine:'A inveja surge quando se olha mais para o que os outros conseguiram do que para o que se tem. É necessário seguir o próprio caminho.', fiveLine:'Não é lícito aprovar ou ignorar os audaciosos. Diante deles, é necessário mostrar-se firme e mantê-los dentro dos limites.', topLine:'Quando se é sincero e verdadeiro, encontra-se ventura. A grandeza está fundada em uma atitude de modéstia e honra ao sábio.'},
    {code: 15, image: 'https://raw.githubusercontent.com/rufedupo/codex-mutatio-app/main/public/assets/images/hexagrams/hexagram_15.png', title: 'MODÉSTIA', imageTitle:'Terra sobre montanha', description:'Se, estando em uma posição elevada, se demonstra modéstia, consegue-se brilhar como um sábio. Se, em uma posição baixa, se demonstra modéstia, não pode ser ignorado.', inside:'Quietude', outside:'Docilidade', bottomLine:'Está diante de uma empreitada que acarreta riscos. Se agir com prontidão e simplicidade, haverá êxito.', twoLine:'Quando alguém é modesto de coração, essa atitude é visível e permite o êxito.', threeLine:'Adquiriu-se renome. Se, em vez de se deixar extusiasmar pela fama, permanecer modesto, a popularidade aumentará.', fourLine:'O inferior não deve abusar da confiança do superior, e o superior não deve ocultar os méritos do inferior.', fiveLine:'Ser modesto não é deixar que tudo siga seu curso e não exercer autoridade; quem é modesto dá as ordens sem alarde e, assim, consegue ser obedecido.', topLine:'A maior e mais elevada demonstração de modéstia é a autocrítica. É conveniente rever as próprias atuações.'},
    {code: 16, image: 'https://raw.githubusercontent.com/rufedupo/codex-mutatio-app/main/public/assets/images/hexagrams/hexagram_16.png', title: 'ENTUSIASMO', imageTitle:'Trovão sobre terra', description:'Com o entusiasmo, se dissolvem as tensões e podem ser levadas a cabo progressivas tarefas em comum.', inside:'Docilidade', outside:'Movimento, impulso', bottomLine:'Não se deve mostrar entusiasmo diante das amizades de boa posição que se tenha; isso serve somente para gerar inveja.', twoLine:'O entusiasmo não deve ocultar a realidade. Não se deve deixar enganar pelas ilusões, mas ser realista.', threeLine:'A necessidade de aproximação que o entusiasmo gera não deve ser adiada. A união deve acontecer em seu devido tempo.', fourLine:'Quem é capaz de entusiasmar os outros é capaz de reunir os homens e levar a cabo grandes conquistas.', fiveLine:'A pressão impede que se gere o entusiasmo. Mas, embora seja uma situação desafortunada, tem seu lado bom: impede que as forças se dissipem em entusiasmos estéreis.', topLine:'Nunca se deixe cegar pelo entusiasmo, perdendo a realidade de vista. Se for possível, volte atrás.'},
    {code: 17, image: 'https://raw.githubusercontent.com/rufedupo/codex-mutatio-app/main/public/assets/images/hexagrams/hexagram_17.png', title: 'SEGUIR', imageTitle:'Lago sobre trovão', description:'Quem pretende ser seguido pela força, mediante a astúcia ou a violência, somente conseguirá resistência, nunca um acompanhamento voluntário.', inside:'Impulso', outside:'Alegria', bottomLine:'Toda situação, por mais desafortunada que seja, se torna boa se a pessoa se adaptar e não desperdiçar forças em uma resistência inútil.', twoLine:'Para dirigir ou convencer os outros, deve-se estar sempre disposto a escutá-los.', threeLine:'Quando alguém conhece pessoas valiosas, é natural perder as inferiores. É necessário afastar-se do superficial e não se confundir com tentações do momento.', fourLine:'É necessário estar prevenido contra as pessoas que se aproximam com interesses ocultos, a fim de poder se afastar delas.', fiveLine:'Toda pessoa deve ter ideais a seguir. Somente perseguindo o bom se consegue uma grande ventura.', topLine:'Quando alguém se aproxima pedindo ensinamento, é necessário comemorar, mesmo que isso signifique mudar ligeiramente os costumes.'},
    {code: 18, image: 'https://raw.githubusercontent.com/rufedupo/codex-mutatio-app/main/public/assets/images/hexagrams/hexagram_18.png', title: 'TRABALHO SOBRE O QUE SE DETERIOROU', imageTitle:'Montanha sobre vento', description:'As coisas que se perdem por causa humana podem ser reparadas com trabalho adequado e esforço.', inside:'Suavidade', outside:'Firmeza', bottomLine:'Uma ligação muito rígida ao tradicional pode traduzir-se em corrupção. É necessário restabelecer o equilíbrio de acordo com o tempo em que se vive.', twoLine:'A corrupção e o estado não desejado sobreviveram por fraqueza. No momento de efetuar reparações, não agir com excessiva dureza.', threeLine:'Coloca-se energia excessiva na retificação dos erros do passado.', fourLine:'Situações do passado irrompem no presente, desperdiçando-o. Se não se impuser solução, a corrupção seguirá seu curso.', fiveLine:'Quando não há energia e forças para recuperar o que foi desperdiçado no passado, é necessário buscar pessoas que ajudem na tarefa.', topLine:'Os que têm uma profunda evolução espiritual podem deixar que o mundo siga seu curso; eles não se afastam de suas elevadas metas.'},
    {code: 19, image: 'https://raw.githubusercontent.com/rufedupo/codex-mutatio-app/main/public/assets/images/hexagrams/hexagram_19.png', title: 'APROXIMAÇÃO', imageTitle:'Terra sobre lago', description:'Para o nobre, a intenção de ensinar e de sustentar não tem fim. Está tão envolvido com os que o rodeiam que sua atitude é de proteção, respeito e liberdade.', inside:'Serenidade', outside:'Docilidade', bottomLine:'O bem começa a se impor, encontra-se em franca ascensão. É necessário ser fiel a si mesmo.', twoLine:'O futuro não deve ser motivo de preocupação; as portas estão abertas, e as leis do tempo foram compreendidas.', threeLine:'O progresso é claro e consegue-se poder e influência. Mas é nesse momento que se apresenta o perigo: não se deve confiar demasiadamente em si.', fourLine:'Aproximar-se de uma pessoa de condição mais modesta produzirá um êxito inesperado.', fiveLine:'Quando se escolhe pessoas adequadas, não é necessário espiá-las constantemente para ver se cumprem com seu dever. É necessário mostrar mais confiança.', topLine:'Alguém que se afastou é chamado para que dê sua opinião.'},
    {code: 20, image: 'https://raw.githubusercontent.com/rufedupo/codex-mutatio-app/main/public/assets/images/hexagrams/hexagram_20.png', title: 'CONTEMPLAÇÃO (A VISTA)', imageTitle:'Vento sobre terra', description:'A força luminosa se retira, e a escuridão está em ascensão; mas quem se adequar às condições do tempo terá ventura.', inside:'Docilidade', outside:'Suavidade', bottomLine:'No momento de contemplar o que há em volta, é necessário compreender o que se vê.', twoLine:'Contemplar a realidade e achar que é o centro dela não é próprio de um sábio, mas de um néscio.', threeLine:'A contemplação da própria vida permite decidir sobre progresso ou retrocesso.', fourLine:'Alguém que conhece os segredos que podem levar ao florescimento merece ser honrado.', fiveLine:'Toda pessoa, ainda mais se estiver em um posto de autoridade, deve estar preparada para avaliar constantemente sua própria vida. Isso aumentará seu poder.', topLine:'Quem busca compreender as leis que governam o trato entre os homens pode se aproximar da perfeição.'},
    {code: 21, image: 'https://raw.githubusercontent.com/rufedupo/codex-mutatio-app/main/public/assets/images/hexagrams/hexagram_21.png', title: 'MORDER', imageTitle:'Fogo sobre trovão', description:'Um obstáculo se opõe à união e deve ser vencido com decisão e energia.', inside:'Impulso', outside:'Clareza', bottomLine:'Àquele que começa a se comportar de maneira indevida é necessário impor um castigo leve para que se retifique.', twoLine:'É necessário distinguir entre justiça e injustiça e não se deixar levar pela ira.', threeLine:'Há uma velha causa que merece ser retificada, e, quando o tenta, a pessoa é extremamente criticada; mas o tempo lhe dará razão.', fourLine:'Diante de certos adversários, é necessário ser duro como o metal e certeiro como uma flecha. O perdão também tem um limite; quando as faltas se repetem é porque não houve arrependimento.', fiveLine:'O tempo exige que se tomem medidas que, de antemão, sabe-se que não vão agradar. Mas não resta outra saída.', topLine:'É importante não continuar cometendo as mesmas faltas; sem correção, haverá humilhação.'},
    {code: 22, image: 'https://raw.githubusercontent.com/rufedupo/codex-mutatio-app/main/public/assets/images/hexagrams/hexagram_22.png', title: 'GRACIOSIDADE (BELEZA)', imageTitle:'Montanha sobre vento', description:'Por meio da graciosidade, da bela forma, podem ser superados muitos obstáculos.', inside:'Impulso', outside:'Quietude', bottomLine:'Dê luz ao próximo, mas não influa sobre o que está longe.', twoLine:'Não é bom se concentrar no envoltório ignorando o conteúdo. Procedendo assim, haverá situações a lamentar.', threeLine:'Quando tudo o que rodeia alguém é agraciado, corre-se o risco de dormir sobre os louros.', fourLine:'Esta linha indica as dúvidas sobre continuar cultivando a vaidade ou retornar à simplicidade. A última é a adequada.', fiveLine:'Não importa que não dê presentes ostentosos; o verdadeiramente importante é a atitude interior que demonstrar.', topLine:'O sábio que chega ao alto se desprende de todos os adornos e retorna à vida simples.'},
    {code: 23, image: 'https://raw.githubusercontent.com/rufedupo/codex-mutatio-app/main/public/assets/images/hexagrams/hexagram_23.png', title: 'DESINTEGRAÇÃO', imageTitle:'Montanha sobre terra', description:'Em uma época na qual avançam as pessoas vulgares, o nobre deve evitar, por todos os meios, qualquer ação.', inside:'Docilidade', outside:'Quietude', bottomLine:'Há intrigas subterrâneas contra as quais não se pode lutar abertamente. O mais adequado é aguardar.', twoLine:'O perigo se aproxima da pessoa; não há ajuda dos superiores nem dos inferiores. É necessário isolar-se temporariamente.', threeLine:'Pode haver relações externas com um ambiente ruim; mas a pessoa permanece livre de faltas se interiormente se conserva firme.', fourLine:'É necessário prestar mais atenção ao corpo, vigiar a saúde.', fiveLine:'Aparece uma pessoa que ajudará a resolver os problemas. Começam a ser dissolvidas as tensões.', topLine:'Termina um tempo de dificuldades; começa a boa época. As pessoas vulgares pagam suas faltas e intrigas.'},
    {code: 24, image: 'https://raw.githubusercontent.com/rufedupo/codex-mutatio-app/main/public/assets/images/hexagrams/hexagram_24.png', title: 'RETORNO (O PONTO DE TRANSIÇÃO)', imageTitle:'Terra sobre trovão', description:'O tempo de escuridão passou. Depois de uma época de dificuldades, chega a ascensão. O velho se vai, e vem o novo.', inside:'Impulso', outside:'Docilidade', bottomLine:'Não é momento para ser desconfiado nem para fazer maquinações. Novamente há bem-estar.', twoLine:'Voltar atrás não implica fracasso nem debilidade de espírito, mas, antes de tudo, uma firme decisão e um grande autocontrole.', threeLine:'Se há constantes retrocessos, se é necessário voltar atrás a cada passo, deve-se pensar que o caminho escolhido não é o correto.', fourLine:'O vínculo forte com uma pessoa amiga será evidenciado. Se foram cometidos pequenos erros, o bom é corrigi-los.', fiveLine:'Quando se sabe que o correto é voltar, dar um passo atrás, não é necessário dar desculpas para fazê-lo nem justificar a ação com pretextos mesquinhos.', topLine:'Se demorar a voltar atrás, passará o momento adequado e haverá motivos para se arrepender.'},
    {code: 25, image: 'https://raw.githubusercontent.com/rufedupo/codex-mutatio-app/main/public/assets/images/hexagrams/hexagram_25.png', title: 'INOCÊNCIA (O INESPERADO)', imageTitle:'Céu sobre trovão', description:'Quando se age com naturalidade, com inocência e sem segundas intenções, obtêm-se grandes bênçãos.', inside:'Impulso', outside:'Força', bottomLine:'É preciso seguir sempre o primeiro impulso do coração, na certeza de que os desejos vão se cumprir.', twoLine:'As coisas devem ser feitas pela satisfação de fazê-las, visto que, se há motivos escondidos, estes, mais cedo ou mais tarde, serão conhecidos e, com isso, somente se recebe humilhação.', threeLine:'As dificuldades que recaem sobre alguém nem sempre são motivadas por ele mesmo; às vezes se originam de fora e, contra isso, somente se pode esperar.', fourLine:'O que pertence a alguém, nada nem ninguém pode tirar. Também não o pode perder.', fiveLine:'Se chega de fora um mal inesperado, não há que se desesperar; assim como se apresenta a contrariedade, também se apresenta a bem-aventurança.', topLine:'A situação está esgotada; nada se pode fazer. Qualquer intenção de avançar não poderá ter êxito.'},
    {code: 26, image: 'https://raw.githubusercontent.com/rufedupo/codex-mutatio-app/main/public/assets/images/hexagrams/hexagram_26.png', title: 'O PODER DE DOMAR DO GRANDE', imageTitle:'Montanha sobre céu', description:'Quando a quietude domina o impulso, obtém-se uma grande força de caráter, que traz êxito até nos empreendimentos mais arriscados.', inside:'Força', outside:'Detenção', bottomLine:'Forçar o progresso neste momento não é possível. É necessário esperar para encontrar a saída adequada para as energias acumuladas.', twoLine:'Apresentam-se as dificuldades que impedem o avanço. É necessário esperar e juntar forças para o momento em que seja possível avançar.', threeLine:'O impedimento cessou; é momento de avançar, mas antes é preciso ter uma meta clara para a qual dirigir-se.', fourLine:'Apesar de o impulso interno ser de avanço, é necessário se conter. Se tiver a força necessária para isso, e se conseguir, haverá grande ventura.', fiveLine:'É necessário gastar forças em empreendimentos menos importantes, consumir a tensão interna até que cheguem tempos melhores em que se possa avançar novamente.', topLine:'O tempo da repressão terminou; agora se faz um decisivo progresso graças às forças acumuladas durante a espera.'},
    {code: 27, image: 'https://raw.githubusercontent.com/rufedupo/codex-mutatio-app/main/public/assets/images/hexagrams/hexagram_27.png', title: 'AS BORDAS DA BOCA (PROVER ALIMENTO)', imageTitle:'Montanha sobre trovão', description:'O silêncio, assim como o alimento, nunca deve ultrapassar a justa medida.', inside:'Impulso', outside:'Demora', bottomLine:'Em vez de olhar com inveja a autonomia dos outros, é necessário compreender que a força para consegui-la está em si mesmo.', twoLine:'Quando alguém não procura seu próprio alimento, quando depende de outros para sobreviver, está se desviando de sua natureza, e corre o risco de ser humilhado.', threeLine:'A mera busca da satisfação dos sentidos não conduz nunca a uma meta; esse é um alimento que não nutre nem dá forças.', fourLine:'É lícito encontrar pessoas afins com quem compartilhar projetos; ademais, é o momento apropriado para fazê-lo.', fiveLine:'Empenhar-se em destacar as próprias conquistas, a própria importância, não é digno de um nobre, e, sim, contribuir para o bem-estar dos demais.', topLine:'Quem se torna fonte de nutrição física, mental ou espiritual deve ter consciência de suas responsabilidades.'},
    {code: 28, image: 'https://raw.githubusercontent.com/rufedupo/codex-mutatio-app/main/public/assets/images/hexagrams/hexagram_28.png', title: 'PREPONDERÂNCIA DO GRANDE', imageTitle:'Lago sobre vento', description:'A carga é excessiva, pois descansa em sua parte central. É necessário saber delegar, permitir que os demais tenham sua importância.', inside:'Suavidade', outside:'Serenidade', bottomLine:'É o começo de uma época extraordinária, e todas as opções devem ser longamente estudadas.', twoLine:'Há situações extraordinárias que, não obstante, são lícitas e benéficas. Nem sempre é ruim fugir da norma.', threeLine:'Em tempos de perigo, pretender impor-se pela força e não escutar conselhos acelera e confirma a queda.', fourLine:'Quem deseja abusar de relações amistosas com pessoas não afins para obter poder e êxito, somente conseguirá humilhação.', fiveLine:'Em épocas excepcionais devem se manter limpos os vínculos com familiares e amigos, sem pretender ganhos particulares.', topLine:'Quem pretende gastar todas as suas forças em empreendimentos que nunca darão frutos só conseguirá decepções.'},
    {code: 29, image: 'https://raw.githubusercontent.com/rufedupo/codex-mutatio-app/main/public/assets/images/hexagrams/hexagram_29.png', title: 'O ABISMAL (ÁGUA)', imageTitle:'Água sobre água', description:'Do perigo somente se pode sair como a água de um vale: deixando fluir, adaptando-se à situação em cada instante.', inside:'Perigo', outside:'Perigo', bottomLine:'Se alguém se acostuma a viver no perigo, este começa a fazer parte de sua natureza. É necessário não perder a consciência de que o perigo deve ser um estado excepcional.', twoLine:'Quando alguém se encontra em meio ao perigo, não é lícito pretender grandes coisas. Somente pretendendo o pequeno é possível aproximar-se da saída.', threeLine:'Quando não aparece nenhuma saída possível, é urgente se deter. Qualquer movimento, qualquer impulso inocente, poderia, neste caso, ser fatal.', fourLine:'Em tempos de perigo sobram os convencionalismos e as formalidades; o importante é uma atitude completamente sincera e verdadeira.', fiveLine:'Se se pretende chegar muito alto, surge o perigo. Não é momento para realizar grandes obras; somente se deve sair do perigo.', topLine:'Quem, em meio ao perigo, perde seu próprio caminho, seus ideais e suas normas morais, atrai sobre si a desgraça. Impõe-se a reflexão.'},
    {code: 30, image: 'https://raw.githubusercontent.com/rufedupo/codex-mutatio-app/main/public/assets/images/hexagrams/hexagram_30.png', title: 'ADERIR (FOGO)', imageTitle:'Fogo sobre fogo', description:'Graças à sua clareza, o nobre faz com que sua luz se estenda e seja alimento para outros homens.', inside:'Impulso', outside:'Clareza', bottomLine:'No começo, é importante não se deixar levar por ideias alheias, mas manter-se fiel a si mesmo, pois o começo é o germe do que virá no futuro.', twoLine:'Vive-se um momento no qual as forças estão em equilíbrio. Tudo ocorre em sua justa medida e não haverá o que lamentar.', threeLine:'Quando se aproximam as mudanças ou finais, não é preciso ficar triste, visto que a um fim segue-se outro começo.', fourLine:'Descreve-se um caráter inquieto que consegue rápida ascensão; mas lhe falta a necessária constância para perdurar, e sua luz se extingue como a de um meteoro.', fiveLine:'É necessário se arrepender dos erros cometidos para seguir adiante com uma bagagem mais leve.', topLine:'Vingança não é o mesmo que castigo. A primeira visa somente satisfazer o orgulho ferido e é egoísta; o segundo busca ensinar; portanto, é generoso.'},
    {code: 31, image: 'https://raw.githubusercontent.com/rufedupo/codex-mutatio-app/main/public/assets/images/hexagrams/hexagram_31.png', title: 'A INFLUÊNCIA (CORTEJAR)', imageTitle:'Fogo sobre trovão', description:'O fraco se encontra acima, o forte, abaixo; de modo que suas forças se atraem até se unirem.', inside:'Impulso', outside:'Clareza', bottomLine:'A intenção, por mais firme e intensa que seja, não é visível do exterior. Sempre é preciso basear-se e crer nos feitos.', twoLine:'Não se deve tomar decisões baseadas na pressão ou nos desejos de outras pessoas; embora em alguns momentos seja díficil, é preciso tomá-las baseando-se nas próprias convicções.', threeLine:'Não se deve correr atrás da pessoa a qual se quer influenciar nem ceder a todos os seus caprichos.', fourLine:'Em meio à agitação, os únicos que seguirão uma pessoa inquieta serão aqueles para quem ela dirigir seus pensamentos.', fiveLine:'Se alguém é incapaz de se deixar influenciar, também não exercerá influência alguma sobre os demais.', topLine:'A influência que se consegue com a palavra "nunca" é tão grande quanto a que se obtém por meio de obras.'},
    {code: 32, image: 'https://raw.githubusercontent.com/rufedupo/codex-mutatio-app/main/public/assets/images/hexagrams/hexagram_32.png', title: 'DURAÇÃO', imageTitle:'Trovão sobre vento', description:'A duração não é uma simples demora, mas um estado em que o movimento termina e é seguido por um novo começo.', inside:'Suavidade', outside:'Impulso', bottomLine:'Pretender muito rapidamente que as coisas tenham duração acarreta desventura. O duradouro só pode ser conseguido pouco a pouco.', twoLine:'A força é superior ao poder do que se dispõe. Como é tempo da duração, pode ser controlada, e não há defeito.', threeLine:'Os temores e as esperanças produzem inquietações internas e, como consequência, vem a ansiedade. Nesse estado, somente podem ser gerados problemas.', fourLine:'O que não se procura, nunca se encontra. É essencial começar a busca para si mesmo.', fiveLine:'É necessário saber se adaptar e reger-se constantemente pelo dever. Não procedendo assim, haverá humilhação.', topLine:'A inquietação e o desassossego como estados duradouros, como formas de vida, somente podem acarretar desventura.'},
    {code: 33, image: 'https://raw.githubusercontent.com/rufedupo/codex-mutatio-app/main/public/assets/images/hexagrams/hexagram_33.png', title: 'A RETIRADA', imageTitle:'Céu sobre montanha', description:'A retirada não é uma fuga; é um passo atrás a fim de organizar a força necessária para voltar à luta.', inside:'Demora', outside:'Força', bottomLine:'Quando as pessoas vulgares se aproximam, o nobre não sente ódio, porque o ódio estabeleceria uma ponte com elas. Somente se retira, se afasta e, com essa atitude, as detém.', twoLine:'Ameaça de um perigo. A melhor maneira de sair dele é se deter, ficar quieto e esperar com o olhar atento.', threeLine:'Alguém sente que é o momento de se retirar, mas não deixam, impedem-no de partir.', fourLine:'É conveniente saber se retirar. Embora para quem se retira seja fácil, deve pensar que não o é para quem fica para trás. É necessário ser paciente e generoso.', fiveLine:'Se não se escolhe para a retirada o momento adequado, perde-se a oportunidade, e isso pode levar a desagradáveis discussões.', topLine:'Quando se consegue um desprendimento interno, partir é fácil. Quem vê seu caminho com clareza se afasta com uma atitude serena e alegre.'},
    {code: 34, image: 'https://raw.githubusercontent.com/rufedupo/codex-mutatio-app/main/public/assets/images/hexagrams/hexagram_34.png', title: 'O PODER DO GRANDE', imageTitle:'Trovão sobre céu', description:'Há perigo quando se confia no próprio poder. Alcançou-se um ponto importante e não se deve cair na prepotência.', inside:'Força', outside:'Impulso', bottomLine:'O poder se manifesta por si mesmo no momento mais adequado. Não é questão de ensiná-lo pela força.', twoLine:'O avanço será poderoso. É importante a reflexão constante para não cair na arrogância. Se assim for, haverá humilhação.', threeLine:'Quem alardeia seu poder procura dificuldades. O nobre tem consciência de que sempre deve se mostrar atento e vigilante.', fourLine:'Quanto menos se puser o poder para fora, mais efeito terá quando for aplicado.', fiveLine:'É momento de deixar de lado a atitude agressiva e obstinada. Pode se avançar tranquilamente, porque não há impedimentos.', topLine:'Os avanços devem ser paulatinos, visto que, se alguém tenta se apressar demais, pode deixar para trás coisas das quais deveria cuidar.'},
    {code: 35, image: 'https://raw.githubusercontent.com/rufedupo/codex-mutatio-app/main/public/assets/images/hexagrams/hexagram_35.png', title: 'PROGRESSO', imageTitle:'Fogo sobre terra', description:'É época de progresso; o avanço é fácil e rápido. Conseguem-se seguidores, gente que voluntariamente oferece seu apoio.', inside:'Impulso', outside:'Docilidade', bottomLine:'Não se pode pretender conquistar a confiança a todo custo e à força; é preciso permanecer sereno e não se deixar irritar até estourar de fúria.', twoLine:'A pessoa deve ter contato com alguém, mas se encontra impedida, por isso não pode progredir. Se permanecer perseverante, chegará à ventura.', threeLine:'O progresso que se avizinha acontece em união com outros. Graças a isso se consegue um grande avanço.', fourLine:'É necessário deixar as maquinações de lado; o avanço deve ser conseguido de maneira natural.', fiveLine:'Neste momento, não se deve tomar a peito nem perdas nem ganhos.', topLine:'Mostrar-se excessivamente exigente neste momento pode acarretar humilhações.'},
    {code: 36, image: 'https://raw.githubusercontent.com/rufedupo/codex-mutatio-app/main/public/assets/images/hexagrams/hexagram_36.png', title: 'OBSCURECIMENTO DA LUZ', imageTitle:'Terra sobre fogo', description:'Quando o lugar de comando é ocupado por uma pessoa desprezível, os bons ao seu redor são prejudicados.', inside:'Clareza', outside:'Entrega', bottomLine:'São tempos difíceis. É aconselhável não assumir compromissos e seguir fiel aos próprios princípios. Com o tempo, virão as recompensas.', twoLine:'A generosidade e a entrega aos outros diante de uma situação difícil trará inesperados benefícios.', threeLine:'Sofrem-se abusos e injustiças, e é momento de se proteger da melhor maneira possível.', fourLine:'Não se pode esperar soluções, e não há luta possível. Neste momento, se está em condições de abandonar o lugar da calamidade antes que esta aconteça.', fiveLine:'Quando as condições externas não são benéficas.', topLine:'Os inimigos sofrerão uma grande derrota e, a partir daí, começa um período luminoso.'},
    {code: 37, image: 'https://raw.githubusercontent.com/rufedupo/codex-mutatio-app/main/public/assets/images/hexagrams/hexagram_37.png', title: 'FAMÍLIA', imageTitle:'Vento sobre fogo', description:'As palavras somente exercem influência se são objetivas e se referem claramente a um assunto por vez.', inside:'Clareza', outside:'Suavidade', bottomLine:'Na família, cada membro deve conhecer o lugar que lhe corresponde; às crianças é necessário impor a ordem e a norma o quanto antes.', twoLine:'Em toda família sempre há alguém que carrega as responsabilidades, que elabora normas e traça projetos. Quem desejar ocupar esse posto deve saber que isso implica sacrifícios e esforços.', threeLine:'Na família, deve-se buscar o equilíbrio entre a dureza e a permissividade. A excessiva severidade ou um excesso de debilidade conduz à vergonha.', fourLine:'Os gastos devem manter sempre relação com as receitas. Não se pode gastar mais do que se tem.', fiveLine:'Governando pelo temor obtêm-se menos benefícios que governando com confiança e amor.', topLine:'Se a figura mais visível da família assume suas responsabilidades e não se afasta do caminho reto, os outros poderão segui-la.'},
    {code: 38, image: 'https://raw.githubusercontent.com/rufedupo/codex-mutatio-app/main/public/assets/images/hexagrams/hexagram_38.png', title: 'OPOSIÇÃO', imageTitle:'Fogo sobre fogo', description:'Quando as pessoas estão em oposição entre si, é impossível que levem seus projetos adiante.', inside:'Impulso', outside:'Clareza', bottomLine:'Diante de um antagonismo incipiente, não se deve procurar a união pela força; se alguém se vai por sua conta, da mesma forma voltará.', twoLine:'Por causa de mal-entendidos, a pessoa não pode estar com quem deve ou quer. Nesse caso, não é uma falha ter encontros ocasionais.', threeLine:'Em meio aos antagonismos, e apesar da pressão, é preciso manter-se fielmente unido à pessoa escolhida.', fourLine:'Quando alguém precisa se isolar porque tem outros interesses ou maneiras de pensar, pode encontrar uma pessoa afim com a qual compartilhar experiências.', fiveLine:'Uma pessoa a quem no princípio não se levou em conta tem, de repente, grande importância.', topLine:'Surgem mal-entendidos com uma pessoa amiga, mas, em pouco tempo, ela reconhecerá seu erro e se aproximará com boas intenções.'},
    {code: 39, image: 'https://raw.githubusercontent.com/rufedupo/codex-mutatio-app/main/public/assets/images/hexagrams/hexagram_39.png', title: 'OBSTRUÇÃO', imageTitle:'Água sobre montanha', description:'Quando alguém depara com impedimentos que não pode superar, deve se retirar e se preparar adequadamente antes de voltar a investir contra eles.', inside:'Perigo', outside:'Quietude', bottomLine:'Avizinha-se uma época de impedimentos e lutas. No início, o melhor é se distanciar e esperar que chegue o momento certo para entrar em ação', twoLine:'O dever obrigará a lutar contra as dificuldades, embora não haja muita esperança de superá-las.', threeLine:'A tentação é avançar e aproximar-se ainda mais do perigo, mas será necessário refrear-se para não prejudicar pessoas queridas.', fourLine:'Quem se deixa enganar pelas aparências e confia demais nas próprias forças correrá para o perigo. É tempo de impedimentos; não é momento de agir.', fiveLine:'Será possível sair do perigo e dos impedimentos mediante um bom planejamento das ações a serem seguidas.', topLine:'A pessoa se vê obrigada a fazer algo em favor dos outros, mesmo não encontrando sentido em fazê-lo para si mesma.'},
    {code: 40, image: 'https://raw.githubusercontent.com/rufedupo/codex-mutatio-app/main/public/assets/images/hexagrams/hexagram_40.png', title: 'LIBERTAÇÃO', imageTitle:'Trovão sobre água', description:'É uma época de mudança, de libertação. Mas é preciso ter cuidado para não exagerar o valor do triunfo.', inside:'Perigo', outside:'Impulso', bottomLine:'É conveniente utilizar o primeiro tempo da libertação para se recompor dos maus momentos passados e se acostumar a uma nova época, sem lutas.', twoLine:'É necessário desmascarar pessoas aduladoras que põem em perigo a libertação e o avanço.', threeLine:'Quando se alcança uma boa posição depois de ter passado penúrias, não se deve cair na arrogância, mas recordar o passadoe aceitar a situação com naturalidade.', fourLine:'Quando se aproxima o momento da libertação, é necessário tomar distância das pessoas com as quais se teve um vínculo casual, não transcendente.', fiveLine:'Somente quando se rompe com outros de dentro, do interior, a decisão é levada em conta pelos demais, pois sentem que a coisa é seria.', topLine:'Há homens vulgares que impedem a libertação. Diante deles, é necessária uma silenciosa preparação antes de dar os primeiros passos.'},
    {code: 41, image: 'https://raw.githubusercontent.com/rufedupo/codex-mutatio-app/main/public/assets/images/hexagrams/hexagram_41.png', title: 'DIMINUIÇÃO', imageTitle:'Montanha sobre lago', description:'Quando sobrevêm épocas de declínio econômico, não é questão de encobrir a situação com as aparências, mas de saber adaptar-se a ela para poder sair.', inside:'Serenidade', outside:'Quietude', bottomLine:'Antes de aceitar a ajuda dos outros, é necessário pensar se tem direito a ela.', twoLine:'Diante de superiores, é preciso fazer adequadamente seu trabalho, sem se exceder. Fazer mais do que lhe cabe acarreta desventura.', threeLine:'Onde se juntam três aparece o ciúme. Quando isso ocorre, um dos três deve ir embora.', fourLine:'Há defeitos que impedem que pessoas bem-intencionadas se aproximem. É necessário corrigi-los.', fiveLine:'Eis aqui alguém predestinado a ser feliz. Haja o que houver, esse desígnio do destino se cumprirá.', topLine:'Descreve uma pessoa que não trabalha para si mesma, mas em favor dos demais. Essa generosidade é louvável.'},
    {code: 42, image: 'https://raw.githubusercontent.com/rufedupo/codex-mutatio-app/main/public/assets/images/hexagrams/hexagram_42.png', title: 'AUMENTO', imageTitle:'Vento sobre trovão', description:'Esta é uma época ascendente, na qual toda ação dá seus frutos. É necessário aproveitá-la também para desfazer-se dos defeitos.', inside:'Impulso', outside:'Suavidade', bottomLine:'Se alguém corrige os defeitos que vê em si mesmo, liberta-se do mal. Isso, sem dúvida, constitui um progresso em sua personalidade.', twoLine:'O verdadeiro aumento se produz quando se cria dentro de si mesmo as condições.', threeLine:'É chegado um tempo de benção e enriquecimento.', fourLine:'É necessário assumir o papel de mediador em duas pessoas ou entre dois grupos.', fiveLine:'A bondade nascida do coração, que não pede nenhuma recompensa, será reconhecida e dará frutos.', topLine:'É necessário guardar as palavras; corre-se o risco de ferir as pessoas com elas.'},
    {code: 43, image: 'https://raw.githubusercontent.com/rufedupo/codex-mutatio-app/main/public/assets/images/hexagrams/hexagram_43.png', title: 'IRROMPER (DETERMINAÇÃO)', imageTitle:'Lago sobre céu', description:'Para se manter distante do mal, às vezes é necessária uma ação rápida e enérgica que sirva como advertência.', inside:'Força', outside:'Serenidade', bottomLine:'No avanço, é difícil dar o primeiro passo. É o momento de dá-lo, e isso deve ser feito com serenidade.', twoLine:'Época de mudanças profundas. A resolução deve seguir unida à precaução.', threeLine:'É necessário tirar a venda dos olhos, perceber que alguém a quem se dá crédito não o merece.', fourLine:'Embora os impedimentos freiem o avanço, não se deve pretender avançar à força para curar o amor-próprio.', fiveLine:'Quando um homem vulgar está em um lugar de poder, a luta deve ser constante.', topLine:'Ao que parece, foi conseguido o que se buscava; mas, por confiar em si mesmo e não terminar o trabalho, pode haver desventura.'},
    {code: 44, image: 'https://raw.githubusercontent.com/rufedupo/codex-mutatio-app/main/public/assets/images/hexagrams/hexagram_44.png', title: 'VIR AO ENCONTRO', imageTitle:'Céu sobre vento', description:'Quando duas pessoas estão predestinadas, ir ao encontro não representa um defeito, desde que não haja segundas intenções.', inside:'Suavidade', outside:'Força', bottomLine:'Uma pessoa vulgar tenta intrometer-se; por isso, é preciso freá-la decididamente.', twoLine:'Uma pessoa próxima tem más intenções. Será necessário mantê-la sob vigilância e cuidar para que não se junte a outras pessoas, visto que, nesse caso, daria vazão às suas más intenções.', threeLine:'Existe a tentação de travar relações com uma má pessoa, mas, afortunadamente, isso não será possível, e assim serão evitados erros.', fourLine:'É preciso tolerar pessoas pequenas para que sejam amáveis.', fiveLine:'Um posto mais elevado será alcançado, mas será preciso abster-se de qualquer ostentação, visto que há gente invejosa em volta.', topLine:'Por ficar distante das pessoas vulgares, é muito provável que seja chamado de orgulhoso; mas, sua atitude será benéfica.'},
    {code: 45, image: 'https://raw.githubusercontent.com/rufedupo/codex-mutatio-app/main/public/assets/images/hexagrams/hexagram_45.png', title: 'REUNIÃO', imageTitle:'Lago sobre terra', description:'Somente se tem a capacidade de reunir outros e ser o centro quando se está centrado em si mesmo.', inside:'Docilidade', outside:'Serenidade', bottomLine:'O desejo de união é muito forte, mas, se alguém se deixa influenciar pelos demais, a união não chegará a se realizar.', twoLine:'Embora os demais forcem a união, não haverá motivo de arrependimento se chegar a ela com total sinceridade.', threeLine:'Não é momento de conseguir companhia, mas, se não se cair no isolamento, a solidão chegará a seu fim.', fourLine:'Como na vontade de união não há segundas intenções. podem ser realizados muitos projetos com grande probabilidade de êxito.', fiveLine:'É provável que à sua volta haja pessoas que duvidem de suas intenções, mas, com o tempo, virá o reconhecimento.', topLine:'A solidão é um estado difícil; mas é possível sair dela mantendo a serenidade e a confiança em si mesmo.'},
    {code: 46, image: 'https://raw.githubusercontent.com/rufedupo/codex-mutatio-app/main/public/assets/images/hexagrams/hexagram_46.png', title: 'ASCENSÃO', imageTitle:'Terra sobre vento', description:'É tempo de progresso. Avizinha-se a expansão. É necessário entrar em contato com as pessoas que tomam decisões.', inside:'Persistência', outside:'Docilidade', bottomLine:'Por fim, se consegue uma clara ascensão, uma grande fortuna.', twoLine:'Os sacrifícios e as dádivas das pessoas simples e humildes são sempre bem recebidos.', threeLine:'Quando a pessoa prospera na vida, pode ficar excessivamente sozinha. Mas, pouco a pouco, vai encontrando seus semelhantes.', fourLine:'Quando se estabelece fazer oferendas, estas devem ser feitas com rapidez para conseguir os favores que se pretende.', fiveLine:'Há uma ascensão súbita. Vão-se os problemas e consegue-se grande fortuna.', topLine:'A ascensão está prevista. O requisito é se manter firme e correto.'},
    {code: 47, image: 'https://raw.githubusercontent.com/rufedupo/codex-mutatio-app/main/public/assets/images/hexagrams/hexagram_47.png', title: 'OPRESSÃO (A EXAUSTÃO)', imageTitle:'Lago sobre água', description:'Há situações nas quais de nada serve suplicar ou argumentar. É melhor manter a inocência e a rebeldia.', inside:'Perigo', outside:'Serenidade', bottomLine:'O momento é difícil, mas não se deve deixar abater. É questão de aguardar com esperança a chegada da luz.', twoLine:'Quando os tropeços se sucedem, cai-se na exaustão, e nesse estado não se é capaz de ver sequer as coisas positivas que se tem à mão.', threeLine:'É absurdo se deixar frear por obstáculos que podem ser superados ou pedir ajuda quando não se necessita.', fourLine:'Alguém a quem se quer ajudar não confia. Com suavidade e persistência serão vencidos seus temores.', fiveLine:'Quando a sensibilidade diante dos problemas alheios é grande, a pessoa se esquece de si mesma. E essa conduta acarreta desventura.', topLine:'Não escolher é escolher que as coisas fiquem como estão. O momento impõe ação e mudanças.'},
    {code: 48, image: 'https://raw.githubusercontent.com/rufedupo/codex-mutatio-app/main/public/assets/images/hexagrams/hexagram_48.png', title: 'O POÇO', imageTitle:'Água sobre vento', description:'Quando se coloca ordem no ambiente, as coisas chegam a um bom termo.', inside:'Impulso', outside:'Clareza', bottomLine:'Se a pessoa não se renova, se está sempre com as mesmas coisas, é como um poço seco no qual ninguém vai beber. As mudanças são necessárias.', twoLine:'Embora alguém tenha defeitos, sempre haverá quem o procure, mais ainda quando se empenha em corrigi-los.', threeLine:'A pessoa se sente capaz, porém está triste por que os outros não parecem perceber isso.', fourLine:'A firmeza do caráter fará com que muitas pessoas se aproximem com boas intenções.', fiveLine:'Quem está disposto a ajudar os outros obtém grandes bênçãos e nunca está sozinho. Tem apenas de levar em conta que a verdadeira caridade começa em casa.', topLine:'A sinceridade alcança êxito. Não é preciso ter medo de dizer a verdade.'},
    {code: 49, image: 'https://raw.githubusercontent.com/rufedupo/codex-mutatio-app/main/public/assets/images/hexagrams/hexagram_49.png', title: 'REVOLUÇÃO', imageTitle:'Lago sobre fogo', description:'A plena comunicação com todos permite levar a cabo as mudanças tão necessárias. Grande êxito.', inside:'Clareza', outside:'Serenidade', bottomLine:'Ainda não é o momento de empreender mudanças. É necessário buscar pessoas afins e esperar o instante certo para agir.', twoLine:'As mudanças foram iniciadas. Qualquer empreendimento terá êxito.', threeLine:'A posição e o momento indicam perigo. É necessário manter-se quieto e firme, não continuar com as mudanças iniciadas.', fourLine:'Os outros, por fim, acreditarão. Chegam momentos muito afortunados. Podem ser estabelecidas as mudanças que se fazem necessárias.', fiveLine:'A grande mudança interior começa a ser executada. Os que estão em volta olharão surpresos para a nova pessoa. Êxito.', topLine:'É momento de esperar pacientemente. Falta somente um detalhe para conseguir uma completa transformação.'},
    {code: 50, image: 'https://raw.githubusercontent.com/rufedupo/codex-mutatio-app/main/public/assets/images/hexagrams/hexagram_50.png', title: 'O CALDEIRÃO', imageTitle:'Fogo sobre vento', description:'Para conseguir aquilo a que se propõe, será necessário renunciar a certas coisas e valorizar a si mesmo com mais humildade.', inside:'Persistência', outside:'Clareza', bottomLine:'Conservando a pureza interior, haverá possibilidade de ascender.', twoLine:'A boa posição a qual se chega despertará a inveja dos demais; mas nada se pode fazer, porque não há culpa.', threeLine:'Até agora, ninguém soube aproveitar as qualidades de uma pessoa sábia e sensata; mas a situação está a ponto de mudar.', fourLine:'No momento, é melhor não iniciar empreendimentos difíceis, porque não se tem força suficiente para levá-los a cabo. Se isso for feito, haverá humilhação.', fiveLine:'Bom momento para travar relações interessantes.', topLine:'A admirável personalidade despertará o interesse de uma pessoa afim.'},
    {code: 51, image: 'https://raw.githubusercontent.com/rufedupo/codex-mutatio-app/main/public/assets/images/hexagrams/hexagram_51.png', title: 'O INCITAR (COMOÇÃO, TROVÃO)', imageTitle:'Trovão sobre trovão', description:'Quando o trovão retumba, anuncia a tempestade. É preciso ser cauteloso, mas não ceder terreno.', inside:'Impulso', outside:'Impulso', bottomLine:'Embora, em um primeiro momento, sintam-se temores diante da agitação geral, haverá boa fortuna.', twoLine:'Em uma posição de perigo abandona-se, temporariamente, o que se tem. Mas não há erro, porque voltará a recuperá-lo.', threeLine:'Quem mantiver a serenidade, mesmo em meio a uma grande agitação, poderá agir com justiça e de maneira proveitosa.', fourLine:'Por causa da agitação em um momento de comoção, corre-se sério perigo de afundar. É fundamental manter a calma.', fiveLine:'Na comoção, há alguém que corre de um lado a outro; provavelmente consiga sair do perigo.', topLine:'Em meio à comoção, alguém fica quieto, e com isso consegue sair da situação perigosa.'},
    {code: 52, image: 'https://raw.githubusercontent.com/rufedupo/codex-mutatio-app/main/public/assets/images/hexagrams/hexagram_52.png', title: 'A QUIETUDE (MONTANHA)', imageTitle:'Montanha sobre montanha', description:'Quando se deixa de lado o interesse pessoal nas decisões tomadas, a pessoa permanece livre de culpas.', inside:'Queitude', outside:'Queitude', bottomLine:'Se é preciso conseguir a quietude, é mais fácil fazê-lo antes de iniciar qualquer movimento.', twoLine:'Para ajudar uma pessoa muito próxima, é necessário tomar um pouco de distância, caso contrário, pode-se cair com ela no poço.', threeLine:'A tranquilidade não se obtém reprimindo inquietações, mas em um estado de relaxamento no qual se mantém o coração sereno.', fourLine:'Embora a pessoa ainda se veja presa a angústias e temores, não há erro, porque o caminho empreendido é o correto.', fiveLine:'É necessário ter cuidado com as palavras, porque o momento é delicado, e qualquer coisa dita inocentemente pode ser tomada como ofensa.', topLine:'Com serenidade, observa-se o panorama com total clareza. O sossego interior permite discernir entre o seguro e o perigo.'},
    {code: 53, image: 'https://raw.githubusercontent.com/rufedupo/codex-mutatio-app/main/public/assets/images/hexagrams/hexagram_53.png', title: 'DESENVOLVIMENTO (PROGRESSO GRADUAL)', imageTitle:'Vento sobre montanha', description:'É uma época de decidido avanço em todas as frentes. Poderão ser levadas a cabo grandes tarefas, sozinho ou em companhia de outros.', inside:'Queitude', outside:'Suavidade', bottomLine:'Quando tem início a evolução, se está sozinho e a situação apresenta perigos. À medida que o tempo transcorre, tudo se torna mais fácil.', twoLine:'Foi conseguido um bom avanço; a posição obtida é muito mais segura que a anterior. Os augúrios não podem ser melhores.', threeLine:'Conseguiu evoluir; há pessoas que desejam o seu posto.', fourLine:'Embora a situação seja incômoda e arriscada, sem dúvida você tem armas para poder sair dela.', fiveLine:'Quando alguém alcança o topo, poucos se aproximam e a solidão se faz presente. Mas, uma vez alcançado, os mal-entendidos serão resolvidos.', topLine:'Terminou-se uma tarefa, e esta foi feita de modo limpo. Agora é o momento de colher os frutos.'},
    {code: 54, image: 'https://raw.githubusercontent.com/rufedupo/codex-mutatio-app/main/public/assets/images/hexagrams/hexagram_54.png', title: 'A JOVEM QUE SE CASA', imageTitle:'Trovão sobre lago', description:'Antes de começar qualquer coisa, é necessário buscar fortalecimento interior, porque a situação presente assim o exige.', inside:'Alegria', outside:'Impulso', bottomLine:'Embora não se possa avançar decididamente tanto quanto se quer, será conveniente, sim, dar quantos passos puder.', twoLine:'A pessoa escolhida não age como o esperado, e a decepção é muito grande. Não tente se enganar; mantenha os olhos muito abertos para sair da situação.', threeLine:'Há pessoas que, mesmo tendo tudo, não evitam as situações negativas, mas se adaptam a elas. Não há falha, mas também não há ventura.', fourLine:'Quem se tem em muito alta conta não consegue a união conjugal porque ninguém parece estar à sua altura.', fiveLine:'A união se dá com uma pessoa de classe social inferior; mas, não há problema, porque a pessoa sabe se adaptar.', topLine:'A união conjugal é superficial e vazia, destinada somente a cumprir um papel social. Seria bom analisar o vínculo.'},
    {code: 55, image: 'https://raw.githubusercontent.com/rufedupo/codex-mutatio-app/main/public/assets/images/hexagrams/hexagram_55.png', title: 'ABUNDÂNCIA (PLENITUDE)', imageTitle:'Trovão sobre trovão', description:'Alcançaram-se o êxito e a abundância. Se quiser continuar avançando, é necessário compartilhar com outros o que tem.', inside:'Impulso', outside:'Impulso', bottomLine:'O encontro com a pessoa que representa o poder acontece sem nenhum problema. Isso acarreta progresso.', twoLine:'Quem se enche de méritos para impressionar os superiores não conseguirá sua aprovação; mas, se for perseverante, terá fortuna.', threeLine:'Tudo parece estar contra; não se pode contar com amigos.', fourLine:'A couraça com que a pessoa se defende nunca deve impedir a passagem da luz, ou seja, é bom retirar-se e defender-se, mas não se sufocar.', fiveLine:'Aparecem boas companhias que levarão, sem dúvida, ao êxito.', topLine:'Quem somente busca plenitude e glória para si terminará sozinho no final.'},
    {code: 56, image: 'https://raw.githubusercontent.com/rufedupo/codex-mutatio-app/main/public/assets/images/hexagrams/hexagram_56.png', title: 'O VIAJANTE', imageTitle:'Fogo sobre montanha', description:'Quando se entra em um novo círculo ou se é estrangeiro, é preciso aumentar as precauções e aprender os costumes do lugar.', inside:'Quietude', outside:'Clareza', bottomLine:'Se, estando em um lugar desconhecido, alguém perde sua dignidade ocupando-se com coisas sem importância, terá do que se arrepender.', twoLine:'Quem está em círculos estranhos, mas pode se autoabastecer, logo consegue se relacionar com os demais.', threeLine:'Um estrangeiro que se comportar de maneira provocadora sem dúvida se colocará em perigo.', fourLine:'Em um círculo estranho, ainda quando nao houver perigo iminente, convém manter-se atento.', fiveLine:'Quem, estando em um lugar novo, aspirar o alto com humildade e boa disposição terá fortuna.', topLine:'Só os ignorantes se mostram arrogantes diante de pessoas que não os conhecem ou quando estão em um novo círculo de pessoas.'},
    {code: 57, image: 'https://raw.githubusercontent.com/rufedupo/codex-mutatio-app/main/public/assets/images/hexagrams/hexagram_57.png', title: 'A SUAVIDADE (O PENETRANTE, VENTO)', imageTitle:'Vento sobre vento', description:'Este é um momento de progresso, de modo que não é necessário se deixar levar nem pela indecisão nem por extrema cautela.', inside:'Suavidade', outside:'Suavidade', bottomLine:'A vacilação constante e o retrocesso depois de cada passo são as circunstâncias que impedem o êxito.', twoLine:'Quem se esquiva de seus compromissos e procura no oráculo a resposta que espera só encontrará confusão.', threeLine:'Quem avançar utilizando métodos violentos terá motivos para se arrepender.', fourLine:'Não há motivos para arrependimento; agiu de maneira lícita e tudo aponta para uma melhoria.', fiveLine:'O começo pode ser difícil, mas haverá um final muito bom. É preciso passar à ação.', topLine:'Quem deixa nas mãos dos outros todas as suas defesas e seus segredos terá motivos para se arrepender.'},
    {code: 58, image: 'https://raw.githubusercontent.com/rufedupo/codex-mutatio-app/main/public/assets/images/hexagrams/hexagram_58.png', title: 'ALEGRIA (LAGO)', imageTitle:'Lago sobre lago', description:'Embora o empreendimento possa parecer difícil, os passos a dar estão muito claros e conta-se com gente de valor. Grande fortuna.', inside:'Serenidade', outside:'Serenidade', bottomLine:'Começa um período de grande harmonia interna e, portanto, de muita felicidade.', twoLine:'A sinceridade pode surpreender a terceiros, porém, haverá boa fortuna e nenhum motivo de arrependimento.', threeLine:'Quem vai de um lado a outro em busca de prazer, sem pensar em nenhuma outra coisa, atrairá sobre si a desgraça.', fourLine:'Quem, preocupado com os que estão em sua volta, busca o prazer para si mesmo e para os seus finalmente o encontrará.', fiveLine:'Situação perigosa. Está depositando a confiança em alguém que não a merece, o que pode causar problemas.', topLine:'Quem é feito para mandar desfruta organizando os outros serenamente, de modo que estes lhe obedecem com alegria.'},
    {code: 59, image: 'https://raw.githubusercontent.com/rufedupo/codex-mutatio-app/main/public/assets/images/hexagrams/hexagram_59.png', title: 'DISPERSÃO (DISSOLUÇÃO)', imageTitle:'Vento sobre água', description:'Devem ser tomadas decisões importantes. É fundamental ser solidário com os demais.', inside:'Perigo', outside:'Suavidade', bottomLine:'Para quem quiser desviar-se do mal, será lícito tomar qualquer outro caminho.', twoLine:'Além de deixar de lado o egoísmo, é necessário aproximar-se com atitude solidária. Isso trará grande alegria.', threeLine:'Nesse momento, é necessário renunciar ao amor-próprio. No mundo há mais pessoas.', fourLine:'Quando se avança em conjunto, é preciso deixar de lado todo o favoritismo pessoal; é necessário ter a mente aberta.', fiveLine:'Surgirão ideias interessantes que permitirão a aproximação de colaboradores interessados em evoluir.', topLine:'Os perigos e os bloqueios terminaram; haverá progresso em tudo o que empreender.'},
    {code: 60, image: 'https://raw.githubusercontent.com/rufedupo/codex-mutatio-app/main/public/assets/images/hexagrams/hexagram_60.png', title: 'LIMITAÇÃO', imageTitle:'Água sobre lago', description:'Nesse momento, cada um deverá impor seus próprios limites, aceitar as regras e se esforçar. Se conseguir, haverá ventura.', inside:'Serenidade', outside:'Perigo', bottomLine:'Antes de sair para o exterior e prosperar, será necessário deter-se e aguardar o momento propício.', twoLine:'Quem não souber se refrear, quem se lançar cegamente seguindo seus impulsos, haverá de se arrepender. É momento de restrição.', threeLine:'Quem não observa sequer as próprias regras terá motivos para se lamentar.', fourLine:'Impor a si mesmo limites não é fácil nem gratificante, mas pode se conseguir com sereno esforço. Quem o conseguir terá grande ventura.', fiveLine:'Quem quiser impor limites firmes aos demais deverá começar por impô-los a si mesmo.', topLine:'Nunca é conveniente uma restrição exagerada, pois, com isso, não se consegue virtude, mas debilidade de corpo e espírito.'},
    {code: 61, image: 'https://raw.githubusercontent.com/rufedupo/codex-mutatio-app/main/public/assets/images/hexagrams/hexagram_61.png', title: 'VERDADE INTERIOR', imageTitle:'Vento sobre lago', description:'Não é preciso ter medo de se mostrar tal como é; a sinceridade consigo mesmo e com os demais é a chave para obter a autoconfiança.', inside:'Serenidade', outside:'Suavidade', bottomLine:'É tempo de pensar em si mesmo, e não nos demais. Se seguir esse preceito, haverá boa fortuna.', twoLine:'Quando se é verdadeiro, e não se oculta a própria força, se desperta a confiança e a admiração dos demais, visto que não se fez nada para consegui-las.', threeLine:'A força não emana da personalidade, mas das relações que a pessoa estabelece. Isso traz desassossego, visto que ninguém é totalmente dono da situação.', fourLine:'A maneira de avançar própria para este momento baseia-se na busca da espiritualidade.', fiveLine:'Há uma pessoa que possui lucidez suficiente para organizar os homens. É necessário aproximar-se dela.', topLine:'As palavras dificilmente demonstram alguma coisa; se quiser convencer, deve mostrar feitos.'},
    {code: 62, image: 'https://raw.githubusercontent.com/rufedupo/codex-mutatio-app/main/public/assets/images/hexagrams/hexagram_62.png', title: 'A PREPONDERÂNCIA DO PEQUENO', imageTitle:'Trovão sobre montanha', description:'Em momentos de incerteza, é fundamental mostrar-se modesto e cauteloso. É preciso tentar somente pequenas obras.', inside:'Impulso', outside:'Quietude', bottomLine:'Neste momento, quem confiar demais em si mesmo e quiser chegar muito longe, finalmente deverá se arrepender.', twoLine:'O momento é perigoso. Quem pretende fazer agora grandes obras encontrará dificuldades significativas.', threeLine:'As pessoas orgulhosas e altivas ignoram os conselhos; mesmo assim, devem saber que é momento de cautela.', fourLine:'Para obter o que se deseja não será necessário dar nenhum passo; somente mantendo a serenidade exterior sua obtenção será possível.', fiveLine:'Embora tenha poder e capacidade, há situações nas quais não se pode fazer nada, a não ser esperar.', topLine:'Quem quiser fazer mais do que pode certamente sofrerá humilhações.'},
    {code: 63, image: 'https://raw.githubusercontent.com/rufedupo/codex-mutatio-app/main/public/assets/images/hexagrams/hexagram_63.png', title: 'APÓS A CONCLUSÃO', imageTitle:'Água sobre trovão', description:'As épocas de tranquilidade e avanço paulatino que não exigem esforços podem induzir à fraqueza e ao descuido. É necessário manter-se alerta.', inside:'Impulso', outside:'Perigo', bottomLine:'Se, diante do menor sinal de perigo, alguém reflete e retrocede, não haverá problema nem desgraça.', twoLine:'Se, agindo com consciência, alguém julga erroneamente sua atitude, não deve se preocupar; sem necessidade de fazer nada, recuperará o respeito.', threeLine:'Se for necessário aplicar castigos, isso deverá ser feito com a decisão firme de não voltar atrás.', fourLine:'Em meio à tranquilidade e à prosperidade, aparecem desordens e problemas desagradáveis. É necessário levar isso em conta e ser cauteloso.', fiveLine:'O que conta no mundo não é a aparência, mas o conteúdo.', topLine:'Se agir impulsivamente nesse momento, corre o risco de cometer erros.'},
    {code: 64, image: 'https://raw.githubusercontent.com/rufedupo/codex-mutatio-app/main/public/assets/images/hexagrams/hexagram_64.png', title: 'ANTES DA CONCLUSÃO', imageTitle:'Fogo sobre água', description:'Para sair do estado de desordem, são necessários equilíbrio e prudência; boas intenções não são suficientes.', inside:'Perigo', outside:'Clareza', bottomLine:'Em um período de transição, é tentador avançar; mas, quando a desordem cessa, essas pequenas vitórias podem resultar ridículas e inúteis.', twoLine:'A chave é a paciência. Mas esta não é mera espera inativa, e, sim, um tempo de quietude e fortalecimento interior.', threeLine:'Quando o momento da ação se aproxima, vive-se o instante no qual é difícil refrear os impulsos. É preciso não tomar nenhuma iniciativa agora, pois tudo seria arruinado.', fourLine:'Momento de avanço. Depois da espera, é hora de avançar. Haverá recompensas.', fiveLine:'A desordem e os inimigos desapareceram. Agora é o momento de reconstruir, de desenvolver atividades serenas, com companhia.', topLine:'Está por vir uma etapa de alegria, mas até que isso aconteça, convém manter a cabeça no lugar e não perder a cautela.'}
]
let rowsCalculate: any[] = [];

export default function OSendTextOracle() {
    const [ question, setQuestion ] = useState('');
    const [ focusText, setFocusText ] = useState(false);
    const [ hiddenLogo, setHiddenLogo ] = useState(true);
    const [ questionSended, setQuestionSended ] = useState(false);
    const [ coinTime, setCoinTimes ] = useState(0);
    const [ displayCalculate, setDisplayCalculate ] = useState('none');
    const [ displayHexagram, setDisplayHexagram ] = useState('none');
    const [ hexagramGenerated, setHexagramGenerated ] = useState(false);
    const [ hexagramPrincipal, setHexagramPrincipal ] = useState({
        code: 0, image: '', title: '', imageTitle:'', description:'', inside:'', outside:'', bottomLine:'', twoLine:'', threeLine:'', fourLine:'', fiveLine:'', topLine:''
    });
    const [ hexagramComplement, setHexagramComplement ] = useState({
        code: 0, image: '', title: '', imageTitle:'', description:'', inside:'', outside:'', bottomLine:'', twoLine:'', threeLine:'', fourLine:'', fiveLine:'', topLine:''
    });

    const seedQuestionOracle = () => {
        setQuestionSended((prev) => !prev);
    };

    const backQuestion = () => {
        setQuestionSended((prev) => !prev);
        setCoinTimes(0);
        setDisplayCalculate('none');
        setDisplayHexagram('none');
        setHexagramGenerated(false);
        rowsCalculate = [];
    };

    const handleFocusInput = () => {
        setFocusText((prev) => !prev);
        setHiddenLogo((prev) => !prev)
    };

    const onClickCoinButton = () => {
        if (coinTime < 6) { 
            let oneCoin = coins[Math.round(Math.random() * 100)%2];
            let twoCoin = coins[Math.round(Math.random() * 100)%2];
            let threeCoin = coins[Math.round(Math.random() * 100)%2];
            let sumCoins = oneCoin.value + twoCoin.value + threeCoin.value;
            let yinYang = yinYangs.find((yy) => yy.value == sumCoins);
            rowsCalculate[coinTime] = { 
                id: coinTime,
                values: [
                    {id: 1, image: oneCoin.image},
                    {id: 2, image: twoCoin.image},
                    {id: 3, image: threeCoin.image}
                ],
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
        let codHexPrincipal = codeHexagrams.find(hp => hp.outside === symbolOutsidePrincipal?.id && hp.inside === symbolInsidePrincipal?.id);
        let symbolOutsideComplement = symbols.find(symbol => rowsCalculate[5].complement === symbol.firstLine && 
                                                    rowsCalculate[4].complement === symbol.secondLine &&
                                                    rowsCalculate[3].complement === symbol.thirtLine);
 
        let symbolInsideComplement = symbols.find(symbol => rowsCalculate[2].complement === symbol.firstLine && 
                                                   rowsCalculate[1].complement === symbol.secondLine &&
                                                   rowsCalculate[0].complement === symbol.thirtLine);
        let codHexComplement = codeHexagrams.find(hc => hc.outside === symbolOutsideComplement?.id && hc.inside === symbolInsideComplement?.id);                                           
        let hexPrincipal = infoHexagrams?.find(i => i.code === codHexPrincipal?.code);
        let hexComplement = infoHexagrams?.find(i => i.code === codHexComplement?.code);
        setHexagramPrincipal({
            code: hexPrincipal?.code ? hexPrincipal?.code : 0,
            image: hexPrincipal?.image ? hexPrincipal?.image : '',
            title: hexPrincipal?.title ? hexPrincipal?.title : '',
            imageTitle: hexPrincipal?.imageTitle ? hexPrincipal?.imageTitle : '', 
            description: hexPrincipal?.description ? hexPrincipal?.description : '',
            inside: hexPrincipal?.inside ? hexPrincipal?.inside : '',
            outside: hexPrincipal?.outside ? hexPrincipal?.outside : '',
            bottomLine: hexPrincipal?.bottomLine ? hexPrincipal?.bottomLine : '',
            twoLine: hexPrincipal?.twoLine ? hexPrincipal?.twoLine : '',
            threeLine: hexPrincipal?.threeLine ? hexPrincipal?.threeLine : '', 
            fourLine: hexPrincipal?.fourLine ? hexPrincipal?.fourLine : '',
            fiveLine: hexPrincipal?.fiveLine ? hexPrincipal?.fiveLine : '',
            topLine: hexPrincipal?.topLine ? hexPrincipal?.topLine : ''
        });
        setHexagramComplement({
            code: hexComplement?.code ? hexComplement?.code : 0,
            image: hexComplement?.image ? hexComplement?.image : '',
            title: hexComplement?.title ? hexComplement?.title : '',
            imageTitle: hexComplement?.imageTitle ? hexComplement?.imageTitle : '', 
            description: hexComplement?.description ? hexComplement?.description : '',
            inside: hexComplement?.inside ? hexComplement?.inside : '',
            outside: hexComplement?.outside ? hexComplement?.outside : '',
            bottomLine: hexComplement?.bottomLine ? hexComplement?.bottomLine : '',
            twoLine: hexComplement?.twoLine ? hexComplement?.twoLine : '',
            threeLine: hexComplement?.threeLine ? hexComplement?.threeLine : '', 
            fourLine: hexComplement?.fourLine ? hexComplement?.fourLine : '',
            fiveLine: hexComplement?.fiveLine ? hexComplement?.fiveLine : '',
            topLine: hexComplement?.topLine ? hexComplement?.topLine : ''
        });
        setDisplayHexagram('flex');
        setHexagramGenerated(true);
    }

    const onClickInfoOracle = () => {
        console.log('Info oracle');
    };

    return (
        <Box>
            <Box>
                <Collapse in={hiddenLogo&&!questionSended}>
                    <Box sx={{textAlign: '-webkit-center', paddingTop: '30px'}}>
                        <AAvatar image='https://raw.githubusercontent.com/rufedupo/codex-mutatio-app/main/public/assets/images/iconPage/TartugaMutatioColor.png' alt='turtle' height={250} width={250} variant='circular' />
                        <Typography variant='h3' sx={{
                            fontFamily: 'babylonica',
                            color: '#e6ce5f'
                        }}>Codex Mutatio</Typography>
                    </Box>
                </Collapse>
                <Collapse in={focusText} sx={{width: '800px'}} >
                    <MStepList
                        title='Formulação da pergunta'
                        description='Para que o Oráculo seja claro em sua resposta, a pergunta deve ser bem formulada. Obviamente, não tem sentido fazer perguntas muito genéricas, do tipo: Serei feliz? Sou atraente? Vou ganhar na Mega Sena? Ou qualquer outra pergunta cuja resposta se limite a "sim" ou "não".'
                        stepsTitle='Alguns exemplos de perguntas bem formuladas podem ajudar:'
                        steps={steps} />
                </Collapse>
                <Collapse in={!questionSended} sx={{width: '800px'}} >
                    <Box sx={{  
                        position: 'fixed',
                        top: '370px',
                        width: '800px'
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
                <Collapse in={questionSended} sx={{width: '800px'}} >
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
                                <AAvatar image={coins[0].image} alt='cara' width={100} height={100} />
                                <Typography variant='caption' color='#d7cfa5' component="div">CARA (3)</Typography>
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
                                <AAvatar image={coins[1].image} alt='coroa' width={100} height={100} />
                                <Typography variant='caption' color='#847129' component="div">COROA (2)</Typography>
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
                                                    {row.values.map((coin: any) => (
                                                        <AAvatar key={'row_'+row.id+'_avatar_'+coin.id} image={coin.image} width={20} height={20} />
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
                            disabled={coinTime<6 || hexagramGenerated}
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
                        <Box display={displayHexagram} sx={{marginTop: '20px'}}>
                            <TableContainer component={Paper}>
                                <Table sx={{ bgColor:'e6ce5f' }} size="small"  aria-label="customized table">
                                    <TableHead>
                                        <StyledTableRow key="headerTable">
                                            <StyledTableCell align='center' sx={{width: '115px'}}></StyledTableCell>
                                            <StyledTableCell align='center' sx={{color: '#ac001c'}}><Typography variant='overline'>PRINCIPAL</Typography></StyledTableCell>
                                            <StyledTableCell align='center' sx={{color: '#ac001c'}}><Typography variant='overline'>COMPLEMENTAR</Typography></StyledTableCell>
                                        </StyledTableRow>
                                    </TableHead>
                                    <TableBody>
                                        <StyledTableRow>
                                            <StyledTableCell align='left' sx={{ backgroundColor: '#ac001c', color: '#e6ce5f', paddingTop: '5px', paddingBottom: '5px'}}><Typography variant='overline'>Hexagrama</Typography></StyledTableCell>
                                            <StyledTableCell sx={{textAlign: '-webkit-center', paddingTop: '5px', paddingBottom: '0px' }}><AImageHexagram src={hexagramPrincipal?.image ? hexagramPrincipal?.image : ''} width={100} height={69} alt='Hexagrama Principal' /></StyledTableCell>
                                            <StyledTableCell sx={{textAlign: '-webkit-center', paddingTop: '5px', paddingBottom: '0px' }}><AImageHexagram src={hexagramComplement?.image ? hexagramComplement?.image : ''} width={100} height={69} alt='Hexagrama Complementar' /></StyledTableCell>
                                        </StyledTableRow>
                                        <StyledTableRow>
                                            <StyledTableCell align='left' sx={{ backgroundColor: '#ac001c', color: '#e6ce5f', paddingTop: '5px', paddingBottom: '5px' }}><Typography variant='overline'>Significado</Typography></StyledTableCell>
                                            <StyledTableCell align='center' sx={{ paddingTop: '5px', paddingBottom: '5px' }}>{hexagramPrincipal?.imageTitle}</StyledTableCell>
                                            <StyledTableCell align='center' sx={{ paddingTop: '5px', paddingBottom: '5px' }}>{hexagramComplement?.imageTitle}</StyledTableCell>
                                        </StyledTableRow>
                                        <StyledTableRow>
                                            <TableCell align='left' sx={{ backgroundColor: '#ac001c', color: '#e6ce5f', paddingTop: '5px', paddingBottom: '5px' }}><Typography variant='overline'>Código</Typography></TableCell>
                                            <TableCell align='center' sx={{ paddingTop: '5px', paddingBottom: '5px' }}><Typography variant='body2'>{hexagramPrincipal?.code}</Typography></TableCell>
                                            <TableCell align='center' sx={{ paddingTop: '5px', paddingBottom: '5px' }}><Typography variant='body2'>{hexagramComplement?.code}</Typography></TableCell>
                                        </StyledTableRow>
                                        <StyledTableRow>
                                            <TableCell align='left' sx={{ backgroundColor: '#ac001c', color: '#e6ce5f', paddingTop: '5px', paddingBottom: '5px' }}><Typography variant='overline'>Título</Typography></TableCell>
                                            <TableCell align='center' sx={{ paddingTop: '5px', paddingBottom: '5px'}}><Typography variant='body2'>{hexagramPrincipal?.title}</Typography></TableCell>
                                            <TableCell align='center' sx={{ paddingTop: '5px', paddingBottom: '5px'}}><Typography variant='body2'>{hexagramComplement?.title}</Typography></TableCell>
                                        </StyledTableRow>
                                        <StyledTableRow>
                                            <TableCell align='left' sx={{ backgroundColor: '#ac001c', color: '#e6ce5f', paddingTop: '5px', paddingBottom: '5px' }}><Typography variant='overline'>No interior</Typography></TableCell>
                                            <TableCell align='center' sx={{ paddingTop: '5px', paddingBottom: '5px'}}><Typography variant='body2'>{hexagramPrincipal?.inside}</Typography></TableCell>
                                            <TableCell align='center' sx={{ paddingTop: '5px', paddingBottom: '5px'}}><Typography variant='body2'>{hexagramComplement?.inside}</Typography></TableCell>
                                        </StyledTableRow>
                                        <StyledTableRow>
                                            <TableCell align='left' sx={{ backgroundColor: '#ac001c', color: '#e6ce5f', paddingTop: '5px', paddingBottom: '5px' }}><Typography variant='overline'>No exterior</Typography></TableCell>
                                            <TableCell align='center' sx={{ paddingTop: '5px', paddingBottom: '5px'}}><Typography variant='body2'>{hexagramPrincipal?.outside}</Typography></TableCell>
                                            <TableCell align='center' sx={{ paddingTop: '5px', paddingBottom: '5px'}}><Typography variant='body2'>{hexagramComplement?.outside}</Typography></TableCell>
                                        </StyledTableRow>
                                        <StyledTableRow>
                                            <TableCell align='left' sx={{ backgroundColor: '#ac001c', color: '#e6ce5f', paddingTop: '5px', paddingBottom: '5px' }}><Typography variant='overline'>Descrição</Typography></TableCell>
                                            <TableCell align='left' sx={{ paddingTop: '5px', paddingBottom: '5px'}}><Typography variant='body2'>{hexagramPrincipal?.description}</Typography></TableCell>
                                            <TableCell align='left' sx={{ paddingTop: '5px', paddingBottom: '5px'}}><Typography variant='body2'>{hexagramComplement?.description}</Typography></TableCell>
                                        </StyledTableRow>
                                        <StyledTableRow>
                                            <TableCell align='left' sx={{ backgroundColor: '#ac001c', color: '#e6ce5f', paddingTop: '5px', paddingBottom: '5px' }}><Typography variant='overline'>Linha inferior</Typography></TableCell>
                                            <TableCell align='left' sx={{ paddingTop: '5px', paddingBottom: '5px'}}><Typography variant='body2'>{hexagramPrincipal?.bottomLine}</Typography></TableCell>
                                            <TableCell align='left' sx={{ paddingTop: '5px', paddingBottom: '5px'}}><Typography variant='body2'>{hexagramComplement?.bottomLine}</Typography></TableCell>
                                        </StyledTableRow>
                                        <StyledTableRow>
                                            <TableCell align='left' sx={{ backgroundColor: '#ac001c', color: '#e6ce5f', paddingTop: '5px', paddingBottom: '5px' }}><Typography variant='overline'>Linha 2</Typography></TableCell>
                                            <TableCell align='left' sx={{ paddingTop: '5px', paddingBottom: '5px'}}><Typography variant='body2'>{hexagramPrincipal?.twoLine}</Typography></TableCell>
                                            <TableCell align='left' sx={{ paddingTop: '5px', paddingBottom: '5px'}}><Typography variant='body2'>{hexagramComplement?.twoLine}</Typography></TableCell>
                                        </StyledTableRow>
                                        <StyledTableRow>
                                            <TableCell align='left' sx={{ backgroundColor: '#ac001c', color: '#e6ce5f', paddingTop: '5px', paddingBottom: '5px' }}><Typography variant='overline'>Linha 3</Typography></TableCell>
                                            <TableCell align='left' sx={{ paddingTop: '5px', paddingBottom: '5px'}}><Typography variant='body2'>{hexagramPrincipal?.threeLine}</Typography></TableCell>
                                            <TableCell align='left' sx={{ paddingTop: '5px', paddingBottom: '5px'}}><Typography variant='body2'>{hexagramComplement?.threeLine}</Typography></TableCell>
                                        </StyledTableRow>
                                        <StyledTableRow>
                                            <TableCell align='left' sx={{ backgroundColor: '#ac001c', color: '#e6ce5f', paddingTop: '5px', paddingBottom: '5px' }}><Typography variant='overline'>Linha 4</Typography></TableCell>
                                            <TableCell align='left' sx={{ paddingTop: '5px', paddingBottom: '5px'}}><Typography variant='body2'>{hexagramPrincipal?.fourLine}</Typography></TableCell>
                                            <TableCell align='left' sx={{ paddingTop: '5px', paddingBottom: '5px'}}><Typography variant='body2'>{hexagramComplement?.fourLine}</Typography></TableCell>
                                        </StyledTableRow>
                                        <StyledTableRow>
                                            <TableCell align='left' sx={{ backgroundColor: '#ac001c', color: '#e6ce5f', paddingTop: '5px', paddingBottom: '5px' }}><Typography variant='overline'>Linha 5</Typography></TableCell>
                                            <TableCell align='left' sx={{ paddingTop: '5px', paddingBottom: '5px'}}><Typography variant='body2'>{hexagramPrincipal?.fiveLine}</Typography></TableCell>
                                            <TableCell align='left' sx={{ paddingTop: '5px', paddingBottom: '5px'}}><Typography variant='body2'>{hexagramComplement?.fiveLine}</Typography></TableCell>
                                        </StyledTableRow>
                                        <StyledTableRow>
                                            <TableCell align='left' sx={{ backgroundColor: '#ac001c', color: '#e6ce5f', paddingTop: '5px', paddingBottom: '5px' }}><Typography variant='overline'>Linha superior</Typography></TableCell>
                                            <TableCell align='left' sx={{ paddingTop: '5px', paddingBottom: '5px'}}><Typography variant='body2'>{hexagramPrincipal?.topLine}</Typography></TableCell>
                                            <TableCell align='left' sx={{ paddingTop: '5px', paddingBottom: '5px'}}><Typography variant='body2'>{hexagramComplement?.topLine}</Typography></TableCell>
                                        </StyledTableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>
                    </Box>
                </Collapse>
            </Box>
        </Box>
    );
}