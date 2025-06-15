const palette = {
  // Standard MUI color roles
  primary: {
    main: "#521282",
    dark: "#3DC5A1 ", // Primary/1
    light: "#63a4ff", // fallback
    contrastText: "#fff",
  },
  
  secondary: {
    main: "#D84773", // Primary 1 / 2
    dark: "#6D26AB", // Primary 2 / 2
    light: "#E8E9ED", // Primary 1 / 3
    contrastText: "#fff",
  },
  success: {
    main: "#3DC5A1",
    dark: "#D5FFF4",
    light: "#81c784",
    contrastText: "#195444",
  },
   success2: {
    main: "#D5FFF4",
    dark: "#195444",
  },
  warning: {
    main: "#FFCE73", // Yellow shade 1
    dark: "#FF754C", // Accent orange
    light: "#FFE2AC", // Yellow shade 2
    contrastText: "#000",
  },
  error: {
    main: "#f44336",
    dark: "#aa2e25",
    light: "#e57373",
    contrastText: "#fff",
  },
  info: {
    main: "#2196f3",
    dark: "#1769aa",
    light: "#64b5f6",
    contrastText: "#fff",
  },

  // Custom Extensions (non-standard MUI keys)
  backgroundAlt: {
    paper: "#FAFBFC",
    default: "#FFFEFF",
  },

  brand: {
    primary1: ["#FFE5ED", "#D84773", "#E8E9ED", "#F7D9E2", "#FFE5ED"],
    primary2: ["#EDD9FF", "#3D1560", "#6D26AB", "#9B53D9", "#EDD9FF"],
  },

  borderNeutral: {
    1: "#E6E8F0",
    2: "#EDF2F7",
  },

  accent: {
    cream: "#EFEFEF",
    humanskin: "#C99C8A",
    pink: {
      main: "#FFA2C0",
      light: "#FFB7F5",
      background: "#FFEBF6",
      translucent: "#FFE3EC", // Pink opacity
    },
    yellow: {
      light: "#FFCE73",
      dark: "#FFE2AC",
      background: "#FFF3DC",
    },
    orange: {
      main: "#FF754C",
      shade1: "#FF9A7B",
      shade2: "#FFEDE8",
    },
  },
};

export default palette;
