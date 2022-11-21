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

    deleteRide(ride: Ride) {
        this.angularFirestore.collection('rides').doc(ride.id).delete()
    }

    //get all rides

    getAllrides() {
        return this.angularFirestore.collection("rides/").snapshotChanges()
    }

    searchrides(searchValue: string){
        return this.angularFirestore.collection('rides',ref => ref.where('nameToSearch', '>=', searchValue)
          .where('nameToSearch', '<=', searchValue + '\uf8ff'))
          .snapshotChanges()
    }

    
}

