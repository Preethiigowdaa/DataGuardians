export class Feedback {
    requested_by: string;
    category: string;
    activity: string;
    priority: string;
    module:string;
    therapy_area: string;
    status: boolean;
    requested_datetime:any;
    id:any;
    constructor(data: any) {
      this.requested_by = data.requested_by;
      this.category = data.category;
      this.activity = data.activity;
      this.priority = data.priority;
      this.module = data.module;
      this.therapy_area = data.therapy_area;
      this.status = data.status;
      this.requested_datetime = data.requested_datetime;
      this.id = data.id
    }
  }