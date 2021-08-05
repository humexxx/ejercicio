import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';


function Post({title, url}) {
    return (
        <ListItem>
            <ListItemAvatar>
                <Avatar src={url} alt={title} />
                </ListItemAvatar>
            <ListItemText primary={title} />
        </ListItem>
    );
  }
  
  export default Post;
  