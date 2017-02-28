import {Component, OnInit, OnDestroy} from "@angular/core";
import {Router} from "@angular/router";
import DataService from "../../app/services/data.service";
import Club from "../../app/model/club";

@Component({
    selector: 'item-add',
    templateUrl: './creator/components/add.component.html'
})
export default class AddComponent implements OnInit, OnDestroy {
    private club: Club;
    private file: File;
    private errorMessage: string;

    constructor(private router: Router, private dataService: DataService) {
    }

    back(): void {
        this.router.navigate(['/']);
    }

    add(): void {
        this.dataService.uploadFile(this.file)
            .then((url: string) => {
                this.club.url = url;
                return this.dataService.add(this.club.clone())
                    .then(() => this.back());
            })
            .catch(err => {this.errorMessage = err;
            console.log(err);
            });
    }

    ngOnInit(): void {
        this.club = new Club()
    }

    onFileChange(event: any) {
        this.file = event.target.files[0];
    }

    ngOnDestroy(): void {
        this.errorMessage = "";
    }
}

