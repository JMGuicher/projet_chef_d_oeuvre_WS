export class Contributor {
    public id?: any;
    public uid?: string;
    public firstname?: string;
    public lastname?: string;
    public createdBy?: string;
    public createdDate?: Date;
    public lastModifiedBy?: string;
    public lastModifiedDate?: Date;
    public job?: number;

    constructor(id?: any,
                uid?: string,
                firstName?: string,
                lastName?: string,
                createdBy?: string,
                createdDate?: Date,
                lastModifiedBy?: string,
                lastModifiedDate?: Date,
                job?: number) {
        this.id = id ? id : null;
        this.uid = uid ? uid : null;
        this.firstname = firstName ? firstName : null;
        this.lastname = lastName ? lastName : null;
        this.createdBy = createdBy ? createdBy : null;
        this.createdDate = createdDate ? createdDate : null;
        this.lastModifiedBy = lastModifiedBy ? lastModifiedBy : null;
        this.lastModifiedDate = lastModifiedDate ? lastModifiedDate : null;
        this.job = job ? job : null;
    }
}
