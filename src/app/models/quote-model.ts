// export class QuoteModel {
//     _id: string;
//     tags: string[];
//     content: string;
//     author: string;
//     authorSlug: string;
//     length: number;
//     dateAdded: string;
//     dateModified: string;

//     constructor(_id: string, tags: string[], content: string, authorSlug: string, author: string, length: number,dateAdded: string, dateModified: string){
//         this._id= _id;
//         this.tags= tags;
//         this.content= content;
//         this.authorSlug=authorSlug;
//         this.author= author;
//         this.length= length;
//         this.dateAdded=dateAdded;
//         this.dateModified=dateModified
//         }
// }

export class QuoteModel {
    _id: string;
    content: string;
    author: string;

    constructor(_id: string, content: string, author: string){
        this._id= _id;
        this.author = author;
        this.content= content; 
        }
}
