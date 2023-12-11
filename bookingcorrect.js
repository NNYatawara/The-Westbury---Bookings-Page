// ----------------Variable Definitions-----------------
let name;
let address;
let country;
let phoneNumber;
let email;
let checkinDate;
let checkoutDate;
let roomAdults;
let roomChildren;

let wifiRequirementChoice;
let yesRadioButton;
let noRadioButton;

let selectedViewChoice;
let poolRadioButton;
let gardenRadioButton;

let singleNumber;
let doubleNumber;
let tripleNumber;
let extraNumber;
let above5kidsNumber;

let singleDisplay;
let doubleDisplay;
let tripleDisplay;
let extraDisplay;
let kidsDisplay;

let singleCostNumber;
let doubleCostNumber;
let tripleCostNumber;
let extraCostNumber;
let totalCostNumber;
let above5kidsCostNumber;

let checkinInput;
let checkoutInput;

let loyaltyButton;
let loyaltyPointsNumber;
let earnedLoyaltyPoints;

let promoCodeNumber;
let discountedTotalCostNumber;

//adventure bookings
let guideRequirementChoice;
let guideYesRadioButton;
let guideNoRadioButton;
let guideCostNumber;

let nationalityChoice;
let localRadioButton;
let foreignRadioButton;

let adventureHours;

// ------------------Get References to Interactive Elements-----------------

txtName = document.getElementById("name");
txtAddress = document.getElementById("address");
txtCountry = document.getElementById("address");
txtPhone = document.getElementById("phoneNumber");
txtEmail = document.getElementById("email");

txtRoomadults = document.getElementById("roomAdults");
txtRoomchildren = document.getElementById("roomChildren");

//wifi requirement
wifiRequirementChoice = document.getElementById("wifiRequirement");
yesRadioButton = document.getElementById("yes");
noRadioButton = document.getElementById("no");

//select the view
selectedViewChoice = document.getElementById("selectedView");
poolRadioButton = document.getElementById("pool");
gardenRadioButton = document.getElementById("garden");

//check in and check out
checkinInput = document.getElementById("checkin");
checkoutInput = document.getElementById("checkout");

//select rooms
singleNumber = document.getElementById("single");
doubleNumber = document.getElementById("double");
tripleNumber = document.getElementById("triple");
extraNumber = document.getElementById("extra");
above5kidsNumber = document.getElementById("above5kids")

singleCostNumber = document.getElementById("singleCost");
doubleCostNumber = document.getElementById("doubleCost");
tripleCostNumber = document.getElementById("tripleCost");
extraCostNumber = document.getElementById("extraCost");
above5kidsCostNumber = document.getElementById("above5Cost");
totalCostNumber = document.getElementById("totalCost");

singleDisplay = document.getElementById("displaySingle");
doubleDisplay = document.getElementById("displayDouble");
tripleDisplay = document.getElementById("displayTriple");
extraDisplay = document.getElementById("displayExtra");
kidsDisplay = document.getElementById("displayAbove5kids");

//loyalty botton
loyaltyButton = document.getElementById("loyaltyButton");
loyaltyPointsNumber = document.getElementById("loyaltyPointsNumber")

//promo code
promoCodeNumber = document.getElementById("promocode");
discountedTotalCostNumber = document.getElementById("discountedTotalCost");

//overall room bookings
const overallRoomBooking = document.getElementById("overallRooms");

//book now button
const bookNowButton = document.getElementById("bookNowButton");

//Adventure guide
guideRequirementChoice = document.getElementById("displayGuide");
guideYesRadioButton = document.getElementById("guideyes");
guideNoRadioButton = document.getElementById("guideno");
guideCostNumber =document.getElementById("guideCost");

//adventure adults and children 
adultsNumber = document.getElementById("adventureAdults");
childrenNumber = document.getElementById("adventureChildren");

adultsCostNumber = document.getElementById("adultsCost");
childrenCostNumber = document.getElementById("childrenCost");

adultsDisplay = document.getElementById("displayAdults");
childrenDisplay = document.getElementById("displayChildren");

//adventure hours
adventureHours = document.getElementById("hours");

//adventure nationality
localRadioButton = document.getElementById("local");
foreignRadioButton = document.getElementById("foreign");

//total adventure cost
totalAdventureCost = document.getElementById("totalCostAdventure");

