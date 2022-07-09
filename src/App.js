import React, { useEffect, useRef } from 'react'
import { Grid } from '@material-ui/core';
import Details from './components/Details/Details'
import Main from './components/Main/Main'


import { useSpeechContext } from '@speechly/react-client'
import useStyles from './styles'

import { PushToTalkButton, PushToTalkButtonContainer, } from '@speechly/react-ui';



const App = () => {

    const classes = useStyles();
    // const { speechState } = useSpeechContext();
    const main = useRef(null);

    const executeScroll = () => main.current.scrollIntoView()

    const { listening } = useSpeechContext();

    useEffect(() => {
        if (listening) {
            executeScroll();
        }
    }, [listening]);
    return (
        <div>
            <Grid className={classes.grid} container spacing={0} alignItems='center' justify='center' style={{ height: '100vh' }} >

                <Grid item xs={12} sm={3} className={classes.mobile}>
                    <Details title='Income' />
                </Grid>
                <Grid ref={main} item xs={12} sm={5} className={classes.main}>
                    <Main />
                </Grid>
                <Grid item xs={12} sm={3} className={classes.desktop}>
                    <Details title='Income' />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Details title='Expense' className={classes.last} />
                </Grid>
            </Grid>
            <PushToTalkButtonContainer>
                <PushToTalkButton />
                {/* <ErrorPanel /> */}
            </PushToTalkButtonContainer>
        </div>
    )
}

export default App