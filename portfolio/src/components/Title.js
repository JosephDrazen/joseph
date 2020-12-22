import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const useStyles = makeStyles({
    siteTitle: {
        borderStyle: 'solid',
        borderWidth: 8,
        borderColor: '#fff',
        fontFamily: 'Montserrat, sans-serif',
        textAlign: 'center',
        lineHeight: 1.8,
        verticalAlign: 'middle',
        color: '#fff',
        fontSize: 50,
        width: 100,
        height: 100
    },
});

/*
    function: SiteTitle
    purpose: renders the title logo component
*/
export default function SiteTitle() {
    const classes = useStyles();


    return (
        <Grid container
        spacing={0}
        direction='column'
        alignItems='center'
        justify='center'
        style={{ minHeight: '100vh' }}
        >
            <Grid item xs={3} ><div className={classes.siteTitle}>jm</div></Grid>
            <Grid item xs={3}><ArrowDownwardIcon style={{color: '#fff', marginTop: 50, fontSize: 50}}/></Grid>
        </Grid>
    );
}