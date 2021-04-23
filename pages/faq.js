import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Faq from 'react-faq-component';
import Grid from '@material-ui/core/Grid';
import { Box, Card, Grow, Slide, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    padding: '50px',
    zIndex: 1,
  },
  background: {
    position: 'static',
    height: '100rem',
    zIndex: 0,
    background:
      'linear-gradient(135deg, #99B898 0%, #FECEAB 70%, #FF847F 100%)',
  })

const data = {
    title: "FAQ (How it works)",
    rows: [
      {
        title: "Lorem ipsum dolor sit amet,",
        content: "Lorem ipsum dolor sit amet, consectetur "
      },
      {
        title: "Nunc maximus, magna at ultricies elementum",
        content: "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam."
      },
      {
        title: "Curabitur laoreet, mauris vel blandit fringilla",
        content: "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc"
      },
      {
        title: "What is the package version",
        content: "v1.0.5"
      }]
  }

const styles = {
    bgColor: '#99B898',
    titleTextColor: "white",
    rowTitleColor: "black",
    rowContentColor: 'grey',
    arrowColor: "red",
};

const config = {
    animate: true,
    arrowIcon: "V",
    tabFocus: true
};


function faq(){
    // return (    <Box className={classes.background}>
    //     <Grow in={true} timeout={1500} mountOnEnter>
    //       <Grid
    //         container
    //         justify='center'
    //         alignItems='center'
    //         className={classes.root}
    //       >
    //         <Box className={classes.box}>
    //           <Card className={classes.card} elevation={0}>
    //             <Typography className={classes.overlay}>
    //               <Typography className={classes.title}>
    //                 FAQ.
    //                 <br />
    //               </Typography>
    //               <Typography className={classes.subtitle}>
    //                 Answers to the most frequenly asked questions about NFTr.
    //               </Typography>
    //             </Typography>
    //           </Card>
    //         </Box>
    //       </Grid>
    //     </Grow>
    //     )

    return (<div>
        <Faq 
        data = {data}
        styles = {styles}
        config = {config}
        />
    </div>
    );
}

export default faq;
