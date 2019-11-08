import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        width:"100%"
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function SelectCat(props) {
    let history = useHistory();
    const classes = useStyles();
    const [state, setState] = React.useState({
        age: '',
        name: 'hai',
    });

    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    // React.useEffect(() => {
    //     setLabelWidth(inputLabel.current.offsetWidth);
    // }, []);

    const handleChange = name => event => {
        setState({
            ...state,
            [name]: event.target.value,
        });

        props.onChange(event.target.value);
    };

    return (
        <div>

            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-native-helper">Category</InputLabel>
                <NativeSelect
                    value={state.age}
                    onChange={handleChange('age')}
                    inputProps={{
                        name: 'age',
                        id: 'age-native-helper',
                    }}
                >
                    <option value="" />
                    <option value="cat">Cat</option>
                    <option value="dog">Dog</option>
                    <option value="fish">Fish</option>
                    <option value="labra-dog">Labra Dog</option>
                    <option value="horse">Horse</option>
                    <option value="bird">Bird</option>
                    <option value="rabbit">Rabbit</option>
                    <option value="parrot">Parrot</option>
                </NativeSelect>
                <FormHelperText>Select a category for filter</FormHelperText>
            </FormControl>

        </div>
    );
}
