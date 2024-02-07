import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import gameData from './gameData.json'
import  Link  from '@mui/material/Link';
import TeamModal from './teamModal';


export default function DenseTable() {
  
  const games = gameData.games;
  const mavsData = games.filter((game) => game.homeTeam === 'DAL' || game.awayTeam === 'DAL');
  const otherTeamsData = games.filter((game) => game.homeTeam !== 'DAL' && game.awayTeam !== 'DAL');
  const sortedGameData = [...mavsData, ...otherTeamsData];

  const [open, setOpen] = React.useState(false);
  const [selectedTeam, setSelectedTeam] = React.useState(null);
  


  const handleOpen = (team) => {
    setSelectedTeam(team);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  return (
    <><TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Opponent</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Date/Time</TableCell>
            <TableCell align="center">Win/Loss</TableCell>
            <TableCell align="center">Score</TableCell>
            <TableCell align="center">Season Series</TableCell>
            <TableCell align="center">Location/Arena</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedGameData.map((game) => (
            <TableRow key={game.nbaGameId}>
              <TableCell component="th" scope="row">
                <Link onClick={() => handleOpen("DAL")}>
                  DAL
                </Link>
                {game.homeTeam === 'DAL' ? ' vs ' : ' at '}
                <Link onClick={() => handleOpen(game.homeTeam === 'DAL' ? game.awayTeam : game.homeTeam)}>
                  {game.homeTeam === 'DAL' ? game.awayTeam : game.homeTeam}
                </Link>
              </TableCell>
              <TableCell align="center">{game.timeEst}</TableCell>
              <TableCell align="center">{game.date}</TableCell>
              <TableCell align="center">{game.gameStatus === 3 ? 'Win' : 'Loss'}</TableCell>
              <TableCell align="center">
                <Link>
                  {game.awayPts}-{game.homePts}
                </Link>
              </TableCell>
              <TableCell align="center">{game.seasonType}</TableCell>
              <TableCell align="center">{game.location}/{game.arena}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    {selectedTeam && (
        <TeamModal isOpen={open} handleClose={handleClose} selectedTeam={selectedTeam} />
      )}
    </>
  );
};
