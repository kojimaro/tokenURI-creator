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

const UploadImageBtn = props => {
  const { classes, handleFile, isUploading } = props;

  return (
    <div>
      <input
        accept="image/*"
        className={classes.input}
        id="outlined-button-file"
        type="file"
        onChange={handleFile}
        onClick={(event)=>{event.target.value=null}}
      />
      <label
        htmlFor="outlined-button-file"
        style={{display: isUploading ? 'none':'block'}}>
        <Button
          variant="contained"
          color="primary"
          component="span"
          className={classes.button}
        >
          Upload image
        </Button>
      </label>

      <p style={{display: isUploading ? 'block':'none'}}>
        Now Uploading...
      </p>
    </div>
  );
}

export default withStyles(styles)(UploadImageBtn);