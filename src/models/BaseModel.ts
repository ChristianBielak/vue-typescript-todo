export class BaseModel {


    constructor() {
        this.created_at = new Date();
        this.updated_at = new Date();
    }

    created_at: Date;
    updated_at: Date;
    deleted_at: Date;


}

export default BaseModel;