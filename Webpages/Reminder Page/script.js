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
    }
    // Add more objects as needed
];

const curData = 0;


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

    document.getElementById('date').textContent = 'Date: ' + formattedDate;
    document.getElementById('time').textContent = 'Time: ' + formattedTime;
}


/* ------------------------------------------------------------------------------------------------------- */
//Reminder Page
function loadMockData() {
    const container = document.querySelector('.reminder-boxes');

    // Clear existing content
    container.innerHTML = '';
    
    
    // Iterate over each data item
    mockData.forEach(item => {
        // Create a new item box element
        const itemBox = document.createElement('div');
        itemBox.classList.add('reminder-box');

        // Construct HTML content for the item box using template literals
        itemBox.innerHTML = `
           <div class="reminder-header">
                <div class="reminder-title">${item.Title}</div>
                <div class="reminder-type-priority">  
                    <span class="reminder-user-type">${item.UserType}</span>
                    <span class="reminder-user-priority">${item.Priority}</span>
                </div>
                <div class="reminder-due-date">${item.DueDate}</div>
            </div>
            
            <div class="reminder-details">
                <p>Name: ${item.Name}</p>
                <p>Description: ${item.Description}</p>
                <p>Time: ${item.Time}</p>
            </div>
            
            <div class="reminder-footer">
                <div class="reminder-email">
                    <p>Email: ${item.Email}</p>
                </div>
                
                <div class="reminder-delete">
                    <button class="reminder-delete-button">
                        <img src="images/trash-bin.png" alt="Delete" class="trash-icon">
                    </button>
                </div>
            </div>
        `;
        
        
        // Append the item box to the container
        container.appendChild(itemBox);
    });
}

//When trash icon of Reminder Page is clicked
document.addEventListener('click', function(event) {
    if(event.target && event.target.classList.contains('trash-icon')) {
        const itemBox = event.target.closest('.reminder-box');
        
        //if (itemBox) itemBox.remove();
        if(itemBox) console.log("Item-deleted");
    }
});


loadMockData();
updateDateTime();
setInterval(updateDateTime, 1000);
