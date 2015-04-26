<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <title>PredictionPoint - Sign Up</title>
  <link rel="stylesheet" type="text/css" href="style.css" />
  <link rel="stylesheet" type="text/css" href="dist/semantic.css">
</head>
<body>
  <h3>PredictionPoint - Sign Up</h3>

<?php
  require_once('connectvars.php');

  // Connect to the database
  $dbc = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);

  if (isset($_POST['submit'])) {
    // Grab the profile data from the POST
    
    $username = mysqli_real_escape_string($dbc, trim($_POST['username']));
    $password1 = mysqli_real_escape_string($dbc, trim($_POST['password1']));
    $password2 = mysqli_real_escape_string($dbc, trim($_POST['password2']));

    if (!empty($username) && !empty($password1) && !empty($password2) && ($password1 == $password2)) {
      // Make sure someone isn't already registered using this username
      $query = "SELECT * FROM Pp_user WHERE username = '$username'";
      $data = mysqli_query($dbc, $query);
      if (mysqli_num_rows($data) == 0) {
        // The username is unique, so insert the data into the database
        $query = "INSERT INTO Pp_user (username, password, join_date) VALUES ('$username', SHA('$password1'), NOW())";
        mysqli_query($dbc, $query);

        // Confirm success with the user
        echo '<p>Your new account has been successfully created. You\'re now ready to <a href="login.php">log in</a>.</p>';

        mysqli_close($dbc);
        exit();
      }
      else {
        // An account already exists for this username, so display an error message
        echo '<p class="error">An account already exists for this username. Please use a different address.</p>';
        $username = "";
      }
    }
    else {
      echo '<p class="error">You must enter all of the sign-up data, including the desired password twice.</p>';
    }
  }

  mysqli_close($dbc);
?>

  <p> <em>Let's go ahead and get you signed up. </em> </p>
  <form class="ui form segment" method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
     <!--<fieldset>-->
        
        <div class="two fields">
          <div class="six wide field">
            <label>First Name</label>
            <input placeholder="First Name" name="first-name" type="text">
          </div>
          <div class="six wide field">
            <label>Last Name</label>
            <input placeholder="Last Name" name="last-name" type="text">
          </div>
        </div>
        <div class="six wide field">
          <label>Username</label>
          <input placeholder="Username" name="username" id="username" type="text">
        </div>
        <div class="six wide field">
          <label>E-mail</label>
          <input placeholder="Email id" type="text" name="email" id="email">
        </div>
        <div class="six wide field">
          <label>Password</label>
          <input placeholder="password" type="password" name="password1" id="password1">
        </div>
        <div class="six wide field">
          <label>Re-type Password</label>
          <input type="password" name="password2" id="password2">
        </div>
        <div class="inline field">
          <div class="ui checkbox">
            <input type="checkbox" name="terms">
            <label>I agree to the Terms and Conditions</label>
          </div>
        </div>
          <!--</fieldset>-->
        <input type="submit" value="Sign Up" name="submit" /> 
        <div class="ui error message"></div>
  </form>
      
  
</body>

<script src="http://cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.js"></script>
<script src="dist/semantic.js"></script>
<script src="js/form.js"></script>
</html>
