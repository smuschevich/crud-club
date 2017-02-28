import { Injectable, Inject } from "@angular/core";
import { AngularFire, FirebaseListObservable, FirebaseApp } from "angularfire2";
import Club from "../model/club";


@Injectable()
export default class DataService {
    private data$: FirebaseListObservable<Club[]>;
    private storage$: firebase.storage.Reference;

    constructor(private af: AngularFire, @Inject(FirebaseApp) firebaseApp: any) {
        this.data$ = af.database.list('/');
        this.storage$ = firebaseApp.storage().ref();
    }

    findElements(): FirebaseListObservable<Club[]> {
        return this.data$;
    }

    findElement(identity): Promise<any> {
        return new Promise(resolve =>
            this.af.database.object(`/` + identity, { preserveSnapshot: true }).subscribe(item => resolve(item.val()))
        );
    }

    add(o: Club): Promise<Club> {
        return this.data$.push(o);
    }

    uploadFile(file: File): Promise<String> {
        return new Promise((resolve, reject) => {
            if (!file){
                reject("File cannot be empty.");
            }
            this.storage$.child(file.name).put(file).on('state_changed', () => {
                },
                e => reject(e),
                () => {
                    this.storage$.child(file.name).getDownloadURL()
                        .then(url => resolve(url));
                }
            );
        })
    }
}
