import React from "react";
import Post from "./Post";
import { createStyles, makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import CachedIcon from '@material-ui/icons/Cached';


const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: '100%',
      height: '250px',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
      margin: 'auto'
    },
    actions:{
        marginTop: '50px'
    }
  }),
);


const ENDPOINT = 'https://jsonplaceholder.typicode.com/photos'

function getRandomPosts(posts, quantity){
    const shuffled = posts.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, quantity);
}

function Posts({quantity}) {
    const classes = useStyles();
    const [posts, setPosts] = React.useState()

    React.useEffect(()=> {
        async function fetchPosts(){
            try{
                const result = await fetch(ENDPOINT)
                const data = await result.json()
                setPosts(data)
            }catch(e){
                console.log(e)
            }
        }
        fetchPosts()
    }, [])

  return (
    <div className="App">
    {!posts && <CircularProgress /> }
      {posts &&  <List className={classes.root}>
       {getRandomPosts(posts, quantity).map(({id, title, url}) => 
            <Post key={id} title={title} url={url} />
      )}
      </List>}
      <div className={classes.actions}>
         <Button onClick={() => setPosts([...posts])} startIcon={<CachedIcon />} color="primary" variant="contained">Reload</Button>
      </div>
    </div>
  );
}

export default Posts;
