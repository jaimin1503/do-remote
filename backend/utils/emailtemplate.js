export const otpTemplate = (otp) => {
  return `
  <!DOCTYPE html>
  <html>
  
  <head>
	  <meta charset="UTF-8">
	  <title>OTP Verification Email</title>
	  <style>
		  body {
			  background-color: #f4f4f4;
			  font-family: Arial, sans-serif;
			  font-size: 16px;
			  line-height: 1.6;
			  color: #333333;
			  margin: 0;
			  padding: 0;
		  }
  
		  .container {
			  max-width: 600px;
			  margin: 0 auto;
			  padding: 20px;
			  text-align: center;
			  background-color: #ffffff;
			  border-radius: 8px;
			  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		  }
  
		  .logo {
			  max-width: 150px;
			  margin-bottom: 20px;
		  }
  
		  .message {
			  font-size: 24px;
			  font-weight: bold;
			  margin-bottom: 20px;
			  color: #333333;
		  }
  
		  .body {
			  font-size: 18px;
			  margin-bottom: 20px;
			  color: #444444;
		  }
  
		  .otp {
			  font-size: 36px;
			  font-weight: bold;
			  color: #007bff;
			  margin-bottom: 20px;
		  }
  
		  .cta {
			  display: inline-block;
			  padding: 12px 24px;
			  background-color: #007bff;
			  color: #ffffff;
			  text-decoration: none;
			  border-radius: 5px;
			  font-size: 18px;
			  font-weight: bold;
			  margin-top: 20px;
			  transition: background-color 0.3s ease;
		  }
  
		  .cta:hover {
			  background-color: #0056b3;
		  }
  
		  .support {
			  font-size: 14px;
			  color: #666666;
			  margin-top: 20px;
		  }
  
		  .highlight {
			  font-weight: bold;
			  color: #007bff;
		  }
	  </style>
  </head>
  
  <body>
	  <div class="container">
		  <div class="message">OTP Verification Email</div>
		  <div class="body">
			  <p>Dear User,</p>
			  <p>Thank you for registering with Do-Remote. To complete your registration, please use the following OTP
				  (One-Time Password) to verify your account:</p>
			  <div class="otp">${otp}</div>
			  <p>This OTP is valid for 5 minutes. If you did not request this verification, please disregard this email.
				  Once your account is verified, you will have access to our platform and its features.</p>
		  </div>
		  <a class="cta" href="#">Verify Account</a>
		  <div class="support">If you have any questions or need assistance, please feel free to reach out to us at <a
				  href="mailto:jaiminv153@gmail.como.com">jaiminv153@gmail.com</a>. We are here to help!</div>
	  </div>
  </body>
  
  </html>
   
  `;
};
