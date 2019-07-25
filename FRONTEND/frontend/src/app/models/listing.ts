export class Listing {

    public id: number;
    public hostId: number;
    public title: string;
    public description: string;
    public location: string;
    public numberOfPeople: string;
    public pricePerNight: string;
    public imgUrl: string;

    constructor(hostId: number, title: string, description: string, location: string, numberOfPeople: string, pricePerNight: string, imgUrl: string){
        this.hostId = hostId;
        this.title = title;
        this.description = description;
        this.location = location;
        this.numberOfPeople = numberOfPeople;
        this.pricePerNight = pricePerNight;
        this.imgUrl = imgUrl;
    }
}
