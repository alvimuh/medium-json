const MEDIUM_URL = "https://medium.com/@mohamadalvin/latest?format=json";

router.get("/posts", (req, res, next) => {
  request.get(MEDIUM_URL, (err, apiRes, body) => {
    if (!err && apiRes.statusCode === 200) {
      let i = body.indexOf("{");
      const data = body.substr(i);
      res.send(data);
    } else {
      res.sendStatus(500).json(err);
    }
  });
});