import React from 'react';
import { FilePicker } from 'react-file-picker';
import { Button } from './routes-loader.style';


const MyFilePicker= ()=>{
    return (
        <FilePicker extensions={['json']} onError={console.log("Fichero no deseado")}>
            <Button>
                Upload routes
    </Button>
        </FilePicker>
    );
};