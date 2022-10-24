import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore";
import { Usuario } from "../models/usuario.models";

@Injectable({
    providedIn: 'root'
})
export class CrudService {

    constructor(private angularFirestore: AngularFirestore){}
    
    create (usuario: Usuario){
        usuario.id === ''? usuario.id = this.angularFirestore.createId() : usuario.id = usuario.id;
        this.angularFirestore.collection('usuarios').doc(usuario.id).set(usuario, {merge: true})
        .then((res)=>{
            console.log(res);
            
        })
        .catch((error)=>{
            console.log(error);     
        })
    }

    delete (id: string) {
        this.angularFirestore.collection('usuarios').doc(id).delete()
    }


}