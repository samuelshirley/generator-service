import express from 'express';
import CreateUser from '../creators/newUser';
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    let email = req.body.email;
    let name = req.body.name;
    let likesDogs = req.body.likesDogs;
    let createNewUser = new CreateUser(email, name, likesDogs);
    await createNewUser.createUser().then(async (user) => {
      console.log(user);
      await res.send(user);
    });
  } catch (error) {}
});

module.exports = router;
