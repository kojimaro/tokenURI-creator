import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import UploadImageBtn from './upload-image-btn';
import MetadataFields from './metadata-fields';
import UploadJsonBtn from './upload-json-btn';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 4,
  },
});

const ApplicationForm = props => {
    const { 
        classes,
        handleClick,
        handleFile, 
        handleName, 
        handleDesc,
        isUploading,
        tokenURI,
        imagePath
    } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h2" component="h2" gutterBottom>
          TOKEN-URI CREATOR
        </Typography>
        <Typography variant="h4" component="h2">
          1. Uploading a image to ipfs.
        </Typography>
        <div>
            <UploadImageBtn 
                handleFile={handleFile}
                isUploading={isUploading}
            />
        </div>
        <Typography variant="h4" component="h2">
          2. Input metadata.
        </Typography>
        <div>
            <MetadataFields 
                imagePath={imagePath}
                handleName={handleName}
                handleDesc={handleDesc}
            />
        </div>
        <Typography variant="h4" component="h2" gutterBottom>
          3. Uploading JSON to ipfs.
        </Typography>
        <div>
            <UploadJsonBtn 
                handleClick={handleClick}
                isUploading={isUploading}
            />
        </div>
        <Typography variant="h3" component="h2" gutterBottom>
          Result
        </Typography>
        <pre>
            <p>tokenURI:</p>
            <Typography variant="h6" gutterBottom>
                {tokenURI}
            </Typography>
        </pre>
      </Paper>
    </div>
  );
}

export default withStyles(styles)(ApplicationForm);