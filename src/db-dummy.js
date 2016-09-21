const db_URI = '...'

const openDBConnection = () => {
  // Connect to DB
}
const closeDBConnection = (msg, cb) => {
  // Close DB connection
  cb()
}

process.on('SIGINT', () =>
  closeDBConnection(
    'DB disconnected on app termination',
    _ => process.exit(0)
  )
);

module.exports = {openDBConnection, closeDBConnection}
