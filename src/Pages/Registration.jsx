import "../style/Registration.css";

const Registration = () => {
  // Handle storing user data to localStorage
  const handleRegistration = () => {
    const user = {
      fullName: document.getElementById("fullName").value,
      phoneNumber: document.getElementById("phoneNumber").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    };

    // Save user to localStorage
    localStorage.setItem("user", JSON.stringify(user));
    alert("Registration successful! Now you can login.");
  };

  return (
    <div className="reg-page">
      <form className="reg-form d-flex flex-column justify-content-center">
        <h2 className="text-warning text-center mb-3">Registration Page</h2>

        {/* Full Name Input */}
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="fullName"
            placeholder="Enter your full name"
          />
          <label htmlFor="fullName">Full Name</label>
        </div>

        {/* Phone Number Input */}
        <div className="form-floating mb-3">
          <input
            type="tel"
            className="form-control"
            id="phoneNumber"
            placeholder="Enter your phone number"
          />
          <label htmlFor="phoneNumber">Phone Number</label>
        </div>

        {/* Email Input */}
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
          />
          <label htmlFor="email">Email Address</label>
        </div>

        {/* Password Input */}
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter your password"
          />
          <label htmlFor="password">Password</label>
        </div>

        {/* Registration Button */}
        <button
          type="button"
          className="btn btn-warning w-50 btnSpace"
          onClick={handleRegistration}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Registration;
