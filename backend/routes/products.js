var express = require("express");
var router = express.Router();
const db = require("../firebase");
const {
  getDoc,
  doc,
  updateDoc,
  setDoc,
  arrayUnion,
  query,
  collection,
  where,
  getDocs,
} = require("firebase/firestore");

router.get("/all", async (req, res, next) => {
  let allUsersItems = [];
  let allItems = [];

  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    let itemData = doc.data();
    allUsersItems.push(itemData.items);
  });
  allUsersItems.forEach((doc) => {
    doc.forEach((docs) => {
      allItems.push(docs);
    });
  });

  res.json({ allItems });
});

module.exports = router;
