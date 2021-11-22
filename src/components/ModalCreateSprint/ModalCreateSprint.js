import "date-fns";

import { ThemeProvider } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import IconButton from "../Modal/IconButton";
import { ReactComponent as Close } from "../Modal/IconButton/+.svg";
import Button from "../Modal/Button";
import Modal from "../Modal";
import { dataTheme, useStyles } from "./styles-dataPicker";
import "react-datepicker/dist/react-datepicker.css";
import s from "./ModalCreateSprint.module.css";

function ModalCreateSprint({
  onSubmit,
  value,
  setName,
  data,
  setIsModalOpen,
  endDate,
  setEndDate,
  setDurr,
  duration,
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
                value={duration}
                onChange={(e) => setDurr(e.currentTarget.value)}
                id="duration-name"
                className={s.inputDuration}
                placeholder=" "
                type="text"
                name="duration"
                title="Имя может состоять только из цифр."
                pattern="^[0-9]*$"
                autoComplete="off"
                required
              />
              <label htmlFor="duration-name" className={s.label}>
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
