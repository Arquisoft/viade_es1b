import React from "react";



class UploadComponent extends React.Component {
    constructor(){
        super();
        //Instanciamos la variable, con let:
        let files;
    }

    fileSelectedHandler(){

    }

    render() {

    return(
        <input type="file" onChange={fileSelectedHadler}/>
     );
    }
}

export default UploadComponent;