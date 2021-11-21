import "date-fns";
import { makeStyles } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import IconButton from "../Modal/IconButton";
import { ReactComponent as Close } from "../Modal/IconButton/+.svg";
import Button from "../Modal/Button";
import Modal from "../Modal";
import s from "./ModalCreateSprint.module.css";

const dataTheme = createTheme({
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

    // Header
    MuiPickersCalendarHeader: {
      switchHeader: {
        marginTop: 0,
        marginBottom: 0,
        height: 40,
        backgroundColor: "white",
        borderRadius: "20px 20px 0px 0px",

        "& p": {
          fontFamily: ["Montserrat", "sans-serif"],
          fontSize: 18,
          fontWeight: 500,
          color: "#1B1C20",
        },
      },

      // Arrows
      iconButton: {
        backgroundColor: "transparent",

        "&:hover": {
          backgroundColor: "transparent",
        },
      },

      // Days Header
      daysHeader: {
        padding: "23px 7px",
      },

      // Days
      dayLabel: {
        fontFamily: ["Montserrat", "sans-serif"],
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

    // Day selected
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

    // Day number
    MuiIconButton: {
      label: {
        "& p": {
          fontFamily: ["Montserrat", "sans-serif"],
          fontWeight: 400,
          fontSize: 14,
          color: "#181C27",
        },
      },
    },
  },

  //

  root: {
    "& .MuiGrid-container": {
      marginRight: 30,
    },

    "& .MuiFormControl-root": {
      margin: 0,

      width: "100%",
    },

    // Lable
    "& label": {
      fontFamily: ["Montserrat", "sans-serif"],
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
        fontFamily: ["Montserrat", "sans-serif"],
        fontSize: 18,
        color: "#181C27",
      },

      // Input border
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

const useStyles = makeStyles({
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

    // Lable
    "& label": {
      fontFamily: ["Montserrat", "sans-serif"],
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
      fontFamily: ["Montserrat", "sans-serif"],
      fontSize: 18,
      color: "#181C27",
    },

    // Input border
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

function ModalCreateSprint({
  onSubmit,
  value,
  setName,
  data,
  setIsModalOpen,
  endDate,
  setEndDate,
}) {
  const classes = useStyles();

  return (
    <Modal onClose={setIsModalOpen}>
      <IconButton
        onClick={() => setIsModalOpen(false)}
        className="iconBtn"
        aria-label="close"
      >
        <Close />
      </IconButton>

      <h3 className={s.title}>Створення спринта</h3>
      <form
        className={s.form}
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(data);
          setIsModalOpen(false);
        }}
      >
        <div className={s.formItem}>
          <input
            value={value}
            onChange={(e) => setName(e.currentTarget.value)}
            id="sprint-name"
            className={s.input}
            placeholder=" "
            type="text"
            name="name"
            title="Имя может состоять из букв, цифр, апострофа, тире и пробелов."
            pattern="^[a-zA-Zа-яА-Я-0-9]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            autoComplete="off"
            required
          />
          <label htmlFor="sprint-name" className={s.label}>
            Назва спринта
          </label>

          <div className={classes.root}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <ThemeProvider theme={dataTheme}>
                <Grid container justifyContent="space-around">
                  <DatePicker
                    required
                    disableToolbar
                    variant="inline"
                    format="dd MMMM"
                    id="date-picker-inline"
                    label="Дата закінчення"
                    value={endDate}
                    onChange={(date) => setEndDate(date)}
                  />
                </Grid>
              </ThemeProvider>
            </MuiPickersUtilsProvider>

            <div className={s.formItem}>
              <input
                // value={value}
                // onChange={(e) => setName(e.currentTarget.value)}
                id="sprint-name"
                className={s.inputDuration}
                placeholder=" "
                type="text"
                name="duration"
                title="Имя может состоять только из цифр."
                pattern="^[0-9]*$"
                autoComplete="off"
                required
              />
              <label htmlFor="sprint-name" className={s.label}>
                Тривалість
              </label>
            </div>
          </div>
        </div>

        {/* <label className={s.label}>
            <input
              className={s.input}
              type="checkbox"
              name="previousDays"
              checked={() => null}
              onChange={() => null}
            />
          </label> */}

        <Button className="button" type="submit" text={"Готово"} />

        <Button
          type="button"
          className="btnLink"
          text={"Відміна"}
          onClick={() => setIsModalOpen(false)}
        />
      </form>
    </Modal>
  );
}
export default ModalCreateSprint;
