const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51JFYd2GDiQDypUgmhrfvjsiCTjp6qSlWmPEg2X6RguP7L8ZxYX6Y9jgx5EGn8kAqK4tUzWrRWKLzlbPbgidv5qkG00PJx9eC7E"
);

// app config

const app = express();

//Middlewares

app.use(cors({ origin: true }));
app.use(express.json());

// API routes

app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("payment amout is ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//Listen command

exports.api = functions.https.onRequest(app);
