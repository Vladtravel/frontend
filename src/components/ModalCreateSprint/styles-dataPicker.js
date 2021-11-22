import { makeStyles } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core";

export const dataTheme = createTheme({
  overrides: {
    MuiPaper: {
      root: {
        backgroundColor: "rgba(255, 255, 255, 0.7)",

        backdropFilter: "blur(24px)",
        "&.MuiPaper-elevation8": {
          borderRadius: 20,
        },
      },
    },

    MuiPickersCalendarHeader: {
      switchHeader: {
        marginTop: 0,
        marginBottom: 0,
        height: 40,
        backgroundColor: "white",
        borderRadius: "20px 20px 0px 0px",

        "& p": {
          fontFamily: "Montserrat",
          fontSize: 18,
          lineHeight: 1.22,
          fontWeight: 500,
          color: "#1B1C20",
        },
      },

      dayLabel: {
        fontFamily: "Montserrat",
        fontWeight: 600,
        fontSize: 12,
        textTransform: "uppercase",
        color: "#FF6B08",
      },
    },

    MuiPickersCalendar: {
      transitionContainer: {
        marginTop: 0,
      },

      week: {
        marginBottom: 6,
      },
    },

    MuiPickersDay: {
      day: {
        width: 32,
        height: 32,
        marginLeft: 3,
        marginRight: 3,
      },

      daySelected: {
        backgroundColor: "#FF6B08",

        "&:hover": {
          backgroundColor: "#FF6B08",
        },

        "& p": {
          color: "white",
        },
      },
    },

    MuiIconButton: {
      label: {
        "& p": {
          fontFamily: "Montserrat",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: 1.21,
          color: "#181C27",
        },
      },
    },
  },

  root: {
    "& .MuiGrid-container": {
      marginRight: 30,
    },

    "& .MuiFormControl-root": {
      margin: 0,

      width: "100%",
    },

    "& label": {
      fontFamily: "Montserrat",
      fontWeight: 400,
      letterSpacing: "0.04em",
      color: "rgba(24, 28, 39, 0.6)",

      "&.MuiFormLabel-root": {
        paddingLeft: 7,
        color: "rgba(24, 28, 39, 0.6)",
        fontSize: 16,

        [`@media (min-width: ${768}px)`]: {
          fontSize: 18,
        },

        "&.MuiFormLabel-root.MuiInputLabel-shrink": {
          fontSize: "1.2rem",
          paddingLeft: 0,
        },
      },

      "& input": {
        paddingLeft: 7,
        fontFamily: "Montserrat",
        fontSize: 18,
        color: "#181C27",
      },

      "& .MuiInput-underline:after": {
        borderBottomColor: "#ff6b08",
      },

      "& .MuiInput-underline:before": {
        borderBottomColor: "rgba(24, 28, 39, 0.2)",
      },

      "& .MuiInput-underline:hover:before": {
        borderBottom: "1px solid rgba(24, 28, 39, 0.2)",
      },
    },
  },
});

export const useStyles = makeStyles({
  root: {
    [`@media (min-width: ${768}px)`]: {
      display: "flex",
      width: 200,
    },

    "& .MuiGrid-container": {
      marginRight: 30,

      height: 50,
      display: "block",
    },

    "& .MuiFormControl-root": {
      margin: 0,
      width: "100%",

      [`@media (min-width: ${768}px)`]: {
        width: "200px",
        paddingTop: 21,
      },
    },

    "& label": {
      fontFamily: "Montserrat",
      fontWeight: 400,
      letterSpacing: "0.04em",
      color: "rgba(24, 28, 39, 0.6)",

      "&.MuiFormLabel-root": {
        paddingLeft: 7,
        color: "rgba(24, 28, 39, 0.6)",
        fontSize: 16,

        [`@media (min-width: ${768}px)`]: {
          fontSize: 18,
        },

        "&.MuiFormLabel-root.MuiInputLabel-shrink": {
          fontSize: "1.2rem",
          paddingLeft: 0,
        },
      },
    },

    "& input": {
      paddingLeft: 7,
      fontFamily: "Montserrat",
      fontSize: 18,
      color: "#181C27",
    },

    "& .MuiInput-underline:after": {
      borderBottomColor: "#ff6b08",
    },

    "& .MuiInput-underline:before": {
      borderBottomColor: "rgba(24, 28, 39, 0.2)",
    },

    "& .MuiInput-underline:hover:before": {
      borderBottom: "1px solid rgba(24, 28, 39, 0.2)",
    },
  },
});
