import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';



const useStylesBootstrap = makeStyles(theme => ({
    arrow: {
        position: 'absolute',
        fontSize: 6,
        '&::before': {
            content: '""',
            margin: 'auto',
            display: 'block',
            width: 0,
            height: 0,
            borderStyle: 'solid',
        },
    },
    popper: arrowGenerator(theme.palette.common.black),
    tooltip: {
        position: 'relative',
        backgroundColor: theme.palette.common.black,
    },
    tooltipPlacementLeft: {
        margin: '0 8px',
    },
    tooltipPlacementRight: {
        margin: '0 8px',
    },
    tooltipPlacementTop: {
        margin: '8px 0',
    },
    tooltipPlacementBottom: {
        margin: '8px 0',
    },
}));

function BootstrapTooltip(props) {
    const { arrow, ...classes } = useStylesBootstrap();
    const [arrowRef, setArrowRef] = React.useState(null);

    return (
        <Tooltip
            classes={classes}
            PopperProps={{
                popperOptions: {
                    modifiers: {
                        arrow: {
                            enabled: Boolean(arrowRef),
                            element: arrowRef,
                        },
                    },
                },
            }}
            {...props}
            title={
                <React.Fragment>
                    {props.title}
                    <span className={arrow} ref={setArrowRef} />
                </React.Fragment>
            }
        />
    );
}

BootstrapTooltip.propTypes = {
    title: PropTypes.node,
};



export default function CustomizedTooltips() {
    return (
        <>
            <BootstrapTooltip title="The AKC has grouped all of the breeds that it registers into seven categories, or groups, roughly based on function and heritage. Breeds are grouped together because they share traits of form and function or a common heritage.">
                <Button>Bootstrap</Button>
            </BootstrapTooltip>

        </>
    );
}
