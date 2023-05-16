/* eslint-disable import/prefer-default-export */
class InvalidAuthError extends Error {
  constructor() {
    super();
    this.name = 'InvalidAuthError';
  }
}

export { InvalidAuthError };
