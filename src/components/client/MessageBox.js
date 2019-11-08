import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from  "@material-ui/core/Grid";
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 250,
    },
    button: {
        width: 250,
        margin: theme.spacing(1),
    },
}));

export default function MessageBox() {
    const classes = useStyles();
    const [value, setValue] = React.useState('Controlled');

    const handleChange = event => {
        setValue(event.target.value);
    };

    return (
        <form className={classes.container} noValidate autoComplete="off">
             <Grid container
                   direction="column"
                   justify="center"
                   alignItems="center"
             >
                <Grid item>
                    <TextField
                        id="outlined-textarea"
                        label="Message"
                        placeholder="Placeholder"
                        multiline
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                        rows="8"
                    />
                </Grid>
                <Grid item>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                    >
                        Send
                    </Button>
                </Grid>

            </Grid>
        </form>
    );
}
