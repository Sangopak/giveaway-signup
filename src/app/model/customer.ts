export class Customer {
  id: number;
  firstName: string;
  lastName: string;
  emailId: string;

  constructor(firstName: string,lastName: string,emailId: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.emailId = emailId;
  }
}
