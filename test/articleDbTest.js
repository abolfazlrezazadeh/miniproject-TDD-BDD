const {default:mongoose} = require('mongoose');
const config = require('config');

describe('database tests', function () {
  this.timeout(10000); // Adjust the timeout as necessary

  before(function(done) {
    mongoose.connect(config.DbHost)
      .catch((error) => {
        console.error('Database connection error:', error);
        done(error); // Fail the test if there's a connection error
      });

    mongoose.connection.once('open', () => done()).on('error', (error) => {
      console.error('Connection error:', error);
      done(error); // Ensure this error fails the test
    });
  });

  it('check connection', function(done) {
    // Explicitly check if the connection is open
    if (mongoose.connection.readyState !== 1) {
      done(new Error('Connection is not ready'));
    } else {
      done(); // Proceed if the connection is ready
    }
  });

  after(function(done) {
    if (mongoose.connection.readyState === 1) {
      mongoose.disconnect()
        .then(() => done())
        .catch((error) => done(error));
    } else {
      done(); // Call done if there was no connection to avoid hanging
    }
  });
});