//book adventure button
const bookAdventureButton = document.getElementById("bookAdventure");
const overallAdventureBooking = document.getElementById("overallAdventure");

//add to favourites button
const addToFavoritesButton = document.getElementById("favourites");


// ----------------Listen for Events-------------------------

//wifi requirement
yesRadioButton.addEventListener("click", updateRequirement);
noRadioButton.addEventListener("click", updateRequirement);

//select the view
poolRadioButton.addEventListener("click", updateView);
gardenRadioButton.addEventListener("click", updateView);

//check in and check out
checkinInput.addEventListener("input", updateCost);
checkoutInput.addEventListener("input", updateCost);

//display selected rooms
singleNumber.addEventListener("input", updateRooms);
doubleNumber.addEventListener("input", updateRooms);
tripleNumber.addEventListener("input", updateRooms);
extraNumber.addEventListener("input", updateRooms);
above5kidsNumber.addEventListener("input", updateRooms);

//calculate room cost
singleNumber.addEventListener("input", updateCost);
doubleNumber.addEventListener("input", updateCost);
tripleNumber.addEventListener("input", updateCost);
extraNumber.addEventListener("input", updateCost);
above5kidsNumber.addEventListener("input", updateCost);

//loyalty botton
loyaltyButton.addEventListener("click", calculateLoyaltyPoints);

//promo code
promoCodeNumber.addEventListener("input", updateCost);

//book now button
bookNowButton.addEventListener("click", bookNow);

//Adventure guide requirement
guideYesRadioButton.addEventListener("click", updateGuide);
guideNoRadioButton.addEventListener("click", updateGuide);
guideYesRadioButton.addEventListener("click", updateAdventureCost);
guideNoRadioButton.addEventListener("click", updateAdventureCost);

//adventure nationality
localRadioButton.addEventListener("click", updateAdventureCost);
foreignRadioButton.addEventListener("click", updateAdventureCost);

//display adventure children and adults
adultsNumber.addEventListener("input", updatePersons);
childrenNumber.addEventListener("input", updatePersons);

//calculate adventure costs
adultsNumber.addEventListener("input", updateAdventureCost);
childrenNumber.addEventListener("input", updateAdventureCost);

adventureHours.addEventListener("input", updateAdventureCost);

//book adventure button
bookAdventureButton.addEventListener("click", bookAdventure);

// Add to Favorites button 
addToFavoritesButton.addEventListener("click", addToFavorites);



// ----------------Implementation------------------------

//wifi requirement
function updateRequirement() {
    if (yesRadioButton.checked) {
        wifiRequirementChoice.innerText = "Wi-Fi is required.";
    } else {
        wifiRequirementChoice.innerText = "Wi-Fi is not required.";
    }
}

//select view
function updateView() {
    if (poolRadioButton.checked) {
        selectedViewChoice.innerText = "Pool View";
    } else if (gardenRadioButton.checked) {
        selectedViewChoice.innerText = "Garden View";
    }
}

//display rooms
function updateRooms() {
    const numSingle = parseInt(singleNumber.value) || 0;
    const numDouble = parseInt(doubleNumber.value) || 0;
    const numTriple = parseInt(tripleNumber.value) || 0;
    const numExtra = parseInt(extraNumber.value) || 0;
    const numAbove5kids = parseInt(above5kidsNumber.value) || 0;

    displaySingle.innerText = numSingle;
    displayDouble.innerText = numDouble;
    displayTriple.innerText = numTriple;
    displayExtra.innerText = numExtra;
    displayAbove5kids.innerText = numAbove5kids;
}

