const db = require("../db");

class DataController {
  async getData(req, res) {
    let page = req.query.page || 1;
    const startedId = page === 1 || page === "1" ? 0 : (Number(page) - 1) * 20;
    const data = await db.query(
      "SELECT * FROM sreality ORDER BY id ASC OFFSET $1 LIMIT 20",
      [startedId]
    );
    res.json(data.rows);
  }

  async getPages(req, res) {
    const data = await db.query("SELECT * FROM sreality");
    const pages = data.rows.length / 20;
    res.json(pages);
  }
}

module.exports = new DataController();
