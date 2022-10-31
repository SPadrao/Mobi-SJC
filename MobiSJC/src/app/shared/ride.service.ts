import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/compat/firestore";
import { Ride } from "./models/ride.model";

@Injectable({
    providedIn: 'root'
})
export class RideService {

    constructor(private angularFirestore: AngularFirestore) { }

    merge(ride: Ride): Boolean {
        if (ride.id === '')
            ride.id = this.angularFirestore.createId()

        this.angularFirestore.collection('rides').doc(ride.id).set(ride, { merge: true })
            .then(() => {
                alert("Carona cadastrada com sucesso!");
            })
            .catch((error) => {
                alert("Erro ao cadastrar carona!");
                console.log(error);
                return false;
            })

        return true;
    }

    delete(id: string) {
        this.angularFirestore.collection('rides').doc(id).delete()
    }
}