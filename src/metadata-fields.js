import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    }
});

const MetadataFields = props => {
    const {classes, imagePath, handleName, handleDesc} = props;
    
    return(
        <form className={classes.container} noValidate autoComplete="off">
            <p>Image: <br/>{imagePath}</p>

            <TextField
                id="standard-name"
                label="Name"
                fullWidth
                onChange={handleName}
                margin="normal"
            />
            <TextField
                id="standard-multiline-flexible"
                label="Description"
                multiline
                rowsMax="4"
                onChange={handleDesc}
                fullWidth
                margin="normal"
            />
        </form>
    );
}

export default withStyles(styles)(MetadataFields);