//calculate cost of rooms
function updateCost() {
    const singleCostPerNight = 25000;
    const doubleCostPerNight = 30000;
    const tripleCostPerNight = 40000;
    const extraBedPerNight = 8000;
    const above5kidsCostPerNight = 5000;

    const numSingle = parseInt(singleNumber.value) || 0;
    const numDouble = parseInt(doubleNumber.value) || 0;
    const numTriple = parseInt(tripleNumber.value) || 0;
    const numExtra = parseInt(extraNumber.value) || 0;
    const numAbove5kids = parseInt(above5kidsNumber.value) || 0;

    const checkinDate = new Date(checkinInput.value);
    const checkoutDate = new Date(checkoutInput.value);
    const todayDate = new Date();

    if (checkinDate < todayDate) {
        alert("Please select a valid check-in date.");
        checkinInput.value = "";
        return;
    }

    if (checkoutDate < todayDate) {
        alert("Please select a valid check-out date.");
        checkoutInput.value = "";
        return;
    }

    if (checkoutDate < todayDate) {
        alert("Please select a valid check-out date.");
        checkoutInput.value = "";
        return;
    }

    const numDays = Math.floor((checkoutDate - checkinDate) / (24 * 60 * 60 * 1000));

    const totalSingleCost = numSingle * singleCostPerNight * numDays;
    const totalDoubleCost = numDouble * doubleCostPerNight * numDays;
    const totalTripleCost = numTriple * tripleCostPerNight * numDays;
    const totalExtraCost = numExtra * extraBedPerNight * numDays;
    const totalAbove5kidsCost = numAbove5kids * above5kidsCostPerNight * numDays;
    const grandTotal = totalSingleCost + totalDoubleCost + totalTripleCost + totalExtraCost + totalAbove5kidsCost;

    singleCostNumber.innerText = `LKR ${totalSingleCost.toFixed(2)}`;
    doubleCostNumber.innerText = `LKR ${totalDoubleCost.toFixed(2)}`;
    tripleCostNumber.innerText = `LKR ${totalTripleCost.toFixed(2)}`;
    extraCostNumber.innerText = `LKR ${totalExtraCost.toFixed(2)}`;
    above5kidsCostNumber.innerText = `LKR ${totalAbove5kidsCost.toFixed(2)}`;
    totalCostNumber.innerText = `LKR ${grandTotal.toFixed(2)}`; 

    //promocode
    const promoCode = (promoCodeNumber.value).trim();
    if (promoCode === "promo123" && promoCode !== ""){
        const discountedGrandTotal = grandTotal * 0.95;
        discountedTotalCostNumber.innerText = `LKR ${discountedGrandTotal.toFixed(2)}`;
    }
    else{
        discountedTotalCostNumber.innerText = `No Discount`;
    }
    
}

//calculate loyalty points
function calculateLoyaltyPoints() {
    const numSingle = parseInt(singleNumber.value) || 0;
    const numDouble = parseInt(doubleNumber.value) || 0;
    const numTriple = parseInt(tripleNumber.value) || 0;
    const totalRooms = numSingle + numDouble + numTriple;
    
    earnedLoyaltyPoints = 0;

    if (totalRooms > 3){
        earnedLoyaltyPoints = totalRooms * 20;
        loyaltyPointsNumber.innerText = "Congratulations! You've earned " + earnedLoyaltyPoints + " loyalty points.";

        localStorage.setItem("loyaltyPoints", earnedLoyaltyPoints);

    } else {
        loyaltyPointsNumber.innerText = "You need to book more than 3 rooms to earn loyalty points.";

        localStorage.removeItem("loyaltyPoints");
    }
}

//Adventure guide requirement 
function updateGuide() {
    if (guideYesRadioButton.checked) {
        guideRequirementChoice.innerText = "Required";
    } else {
        guideRequirementChoice.innerText = "Not required";
    }
}

//display adults and children
function updatePersons() {
    const numAdults = parseInt(adultsNumber.value) || 0;
    const numChildren = parseInt(childrenNumber.value) || 0;

    displayAdults.innerText = numAdults;
    displayChildren.innerText = numChildren;
}

//calculate cost of adventures
function updateAdventureCost(){
    const foreignAdultRate = 10000;
    const foreignChildRate = 5000;
    const localAdultRate = 5000;
    const localChildRate = 2000;
    const guideCostAdult = 1000;
    const guideCostChild = 500;

    const numberOfAdults = parseInt(adultsNumber.value) || 0;
    const numberOfChildren = parseInt(childrenNumber.value) || 0;
    const numberOfHours = parseInt(adventureHours.value) || 0;
    let totalAdultsCost = 0;
    let totalChildrenCost = 0;
    let totalCostGuide = 0;

    if (foreignRadioButton.checked) {
        totalAdultsCost = numberOfAdults * foreignAdultRate * numberOfHours;
        totalChildrenCost = numberOfChildren * foreignChildRate * numberOfHours;
    } else if (localRadioButton.checked) {
        totalAdultsCost = numberOfAdults * localAdultRate * numberOfHours;
        totalChildrenCost = numberOfChildren * localChildRate * numberOfHours;
    }
    
    adultsCostNumber.innerText = `LKR ${totalAdultsCost.toFixed(2)}`;
    childrenCostNumber.innerText = `LKR ${totalChildrenCost.toFixed(2)}`;

    if (guideYesRadioButton.checked) {
        totalCostGuide = (numberOfAdults * guideCostAdult) + (numberOfChildren * guideCostChild);
    }else {
        totalCostGuide = 0;
    }
    guideCostNumber.innerText = `LKR ${totalCostGuide.toFixed(2)}`;

    const grandTotalAdventure = totalAdultsCost + totalChildrenCost + totalCostGuide;

    totalAdventureCost.innerText = `LKR ${grandTotalAdventure.toFixed(2)}`; 
}

