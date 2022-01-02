import React from 'react'
import { Card, Typography, CardActions, CardContent } from '@mui/material/';
import { styled } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { makeStyles } from '@mui/styles';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));
const useStyles = makeStyles((theme) => ({
    root: {
        margin: "10px",
        display: "inline-block",
        [theme.breakpoints.down('md')]: {
            margin: "5px",
        },
    },
}));


const StudymaterialCard = (props) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <>
            {/* <Card className={classes.root} sx={{ mt: 3, minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {props.sname}
                    </Typography>
                    <Typography sx={{ fontSize: 18 }} variant="h5" component="div">
                       {props.lname}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Download <ArrowCircleDownIcon /></Button>
                </CardActions>
            </Card> */}
            <Card className={classes.root} sx={{ maxWidth: 345, minHeight: 450 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            CI
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={props.type}
                    subheader="September 14, 2016"
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={props.subthumbnail}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography color="text.primary" gutterBottom>
                        {props.sname}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.lname}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ChevronRightIcon />
                    </ExpandMore>
                </CardActions>
                
            </Card>
        </>
    )
}

export default StudymaterialCard;
