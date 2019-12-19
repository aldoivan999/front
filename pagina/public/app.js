(function(){
const config = {
  apiKey: "AIzaSyDMs1N4JSAVyZJg0ehgvHqc_Sp9-dfrB94",
  authDomain: "comida-9c06b.firebaseapp.com",
  databaseURL: "https://comida-9c06b.firebaseio.com",
  storageBucket: "comida-9c06b.appspot.com",
}; 

const app = firebase.initializeApp(config)


// Obtener elementos
const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnSignUp = document.getElementById('btnSignUp');
const btnLogout = document.getElementById('btnLogout');
const btnDownload = document.getElementById('btnDownload');

// Añadir Evento login
btnLogin.addEventListener('click', e => {
  //Obtener email y pass
  const email = txtEmail.value;
  const pass = txtPassword.value;
  const auth = firebase.auth();
  // Sign in
  const promise = auth.signInWithEmailAndPassword(email, pass);
  promise.catch(e => console.log(e.message));
});

// Añadir evento signup
btnSignUp.addEventListener('click', e => {
  // Obtener email y pass
  // TODO: comprobar que el email sea real
  const email = txtEmail.value;
  const pass = txtPassword.value;
  const auth = firebase.auth();
  // Sign in
  const promise = auth.createUserWithEmailAndPassword(email, pass);
  promise.catch(e => console.log(e.message));
});

btnLogout.addEventListener('click', e => {
  firebase.auth().signOut();
});

// Añadir un listener en tiempo real
firebase.auth().onAuthStateChanged( firebaseUser => {
  if(firebaseUser) {
    console.log(firebaseUser);
    btnLogout.classList.remove('hide');
  } else {
    console.log('no logueado');
    btnLogout.classList.add('hide');

  }
  });

  firebase.auth().onAuthStateChanged( firebaseUser => {
    if(firebaseUser) {
      console.log(firebaseUser);
      btnDownload.classList.remove('hide');
    } else {
      console.log('no logueado');
      btnDownload.classList.add('hide');
  
    }
  
});
} ());
