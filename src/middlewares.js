function setResponseHeaders(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    res.charSet('utf-8');
    next();
}

function logger(req,res,next) {
  console.log(
    `    time: ${new Date()};
    path: ${req.url};
    method: ${req.method};
    params: ${JSON.stringify(req.params)};
    body: ${req.body};
    `
  );
  next();
}

module.exports = {setResponseHeaders, logger}
