import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box } from '@mui/material';
import Paper from '@mui/material/Paper';
import { TableVirtuoso } from 'react-virtuoso';


const columns = [
  { width: 200, label: 'Name', dataKey: 'name' },
  { width: 120, label: 'Height (in)', dataKey: 'height', numeric: true },
  { width: 120, label: 'Weight (lbs)', dataKey: 'weight', numeric: true },
  { width: 120, label: 'Position', dataKey: 'position', numeric: true },
  { width: 120, label: 'Jersey Number', dataKey: 'jerseyNum', numeric: true },
  { width: 120, label: 'Age', dataKey: 'age', numeric: true },
  { width: 120, label: 'Season', dataKey: 'season', numeric: true },
  { width: 120, label: 'Games Played', dataKey: 'gp', numeric: true },
  { width: 120, label: 'Games Started', dataKey: 'gs', numeric: true },
  { width: 120, label: 'Minutes', dataKey: 'min', numeric: true },
  { width: 120, label: 'FGM', dataKey: 'fgm', numeric: true },
  { width: 120, label: 'FGA', dataKey: 'fga', numeric: true },
  { width: 120, label: 'FGP', dataKey: 'fgp', numeric: true },
  { width: 120, label: 'TPM', dataKey: 'tpm', numeric: true },
  { width: 120, label: 'TPA', dataKey: 'tpa', numeric: true },
  { width: 120, label: 'FTM', dataKey: 'ftm', numeric: true },
  { width: 120, label: 'FTA', dataKey: 'fta', numeric: true },
  { width: 120, label: 'FTP', dataKey: 'ftp', numeric: true },
  { width: 120, label: 'OREB', dataKey: 'oreb', numeric: true },
  { width: 120, label: 'DREB', dataKey: 'dreb', numeric: true },
  { width: 120, label: 'REB', dataKey: 'reb', numeric: true },
  { width: 120, label: 'AST', dataKey: 'ast', numeric: true },
  { width: 120, label: 'STL', dataKey: 'stl', numeric: true },
  { width: 120, label: 'BLK', dataKey: 'blk', numeric: true },
  { width: 120, label: 'TOV', dataKey: 'tov', numeric: true },
  { width: 120, label: 'PF', dataKey: 'pf', numeric: true },
  { width: 120, label: 'PTS', dataKey: 'pts', numeric: true },
  { width: 120, label: '+/-', dataKey: 'plusMinus', numeric: true },
];

const VirtuosoTableComponents = {
  Scroller: React.forwardRef((props, ref) => (
    <TableContainer  component={Paper} {...props} ref={ref} />
  )),
  Table: (props) => (
    <Table {...props} sx={{ borderCollapse: 'separate', tableLayout: 'fixed' }} />
  ),
  TableHead,
  TableRow: ({ item: _item, ...props }) => <TableRow {...props} />,
  TableBody: React.forwardRef((props, ref) => <TableBody {...props} ref={ref} />),
};

function fixedHeaderContent() {
  return (
    <TableRow>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          variant="head"
          align={column.numeric || false ? 'right' : 'left'}
          style={{ width: column.width }}
          sx={{
            backgroundColor: 'background.paper',
          }}
        >
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  );
}

function rowContent(_index, player) {
  return (
    <React.Fragment>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          align={column.numeric || false ? 'right' : 'left'}
        >
          {player[column.dataKey]}
        </TableCell>
      ))}
    </React.Fragment>
  );
}

export default function PlayerStatsTable({selectedTeamPlayer}) {
    console.log(selectedTeamPlayer)
  return (
    <Paper style={{ height: 550, width: '100%' }}>
      <TableVirtuoso
        data={selectedTeamPlayer}
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={rowContent}
      />
    </Paper>
  );
}
