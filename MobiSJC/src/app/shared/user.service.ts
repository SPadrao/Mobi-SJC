import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/compat/firestore";
import { User } from "./models/user.model";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private angularFirestore: AngularFirestore) { }

    merge(user: User) {
        const userRef: AngularFirestoreDocument<any> = this.angularFirestore.doc(
            `users/${user.uid}`
        );

        const userData: User = {
            uid: user.uid,
            // photoURL: user.photoURL,
            name: user.name,
            surname: user.surname,
            phone: user.phone,
            car: user.car,
            carPlate: user.carPlate
        };

        return userRef.set(userData, {
            merge: true,
        });
    }

    delete(id: string) {
        this.angularFirestore.collection('usuarios').doc(id).delete()
    }
}