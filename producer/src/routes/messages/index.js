const express = require('express');

const router = express.Router();
router.post('/messages', async (req, res) => {
  const { msg } = req.body;
  const messageResult = await req.producer.send({
    topic: 'message',
    messages: [{ value: msg }],
  });
  res.send(messageResult);
});

module.exports = {
  router,
};
