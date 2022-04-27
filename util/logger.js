class Logger {
  constructor() {
    this.level = {
      info: null,
      warning: 'warning',
      error: 'error',
    };

    this.data = {
      message: null,
    };
  }

  publish(message) {
    this.data.message = message;

    return console.log(`
        (@___@)/kimikoProblemBotv1:
        ${this.data.message}
        `);
  }
}

module.Logger = Logger;
