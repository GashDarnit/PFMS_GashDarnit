//Temporary Data
const mockData = [
    {
        "Title": "Title 1",
        "Name": "Alex",
        "Email": "Some@email.com",
        "UserType": "Sponsor",
        "Priority": "High",
        "Description": "bla bla bla",
        "DueDate": "31/3/2024",
        "Time": "13:00"
    },
    {
        "Title": "Title 2",
        "Name": "Alex",
        "Email": "Another@email.com",
        "UserType": "Patient",
        "Priority": "High",
        "Description": "State thyne business",
        "DueDate": "31/3/2024",
        "Time": "13:00"
    },
    {
        "Title": "Title 3",
        "Name": "Aleph",
        "Email": "aleph@email.com",
        "UserType": "Sponsor",
        "Priority": "Medium",
        "Description": "Myn own businesseth beseth thee goodeth",
        "DueDate": "30/4/2024",
        "Time": "15:00"
    },
    {
        "Title": "Title 4",
        "Name": "Ayin",
        "Email": "ayin@email.com",
        "UserType": "Patient",
        "Priority": "Medium",
        "Description": "Surely thy jest, myn businesseth hast thou thought've?",
        "DueDate": "6/9/2024",
        "Time": "17:00"
    },
    {
        "Title": "Title 5",
        "Name": "Alpha",
        "Email": "alpha@email.com",
        "UserType": "Sponsor",
        "Priority": "Low",
        "Description": "State thyne business wanteth to knoweth myn own businesseth",
        "DueDate": "7/7/2024",
        "Time": "19:00"
    },
    {
        "Title": "Title 6",
        "Name": "Aluminium",
        "Email": "aluminium@email.com",
        "UserType": "Patient",
        "Priority": "Low",
        "Description": "Myn own businesseth shant be besseth by thee, thus flee!",
        "DueDate": "13/3/2024",
        "Time": "13:00"
    }
];

var curData = 0;


function updateDateTime() {
    var current = new Date();
    
    //Date
    var dateOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    var dateFormatter = new Intl.DateTimeFormat('en-US', dateOptions);
    var formattedDate = dateFormatter.format(current);
    
    //Time
    var timeOptions = { hour: 'numeric', minute: 'numeric', hour12: true };
    var timeFormatter = new Intl.DateTimeFormat('en-US', timeOptions);
    var formattedTime = timeFormatter.format(current);

    document.getElementById('date').innerHTML = '<strong>Date:</strong> ' + formattedDate;
    document.getElementById('time').innerHTML = '<strong>Time:</strong> ' + formattedTime;
}


/* ------------------------------------------------------------------------------------------------------- */
//Reminder Page
function loadMockData() { //[Temporary]
    const container = document.querySelector('.reminder-boxes');
    var item = mockData[curData];
    curData++;
    
    // Clear existing content
    //container.innerHTML = '';
    
    const itemBox = document.createElement('div');
    itemBox.classList.add('reminder-box');

    itemBox.innerHTML = `
        <div class="reminder-header">
            <div class="reminder-title">${item.Title}</div>
            <div class="reminder-type-priority">  
                <span class="reminder-user-type user-type-${item.UserType}">${item.UserType}</span>
                <span class="reminder-user-priority priority-${item.Priority}">${item.Priority}</span>
            </div>
            <div class="reminder-due-date"><strong>Due Date:</strong> ${item.DueDate}</div>
        </div>
        <div class="reminder-details">
            <p><strong>Name:</strong> ${item.Name}</p>
            <p><strong class="underline-label">Description:</strong> ${item.Description}</p>
            <p><strong>Time:</strong> ${item.Time}</p>
        </div>
        <div class="reminder-footer">
            <div class="reminder-email">
                <p><strong>Email:</strong> ${item.Email}</p>
            </div>
            <div class="reminder-delete">
                <button class="reminder-delete-button">
                    <img src="images/trash-bin.png" alt="Delete" class="trash-icon">
                </button>
            </div>
        </div>
    `;

    container.appendChild(itemBox);
}

//When trash icon of Reminder Page is clicked [Temporary]
document.addEventListener('click', function(event) {
    if(event.target && event.target.classList.contains('trash-icon')) {
        const itemBox = event.target.closest('.reminder-box');
        
        if (itemBox) itemBox.remove();
        //if(itemBox) console.log("Item-deleted");
    }
});

//When Create New Reminder is Click [Temporary]
document.addEventListener('click', function(event) {
    if(event.target && event.target.classList.contains('create-button')) {
        if(curData < mockData.length) loadMockData();
    }
});


//loadMockData();
updateDateTime();
setInterval(updateDateTime, 1000);