//adventure button
function bookAdventure(event) {
    event.preventDefault();

    const adventureName = "Diving Adventure";
    const adventureDetails = getAdventureDetails();

    // -------------------------------------
    const foreignAdultRate = 10000;
    const foreignChildRate = 5000;
    const localAdultRate = 5000;
    const localChildRate = 2000;
    const guideCostAdult = 1000;
    const guideCostChild = 500;

    const numberOfAdults = parseInt(adultsNumber.value) || 0;
    const numberOfChildren = parseInt(childrenNumber.value) || 0;
    const numberOfHours = parseInt(adventureHours.value) || 0;
    let totalAdultsCost = 0;
    let totalChildrenCost = 0;
    let totalCostGuide = 0;

    if (foreignRadioButton.checked) {
        totalAdultsCost = numberOfAdults * foreignAdultRate * numberOfHours;
        totalChildrenCost = numberOfChildren * foreignChildRate * numberOfHours;
    } else if (localRadioButton.checked) {
        totalAdultsCost = numberOfAdults * localAdultRate * numberOfHours;
        totalChildrenCost = numberOfChildren * localChildRate * numberOfHours;
    }

    if (guideYesRadioButton.checked) {
        totalCostGuide = (numberOfAdults * guideCostAdult) + (numberOfChildren * guideCostChild);
    }else {
        totalCostGuide = 0;
    }

    const grandTotalAdventure = totalAdultsCost + totalChildrenCost + totalCostGuide;

    // ---------------------

    const newOverallAdventure = document.createElement("p");
    newOverallAdventure.innerText = `Diving Adventure - Total: LKR ${grandTotalAdventure.toFixed(2)}\n\tAdults - ${numberOfAdults}\n\tChildren - ${numberOfChildren}\n\tHours - ${numberOfHours}`;

    overallAdventureBooking.appendChild(newOverallAdventure);
    
    clearOverallRoomBooking();

    alert(`Thank you for booking ${adventureName}!\n\n${adventureDetails}\nTotal Cost: LKR ${grandTotalAdventure.toFixed(2)}`);

    clearAdventureBookingDetails();
}

function getAdventureDetails() {
    const guideRequirement = guideRequirementChoice.innerText;
    const numberOfAdults = adultsNumber.value || 0;
    const numberOfChildren = childrenNumber.value || 0;
    const numberOfHours = adventureHours.value || 0;

    return `Adventure Details:\nAdults: ${numberOfAdults}\nChildren: ${numberOfChildren}\nHours: ${numberOfHours}\nGuide Requirement: ${guideRequirement}`;
}

function clearOverallRoomBooking(){
    overallRoomBooking.innerHTML = "";
}

function clearAdventureBookingDetails() {

    guideYesRadioButton.checked = false;
    guideNoRadioButton.checked = false;
    localRadioButton.checked = false;
    foreignRadioButton.checked = false;
    adultsNumber.value = "";
    childrenNumber.value = "";
    adventureHours.value = "";
    guideRequirementChoice.innerText = "";
    displayAdults.innerText = "0";
    displayChildren.innerText = "0";
    adultsCostNumber.innerText = "0";
    childrenCostNumber.innerText = "0";
    guideCostNumber.innerText = "LKR 0.00";
    totalAdventureCost.innerText = "LKR 0.00";
}

// book now button

function bookNow(event) {

    event.preventDefault();

    displayBookingSummary();

    clearForm();
}

