const Paper = (theme: any) => ({
  MuiPaper: {
    styleOverrides: {
      root: {
        borderRadius: 12,
        padding: theme.spacing(2),
      },
    },
  },
});

export default Paper;
