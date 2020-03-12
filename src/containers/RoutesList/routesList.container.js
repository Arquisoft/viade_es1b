import React from "react";
import auth from "solid-auth-client";
import FileContainer from "solid-file-client";

export const RoutesListComponent=()=>{
    const file=new FileContainer(auth);
    async function run(){
        var folder=await file.readFolder("https://verdejo55.solid.community/public/");
        for(var i=0; i < folder.files.length; i++){ 
            console.log(folder.files[i].name) 
        }
    }
    run()

    return (
        <div>
            <h1>Listado de rutas</h1>
        </div>
    );
    
};

