import React from 'react';
import { Modal, Box, Button } from '@mui/material';
import gameData from './gameData.json'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function TeamModal({ isOpen, handleClose, selectedTeam }) {
    const selectedTeamData = gameData.teamRanks.find((team) => team.team === selectedTeam);
    
    
    return (
      <Modal open={isOpen} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            height: 400,
            p: 4,
          }}
        >
          <Box>
            <TableContainer>
              <Table sx={{ minWidth: 0 }} size="small" aria-label="team stats table">
                <TableHead>
                  <TableRow>
                    <TableCell>Stats</TableCell>
                    <TableCell>Rank</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  
                    <TableRow >
                      <TableCell component="th" scope="row">
                        {selectedTeamData['OFF RTG']}
                      </TableCell>
                      <TableCell>{selectedTeamData['OFF RTG_rank']}</TableCell>
                    </TableRow>
                    <TableRow >
                      <TableCell component="th" scope="row">
                        {selectedTeamData['EFG%']}
                      </TableCell>
                      <TableCell>{selectedTeamData['EFG%_rank']}</TableCell>
                    </TableRow>
                    <TableRow >
                    <TableCell component="th" scope="row">
                        {selectedTeamData['TURNOVERS']}
                      </TableCell>
                      <TableCell>{selectedTeamData['TURNOVERS_rank']}</TableCell>
                    </TableRow>
                    <TableRow >
                    <TableCell component="th" scope="row">
                        {selectedTeamData['OFF REB%']}
                      </TableCell>
                      <TableCell>{selectedTeamData['OFF REB%_rank']}</TableCell>
                    </TableRow>
                    <TableRow >
                    <TableCell component="th" scope="row">
                        {selectedTeamData['FTA']}
                      </TableCell>
                      <TableCell>{selectedTeamData['FTA_rank']}</TableCell>
                    </TableRow>
                    <TableRow >
                    <TableCell component="th" scope="row">
                        {selectedTeamData['DEF RTG']}
                      </TableCell>
                      <TableCell>{selectedTeamData['DEF RTG_rank']}</TableCell>
                    </TableRow>
                    <TableRow >
                    <TableCell component="th" scope="row">
                        {selectedTeamData['OPP. EFG%']}
                      </TableCell>
                      <TableCell>{selectedTeamData['OPP. EFG_rank']}</TableCell>
                    </TableRow>
                    <TableRow >
                    <TableCell component="th" scope="row">
                        {selectedTeamData['TURNOVERS FORCED']}
                      </TableCell>
                      <TableCell>{selectedTeamData['TURNOVERS FORCED_rank']}</TableCell>
                    </TableRow>
                    <TableRow >
                    <TableCell component="th" scope="row">
                        {selectedTeamData['DEF REB%']}
                      </TableCell>
                      <TableCell>{selectedTeamData['DEF REB_rank']}</TableCell>
                    </TableRow>
                    <TableRow >
                    <TableCell component="th" scope="row">
                        {selectedTeamData['FTA ALLOWED']}
                      </TableCell>
                      <TableCell>{selectedTeamData['FTA ALLOWED_rank']}</TableCell>
                    </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Modal>
    );
  }
  