async function connect() {
  if (typeof window.ethereum !== 'undefined') {
    try {
      console.log('connecting');
      await ethereum.request({ method: 'eth_requestAccounts' });
    } catch (error) {
      console.log(error);
    }
    // If connected, change button to "Connected"
    document.getElementById('login_button').innerHTML = 'Connected';
    // If connected, enable "Swap" button
    document.getElementById('swap_button').disabled = false;
  }
  // Ask user to install MetaMask if it's not detected
  else {
    document.getElementById('login_button').innerHTML =
      'Please install MetaMask';
  }
}

document.getElementById('login_button').onclick = connect;
