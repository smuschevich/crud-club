export default class Club {
    name: string;
    description: string;
    url: string;

    constructor(name: string = '', description: string = '', url: string = '') {
        this.name = name;
        this.description = description;
        this.url = url;
    }

    clone(): Club {
        return new Club(this.name, this.description, this.url);
    }
}