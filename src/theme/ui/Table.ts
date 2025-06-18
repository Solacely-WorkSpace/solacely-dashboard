import type { Components, Theme } from "@mui/material";

const Table = (theme: Theme): Components<Theme> => ({
  MuiTable: {
    styleOverrides: {
      root: {
        borderSpacing: 0,
        width: "100%",
        backgroundColor: theme.palette.background.paper,
        boxShadow: "none",
        borderRadius: 0,
        overflow: "hidden",
      },
    },
  },
  MuiTableContainer: {
    styleOverrides: {
      root: {
        boxShadow: "none",
        borderRadius: 0,
        borderBottom: '1px solid #EDF2F7',
      },
    },
  },
  MuiTableHead: {
    styleOverrides: {
      root: {
        borderBottom: "1px solid #EDF2F7",
        borderTop: "1px solid #EDF2F7",
      },
    },
  },
  MuiTableRow: {
    styleOverrides: {
      root: {
        color: "#718096",
        fontSize: 16,
        fontWeight: 700,
        minHeight: 100,
        "&:last-child td, &:last-child th": {
          borderBottom: 0,
        },
        "&:hover": {
          backgroundColor: theme.palette.action.hover,
        },
      },
    },
  },
  MuiTableBody: {
    styleOverrides: {
      root: {
        color: "red",
        fontSize: 16,
        fontWeight: 700,
      },
    },
  },
  MuiTableCell: {
    styleOverrides: {
      root: {
        color: "red",
        borderBottom: '1px solid #EDF2F7',
        fontSize: 16,
        fontWeight: 700,
        height: 80,
      },
      head: {
        color: "#718096",
        fontSize: 16,
        fontWeight: 700,
      },
    },
  },
});

export default Table;
