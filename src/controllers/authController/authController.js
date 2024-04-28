const jwt = require('jsonwebtoken');
const User = require('../../models/UserModel/User');
const Documents = require('../../models/UserModel/documnets');
const bcrypt = require('bcryptjs');
const { validationError } = require('../../error/error');
const { registerSchema } = require('../../validation/AuthValidation')
const uploadImageToS3 = require('../../services/uploadToS3');

exports.register = async (req, res) => {
  try {

    const isValid = registerSchema.validate(req.body);


    if (isValid.error) {
      return res.status(200).send(validationError(isValid.error.details[0].message))
    }

    const { value } = isValid

    const existingUser = await User.findOne({ email: value.email });

    if (existingUser) {
      return res.status(400).json({ message: 'Username or email already exists' });
    }

    const hashedPassword = await bcrypt.hash(value.password, 10);

    const newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hashedPassword
    });


    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.login = async (req, res) => {

  const { userName, password } = req.body;

  const userDetail = await User.findOne({ email: userName });

  try {
    if (userName === userDetail?.email && userDetail !== null) {

      bcrypt.compare(password, userDetail?.password, (err, result) => {
        if (err) {
          console.error('Error comparing passwords:', err);
          res.status(500).json({ message: 'Internal server error' });
        } else {
          if (result) {
            const token = jwt.sign({ userName }, 'your_secret_key', { expiresIn: '1h' });
            res.status(200).json({ message: 'Login successful', token });
          } else {
            res.status(401).json({ message: 'Invalid username or password' });
          }
        }
      });
    } else {
      res.status(401).json({ message: 'Invalid username or password' });
    }

  } catch (error) {
    console.log('this is error', error)
  }
};

exports.uploadFile = async (req, res) => {
  try {

    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const { filename, path } = req.file;


    const url = await uploadImageToS3(path, filename, 'rjstudio');

    const updatedDocument = await Documents.create({
      userid: '',
      documents: [url]
    });

    // const updatedDocument = await Documents.findOneAndUpdate(
    //   { userid: '' },
    //   { $push: { documents: url } },
    //   { new: true }
    // );


    console.log('Document updated successfully:', updatedDocument);

    res.status(200).json({ message: 'File uploaded successfully', url });
  } catch (err) {
    console.error('Error:', err);

    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.makePaymaneMethod = async (req, res) => {


  const { products } = req.body;


  const lineItems = products.map((product) => ({
    price_data: {
      currency: "inr",
      product_data: {
        name: product.dish,
        images: [product.imgdata]
      },
      unit_amount: product.price * 100,
    },
    quantity: product.qnty
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: "http://localhost:3000/sucess",
    cancel_url: "http://localhost:3000/cancel",
  });

  res.json({ id: session.id })


}




