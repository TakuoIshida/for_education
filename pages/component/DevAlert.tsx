import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
    margin: {
        marginTop: 30,
    },
    button: {
        margin: theme.spacing(1),
    },
  }),
);

const SimpleAlerts: React.FC = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState("sample");

  const handleOnClick = (v: string) => {
    console.log(v);
  };
  const _data: string[] = ["dog", "cat", "rabbit"];

  const HTMLEvent = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e.currentTarget.getAttribute("data-item"));
    // console.log(e.currentTarget.dataset.item);
  };
  return (
      <>
    <div className={classes.root}>
      <Alert className={classes.margin} severity="error">This is an error alert! </Alert>
      <Alert className={classes.margin} severity="warning">This is a warning alert — check it out!</Alert>
      <Alert className={classes.margin} severity="info">This is an info alert — check it out!</Alert>
      <Alert className={classes.margin} severity="success">This is a success alert — check it out!</Alert>
    </div>
    <div className="App">
    <ul>
      {_data.map(v => (
        <li onClick={() => handleOnClick(v)}>
          {v}
        </li>
      ))}
    </ul>
  </div>
  <Button onClick={HTMLEvent}
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          startIcon={<SvgIcon />}
          data-item="I'm Home"
        >
          I'm Home
      </Button>
  </>
  );
}
export default SimpleAlerts