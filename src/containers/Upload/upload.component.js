import React from "react";


class UploadComponent extends React.Component {
    constructor(){
        super();
        //Instanciamos la variable, con let:
        let files;
    }

    //Esto es lo que hacemos cuando llamamos al método.
    itemHandler(parameter){
        alert("Está funcionando");
        this.files = parameter.target.files
    };

    render() {

    return(
        //Tras coger el item funciona el botón:
        <input type="file" onChange={this.itemHandler}/>
     );
    }
}

export default UploadComponent;