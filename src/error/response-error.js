export class ResponseError extends Error {
  constructor(status, messages) {
    super();
    this.status = status;
    this.messages = messages;
  }
}
