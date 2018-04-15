import { tweet } from "./tweet";

export class account {
    public name: string;
    public bio: string;
    public city: string;
    public url: string;
    public password: string;
    public photo: string[];
    public followers: string[];
    public following: string[];
    public tweets: tweet[];
    public authToken: string;
    
    constructor(name: string, city: string, url: string, bio: string, followers: string[], following: string[], tweets: tweet[])
    {
        this.name = name;
        this.city = city;
        this.url = url;
        this.bio = bio;
        this.followers = followers;
        this.following = following;
        this.tweets = tweets;
    }

    public setToken(authToken: string) {
        this.authToken = authToken;
    }
}