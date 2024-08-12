<h1> ASP.NET Core MVC Client with Firebase Cloud Messaging (FCM) </h1>

<h4> Overview </h4>
<p> This project is an ASP.NET Core MVC application that integrates with <strong>Firebase Cloud Messaging (FCM)</strong> to receive push notifications. 
  The application obtains an FCM token, sends it to a server, and listens for incoming messages from Firebase.
</p>

<h4> Features </h4>
<ul>
  <li>Obtain an FCM token from the client device</li>
  <li>Send the token to a server for notification management</li>
  <li>Receive and display push notifications</li>
</ul>

<h4> Prerequisites </h4>
<ul>
  <li>.NET SDK 8.0 or later</li>
  <li>Firebase Project with Cloud Messaging enabled</li>
  <li>Firebase Admin SDK</li>
</ul>

<h4> Setup </h4>
<h5>Clone the Repository</h5> <p></p>
<div class="codehilite">
<pre><code> 
    git clone https://github.com/ayethandar07/TestPushNoti-using-Firebase-Client.git <br>
</code></pre>
</div>

<h5>Install Dependencies</h5>
<p></p>
<div class="codehilite">
<pre><code> 
    dotnet restore
</code></pre>
</div>

<h5>Configure Firebase</h5>
<ul>
  <li>Create a Firebase project in the Firebase Console.</li>
  <li>Navigate to Project Settings > Cloud Messaging.</li>
  <li>Note your Server Key and Sender ID.</li>  
</ul>

<h5> Configure Firebase in Your Project</h5>
<ul>
  <li> Add the Firebase SDK to your project by including the following script in your layout file (e.g., _Layout.cshtml) </li>
</ul>
<div class="codehilite">
<pre><code> 
    <script src="https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js"></script> <br>
    <script src="https://www.gstatic.com/firebasejs/9.6.0/firebase-messaging.js"></script>
</code></pre>
</div>

<h5> Build and Run </h5>
<div class="codehilite">
<pre><code> 
    dotnet build <br>
    dotnet run
</code></pre>
</div>

<h5> Contact </h5>
<p>For questions or feedback, please contact <a href="mailto:athandar1998@gmail.com">athandar1998@gmail.com</a>.</p>
