import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/compat/firestore";
import { Schedule } from "./models/schedule.model";

@Injectable({
    providedIn: 'root'
})
export class ScheduleService {
    constructor(private angularFirestore: AngularFirestore) { }

    merge(schedule: Schedule) {
        const userRef: AngularFirestoreDocument<any> = this.angularFirestore.doc(
            `schedule/${schedule.uid}`
        );

        const scheduleData: Schedule = {
            uid: schedule.uid,
            id: schedule.id,
            segIda: schedule.segIda,
            segVolta: schedule.segVolta,
            terIda: schedule.terIda,
            terVolta: schedule.terVolta,
            quaIda: schedule.quaIda,
            quaVolta: schedule.quaVolta,
            quiIda: schedule.quiIda,
            quiVolta: schedule.quiVolta,
            sexIda: schedule.sexIda,
            sexVolta: schedule.sexVolta

        };

        return userRef.set(scheduleData, {
            merge: true,
        });
    }
}