export class Booking {

    public id: number;
    public userId: number;
    public listingId: number;
    public hostId: number;
    public status: string;
    public dateStart: string;
    public dateEnd: string;

    constructor(userId: number, listingId: number, hostId: number, status: string, dateStart: string, dateEnd: string){
        this.userId = userId;
        this.listingId = listingId;
        this.hostId = hostId;
        this.status = status;
        this.dateStart = dateStart;
        this.dateEnd = dateEnd;
    }
    
}
