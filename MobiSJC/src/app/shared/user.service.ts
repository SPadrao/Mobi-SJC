import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/compat/firestore";
import { User } from "./models/user.model";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private angularFirestore: AngularFirestore) { }

    merge(user: User) {

        this.angularFirestore.doc(`users/${user.uid}`).set(user, { merge: true })
            .catch((error) => {
                alert("Erro ao atualizar usuário!");
                console.log(error);
                return false;
            })

        return true;
    }
}