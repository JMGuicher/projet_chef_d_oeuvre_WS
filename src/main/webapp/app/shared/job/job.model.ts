export class Job {
    public id?: number;
    public name?: string;
    public onlyOne?: boolean;

    constructor(id?: number, name?: string, onlyOne?: boolean) {
        this.id = id;
        this.name = name;
        this.onlyOne = onlyOne;
    }

}
