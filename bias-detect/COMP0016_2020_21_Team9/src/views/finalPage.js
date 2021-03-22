import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Grid,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  }
}));

const FinalPage = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Train"
    >
      <Container maxWidth={false}>
        <div className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={2} justify="center">
            <Grid xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      End
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      you can press DOWNLOAD or BACK HOME to exit
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button component={Link} to="/app/home" variant="contained" color="primary">
                    Download
                  </Button>
                  <Button variant="contained" color="primary" component={Link} to="/app/home">
                    BACK HOME
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </div>
      </Container>
    </Page>
  );
};

export default FinalPage;
