module.exports = {
  servers: {
    one: {
      host: '',
      username: 'root',
      // pem:
      password: ''
      // or leave blank for authenticate from ssh-agent
    }
  },

  meteor: {
    name: 'vendor.grosr',
    path: '../',
    servers: {
      one: {},
    },
    buildOptions: {
      serverOnly: true,
    },
    env: {
      PORT: 4200,
      ROOT_URL: 'http://vendor.grosr.com',
      MONGO_URL: 'mongodb://localhost/meteor',
    },

    // change to 'kadirahq/meteord' if your app is not using Meteor 1.4
    dockerImage: 'abernix/meteord:base',
    deployCheckWaitTime: 60,
    
    // Show progress bar while uploading bundle to server
    // You might need to disable it on CI servers
    enableUploadProgressBar: false
  },

  mongo: {
    oplog: true,
    port: 27017,
    version: '3.4.1',
    servers: {
      one: {},
    },
  },
};
