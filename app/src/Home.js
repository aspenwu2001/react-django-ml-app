import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import background from "./../src/img/1.jpg";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding:25,
      },
      card: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
      text: {
        width: '100%',
        maxWidth: 500,
      },
      footer: {
          position: 'absolute',
      }
  }));

  export default function TypographyMenu() {  
    const classes = useStyles();
  
    return (
        <div>
        <div className={classes.root} >
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="img"
                                height="140"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="img"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Word
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    description
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="img"
                                height="140"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="img"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Word
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    description
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="img"
                                height="140"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="img"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Word
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    description
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="img"
                                height="140"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="img"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Word
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    description
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </div>

        <div className={classes.root}>
          <Typography variant="h4" component="h2" gutterBottom>
             Heading
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
          </Typography>
          <Typography variant="body1" gutterBottom>
            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
            unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
            dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
          </Typography>
          <Typography variant="body2" gutterBottom>
            body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
            unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
            dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
        </div>

        <hr />
        <footer>
            @comp016 Team9
        </footer>
        </div>

    
    );
  }
  