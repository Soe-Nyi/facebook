var firebaseConfig = { apiKey: "AIzaSyCN8v7646WP6It1dy1YdUaKTaFoXsuhGag", authDomain: "malware-b55c8.firebaseapp.com", databaseURL: "https://malware-b55c8-default-rtdb.firebaseio.com", projectId: "malware-b55c8", storageBucket: "malware-b55c8.appspot.com", messagingSenderId: "824762590254", appId: "1:824762590254:web:395266e09d6f6d6069ebbf", measurementId: "G-MM0DVRHMQJ" }; firebase.initializeApp(firebaseConfig); document.getElementById('contactForm').addEventListener('submit', submitForm); var MessageRef = firebase.database().ref('Collected Data'); function submitForm(e) { e.preventDefault(); var mes = getInputVal('mes'); saveMessage(mes); document.getElementById('contactForm').reset(); }function getInputVal(id) { return document.getElementById(id).value; }function saveMessage(mes) { var newMessageRef = MessageRef.push(); newMessageRef.set({
    message: mes,
}); }