function clearForm() {

    txtRoomadults.value = "";
    txtRoomchildren.value = "";

    wifiRequirementChoice.innerText = "Wifi requirement is displayed here";
    yesRadioButton.checked = false;
    noRadioButton.checked = false;
    selectedViewChoice.innerText = "The selected view will be displayed here.";
    poolRadioButton.checked = false;
    gardenRadioButton.checked = false;
    
    singleNumber.value = "";
    doubleNumber.value = "";
    tripleNumber.value = "";
    extraNumber.value = "";
    above5kidsNumber.value = "";
    
    singleDisplay.innerText = "0";
    doubleDisplay.innerText = "0";
    tripleDisplay.innerText = "0";
    extraDisplay.innerText = "0";
    kidsDisplay.innerText = "0";
    
    singleCostNumber.innerText = "LKR 0.00";
    doubleCostNumber.innerText = "LKR 0.00";
    tripleCostNumber.innerText = "LKR 0.00";
    extraCostNumber.innerText = "LKR 0.00";
    totalCostNumber.innerText = "LKR 0.00";
    above5kidsCostNumber.innerText = "LKR 0.00";
    
    checkinInput.value = "";
    checkoutInput.value = "";
    
    loyaltyPointsNumber.value = "";
    earnedLoyaltyPoints.innerText = "";
    
    promoCodeNumber.value = "";
    discountedTotalCostNumber.innerText = "LKR 0.00";

    loyaltyPointsNumber.innerText = "";

}

function displayBookingSummary() {

    // -----------------
    const singleCostPerNight = 25000;
    const doubleCostPerNight = 30000;
    const tripleCostPerNight = 40000;
    const extraBedPerNight = 8000;
    const above5kidsCostPerNight = 5000;

    const numSingle = parseInt(singleNumber.value) || 0;
    const numDouble = parseInt(doubleNumber.value) || 0;
    const numTriple = parseInt(tripleNumber.value) || 0;
    const numExtra = parseInt(extraNumber.value) || 0;
    const numAbove5kids = parseInt(above5kidsNumber.value) || 0;

    const checkinDate = new Date(checkinInput.value);
    const checkoutDate = new Date(checkoutInput.value);

    const numDays = Math.floor((checkoutDate - checkinDate) / (24 * 60 * 60 * 1000));

    const totalSingleCost = numSingle * singleCostPerNight * numDays;
    const totalDoubleCost = numDouble * doubleCostPerNight * numDays;
    const totalTripleCost = numTriple * tripleCostPerNight * numDays;
    const totalExtraCost = numExtra * extraBedPerNight * numDays;
    const totalAbove5kidsCost = numAbove5kids * above5kidsCostPerNight * numDays;
    const grandTotal = totalSingleCost + totalDoubleCost + totalTripleCost + totalExtraCost + totalAbove5kidsCost;

    // ---------------

    const numSingleRoom = singleNumber.value || 0;
    const numDoubleRoom = doubleNumber.value || 0;
    const numTripleRoom = tripleNumber.value || 0;
    const numExtraRoom = extraNumber.value || 0;
    const numAbove5kidsRoom = above5kidsNumber.value || 0;


    const newOverallRooms = document.createElement("p");
    newOverallRooms.innerText = `Room Bookings - Total : LKR ${grandTotal} \n\tSingle Rooms - ${numSingleRoom}\n\tDouble Rooms - ${numDoubleRoom}\n\tTriple Rooms - ${numTripleRoom}\n\tExtra Beds - ${numExtraRoom}\n\tKids above 5 years - ${numAbove5kidsRoom}`;

    overallRoomBooking.appendChild(newOverallRooms);
}

function addToFavorites(event) {
    event.preventDefault();

    localStorage.removeItem("favorites");

    const favorites = {
        name: txtName.value,
        address: txtAddress.value,
        country: txtCountry.value,
        phoneNumber: txtPhone.value,
        email: txtEmail.value,
        roomAdults: txtRoomadults.value,
        roomChildren: txtRoomchildren.value,
        wifiRequirement: wifiRequirementChoice.innerText,
        selectedView: selectedViewChoice.innerText,
        singleNumber: singleNumber.value,
        doubleNumber: doubleNumber.value,
        tripleNumber: tripleNumber.value,
    };

    localStorage.setItem("favorites", JSON.stringify(favorites));

    alert("Booking Added to Favourites!");
}


