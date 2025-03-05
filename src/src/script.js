// Function to calculate cost
function calculateCost() {
    const weight = parseFloat(document.getElementById("weight").value);
    const costPerUnit = parseFloat(document.getElementById("costPerUnit").value);
    
    if (isNaN(weight) || isNaN(costPerUnit)) {
        document.getElementById("costOutput").innerHTML = "<span class='error'>Please enter valid weight and cost values.</span>";
    } else {
        const cost = weight * costPerUnit;
        document.getElementById("costOutput").innerHTML = `Total Shipping Cost: $${cost.toFixed(2)}`;
    }
}

// Function to print label
function printLabel() {
    const sender = document.getElementById("sender").value;
    const receiver = document.getElementById("receiver").value;
    const tracking = document.getElementById("tracking").value;
    
    if (!sender || !receiver || !tracking) {
        document.getElementById("labelOutput").innerHTML = "<span class='error'>Please fill in all fields.</span>";
    } else {
        document.getElementById("labelOutput").innerHTML = `
            <strong>Package Label:</strong><br>
            Sender: ${sender}<br>
            Receiver: ${receiver}<br>
            Tracking Number: ${tracking}`;
    }
}

// Function to update package status
function updateStatus() {
    const trackingNumber = document.getElementById("updateTracking").value;
    const status = document.getElementById("status").value;
    
    if (!trackingNumber || !status) {
        document.getElementById("statusOutput").innerHTML = "<span class='error'>Please enter both tracking number and status.</span>";
    } else {
        document.getElementById("statusOutput").innerHTML = `Package with Tracking Number ${trackingNumber} is now marked as: ${status}`;
    }
}

// Function to accept package
function acceptPackage() {
    const trackingNumber = document.getElementById("acceptTracking").value;
    
    if (!trackingNumber) {
        document.getElementById("acceptOutput").innerHTML = "<span class='error'>Please enter a tracking number.</span>";
    } else {
        document.getElementById("acceptOutput").innerHTML = `Package with Tracking Number ${trackingNumber} has been accepted.`;
    }
}
