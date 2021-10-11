import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Link from 'react-router-dom/Link';

//MUI Imports
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import { Typography } from '@material-ui/core';

const styles = {
    card: {
        display: 'flex',
        marginBottom: 20,
        borderRadius: 20,
        backgroundColor: "#242323"
    },
    image: {
        minWidth: 50,
        maxHeight: 50,
        borderRadius: 30,
        margin: 10
    },
    content: {
        padding: 20,
        objectFit: 'cover'
    },
}

export class Melody extends Component {
    render() {
            const { classes, melody : { body, createdAt, userImage, userHandle, screamId, likeCount, commentCount } } = this.props
        return (
            <Card className={classes.card}>
                <CardMedia image={userImage} title="Profile image" className={classes.image}/>
                <cardContent class={classes.content}>
                    <Typography variant="h5" component={ Link } to={`/users/${userHandle}`} color="primary">{userHandle}</Typography>
                    <Typography variant="body2" color="textSecondary">{createdAt}</Typography>
                    <Typography variant="body1">{body}</Typography>
                </cardContent>
            </Card>
        )
    }
}

export default withStyles(styles)(Melody);