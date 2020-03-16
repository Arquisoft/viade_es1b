import React from 'react';
import Dropzone from 'react-dropzone'
import {FileToRoute} from "../../../viade";
import { types } from 'babel-core';


class MyFilePicker extends React.Component {


    render() {
        return (
            <Dropzone onDrop={acceptedFiles => {this.parseFiles(acceptedFiles)}}>
                {({ getRootProps, getInputProps }) => (
                    <section>
                        <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            <p>Drag 'n' drop some files here, or click to select files</p>
                        </div>
                    </section>
                )}
            </Dropzone>
        );
    }

    parseFiles(acceptedFiles){
        console.log(acceptedFiles);
        var ftr= new FileToRoute(acceptedFiles[0]);
        ftr.parse();
        console.log(ftr);        
    }
    

};

export default MyFilePicker;