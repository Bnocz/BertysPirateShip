/**
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

// Initializes FriendlyChat.
function PhoenixRecipes() {
    this.checkSetup();

    // Shortcuts to DOM Elements.
    this.userPic = document.getElementById('user-pic');
    this.userName = document.getElementById('user-name');
    this.signInButton = document.getElementById('sign-in');
    this.signOutButton = document.getElementById('sign-out');
    this.welcomeUser = document.getElementById('welcome-user');
    this.welcomeHome = document.getElementById('welcome-home');
    this.userName2 = document.getElementById('user-name2');
    this.signInHome = document.getElementById('sign-in-home');
    this.signOutHome = document.getElementById('sign-out-home');

    // Saves message on form submit.
    this.signOutButton.addEventListener('click', this.signOut.bind(this));
    this.signInButton.addEventListener('click', this.signIn.bind(this));
<<<<<<< HEAD
    this.signOutHome.addEventListener('click', this.signOut.bind(this));
    this.signInHome.addEventListener('click', this.signIn.bind(this));
=======
>>>>>>> TheSevenSeas

    this.initFirebase();
}

// Sets up shortcuts to Firebase features and initiate firebase auth.
PhoenixRecipes.prototype.initFirebase = function() {
    // Shortcuts to Firebase SDK features
    this.auth = firebase.auth();
    this.database = firebase.database();
    this.storage = firebase.storage();
    // Initiates Firebase auth and listen to auth state
    this.auth.onAuthStateChanged(this.onAuthStateChanged.bind(this));
};


// Signs-in Phoenix Recipes.
PhoenixRecipes.prototype.signIn = function() {
    var provider = new firebase.auth.GoogleAuthProvider();
    this.auth.signInWithRedirect(provider);
};

// Signs-out of Phoenix Recipes.
PhoenixRecipes.prototype.signOut = function() {
    this.auth.signOut();
};

// Triggers when the auth state change for instance when the user signs-in or signs-out.
PhoenixRecipes.prototype.onAuthStateChanged = function(user) {
    if (user) { // User is signed in!
        // Get profile pic and user's name from the Firebase user object.
        var profilePicUrl = user.photoURL;
        var userName = user.displayName;
        var userName2 = user.displayName;

        // Set the user's profile pic and name.
        this.userPic.style.backgroundImage = 'url(' + profilePicUrl + ')';
        this.userName.textContent = userName;
        this.userName2.textContent = userName2;

        // Show user's profile and sign-out button.
        this.userName.removeAttribute('hidden');
        this.userPic.removeAttribute('hidden');
        this.signOutButton.removeAttribute('hidden');
        this.signOutHome.removeAttribute('hidden');

        // Show the welcome for the user
        this.welcomeUser.removeAttribute('hidden');

        // Hide the default welcome when the user isn't signed in
        this.welcomeHome.setAttribute('hidden', 'true');

        // Hide sign-in button.
        this.signInButton.setAttribute('hidden', 'true');
        this.signInHome.setAttribute('hidden', 'true');

    } else { // User is signed out!
        // Hide user's profile and sign-out button.
        this.userName.setAttribute('hidden', 'true');
        this.userPic.setAttribute('hidden', 'true');
        this.signOutButton.setAttribute('hidden', 'true');
        this.signOutHome.setAttribute('hidden', 'true');

        // Show sign-in button.
        this.signInButton.removeAttribute('hidden');
<<<<<<< HEAD
        this.signInHome.removeAttribute('hidden');
=======
        this.signInHome.setAttribute('hidden');
>>>>>>> TheSevenSeas

        // Show the welcome for the user when he is logged off
        this.welcomeHome.removeAttribute('hidden');

        // Hide the welcome for the user
        this.welcomeUser.setAttribute('hidden', 'true');
    }
};

// Checks that the Firebase SDK has been correctly setup and configured.
PhoenixRecipes.prototype.checkSetup = function() {
    if (!window.firebase || !(firebase.app instanceof Function) || !firebase.app().options) {
        window.alert('You have not configured and imported the Firebase SDK. ' +
            'Make sure you go through the codelab setup instructions and make ' +
            'sure you are running the codelab using `firebase serve`');
    }
};

window.onload = function() {
    window.phoenixRecipes = new PhoenixRecipes();
};
