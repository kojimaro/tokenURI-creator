import React, { Component } from 'react';
import ipfs from './utils/ipfs'; 
import ApplicationForms from './application-forms';
import './App.css';

class App extends Component {
    state = {
        name: '',
        description: '',
        tokenURI: '',
        imagePath: '',
        isUploading: false,
    }

    handleClick = event => {
        if(!this.state.imagePath.length > 0) return;
        if(!this.state.name.length > 0 || !this.state.description.length > 0) return;
        if(this.state.name.match(/[\s\t]/)||this.state.description.match(/[\s\t]/)) return;

        this.setState({isUploading: true});

        let metadata = {};
        metadata.name = this.state.name;
        metadata.description = this.state.description;
        metadata.image = this.state.imagePath;
        metadata = JSON.stringify(metadata);

        let buffer = ipfs.types.Buffer.from(metadata);
        this.uploadTokenURI(buffer);
    }

    handleName = event => {
        this.setState({name: event.target.value});
    }

    handleDesc = event => {
        this.setState({description: event.target.value});
    }

    handleFile = event => {
        const file = event.target.files[0];
    
        const reader = new window.FileReader();
        reader.readAsArrayBuffer(file);
        reader.onloadend = () => this.convertToBuffer(reader);
    }
    
    convertToBuffer = async(reader) => {
        this.setState({isUploading: true});

        const buffer = await Buffer.from(reader.result);
        this.uploadImage(buffer);
    }

    uploadImage = async(buffer) => {
        let results = await ipfs.add(buffer);
        this.setState({
            imagePath: "https://ipfs.io/ipfs/"+results[0].hash,
            isUploading: false
        });
    }

    uploadTokenURI =  async(buffer) => {
        let results = await ipfs.add(buffer);
        this.setState({
            tokenURI: "https://ipfs.io/ipfs/"+results[0].hash,
            isUploading: false
        }); 
    }

    render() {
        return (
            <div className='App-header'>
                <ApplicationForms 
                    handleClick={this.handleClick}
                    handleFile={this.handleFile}
                    handleName={this.handleName}
                    handleDesc={this.handleDesc}
                    isUploading={this.state.isUploading}
                    tokenURI={this.state.tokenURI}
                    imagePath={this.state.imagePath}
                />
            </div>
        );
    }
}

export default App;