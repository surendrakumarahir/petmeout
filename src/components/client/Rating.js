import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function RatingStar() {
    const [value, setValue] = React.useState(2);

    return  <Rating style={{display: "flex"}} value={value} readOnly />
}

Rating.defaultProps = {
    controlled: false,
    readOnly: true,
    disabled: false,
    pristine: false,
}
