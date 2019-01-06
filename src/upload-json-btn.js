import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: '5%',
  },
  input: {
    display: 'none',
  },
});

const UploadJsonBtn = props => {
  const { classes, handleClick, isUploading } = props;

  return (
    <div>
      <Button 
        variant="contained" 
        color="primary" 
        className={classes.button}
        onClick={handleClick}
        style={{display: isUploading ? 'none':'block'}}
      >
        Upload json
      </Button>
      <p style={{display: isUploading ? 'block':'none'}}>
        Now Uploading...
      </p>
    </div>
  );
}

export default withStyles(styles)(UploadJsonBtn);