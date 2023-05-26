import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import InboxIcon from 'material-ui-icons/Inbox';
import DraftsIcon from 'material-ui-icons/Drafts';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});
const props = true
export const Sidebar=()=>{
  return (
    <div style={{ width: 300 }}>
      <List component="nav">
        <ListItem button onClick={() => props.toggle(false)}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem button onClick={() => props.toggle(false)}>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItem>
      </List>
      <Divider />
      <List component="nav">
        <ListItem button onClick={() => props.toggle(false)}>
          <ListItemText primary="Trash" />
        </ListItem>
        <ListItem button onClick={() => props.toggle(false)}>
          <ListItemText primary="Spam" />
        </ListItem>
      </List>
      <Divider />
      <List component="nav">
        <ListItem button onClick={() => props.toggle(false)}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem button onClick={() => props.toggle(false)}>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItem>
      </List>
      <Divider />
      <List component="nav">
        <ListItem button onClick={() => props.toggle(false)}>
          <ListItemText primary="Trash" />
        </ListItem>
        <ListItem button onClick={() => props.toggle(false)}>
          <ListItemText primary="Spam" />
        </ListItem>
      </List>
      <Divider />
      <List component="nav">
        <ListItem button onClick={() => props.toggle(false)}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem button onClick={() => props.toggle(false)}>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItem>
      </List>
      <Divider />
      <List component="nav">
        <ListItem button onClick={() => props.toggle(false)}>
          <ListItemText primary="Trash" />
        </ListItem>
        <ListItem button onClick={() => props.toggle(false)}>
          <ListItemText primary="Spam" />
        </ListItem>
      </List>
    </div>
  );
}
