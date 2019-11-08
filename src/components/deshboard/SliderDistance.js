import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles(theme => ({
    root: {
        width: 300,
    },
    margin: {
        height: theme.spacing(3),
    },
    distance: {
        marginTop: "30px"
    }
}));

const marks = [
    {
        value: 0,
        label: '0',
    },
    {
        value: 5,
        label: '5km',
    },
    {
        value: 10,
        label: '10km',
    },
    {
        value: 15,
        label: '15 km',
    },
    {
        value: 20,
        label: '20km',
    },
    {
        value: 25,
        label: '25km',
    },
    {
        value: 30,
        label: '30km',
    },
];

function valuetext(value) {
    return `${value}km`;
}

export default function SilderDestance(props) {
    const classes = useStyles();

    const handleChange = (event, value) => {
        props.onChange(value);
    };

    return (
        <div className={classes.root}>

            <Typography id="discrete-slider-always" gutterBottom className={classes.distance}>
                Distance
            </Typography>
            <Slider
                onChange={(e, val) => handleChange(e, val)}
                defaultValue={20}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider-always"
                step={5}
                max={30}
                marks={marks}
                valueLabelDisplay="on"
            />
        </div>
    );
}
