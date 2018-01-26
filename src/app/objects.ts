
const addPageFormObject = {
    firstName : {
        "title":"First Name",
        "value":"",
        "type": "input",
        "validation":{
            "type":"string",
            "required":true,
            "maxLength":100,
            "minLength":0
        }
    },
    lastName : {
        "title":"Last Name",
        "value":"",
        "type": "input",
        "validation":{
            "type":"string",
            "required":false,
            "maxLength":100,
            "minLength":0
        }
    },
    email : {
        "title":"Email",
        "value":"",
        "type": "input",
        "validation":{
            "type":"email",
            "required":true,
            "maxLength":100,
            "minLength":0
        }
    },
    city: {
        "title": "City Name",
        "value": "022",
        "type": "select",
        "selectOptions": [
            { label: "Mumbai", value: "022"},
            { label: "Pune", value: "023"},
            { label: "Delhi", value: "044"}
        ],
        "validation":{
            "required":true
        }
    },
    gender : {
        "title": "Gender",
        "value": "",
        "type": "radio",
        "radioOptions": [
            { label: "Male", value: "m"},
            { label: "Female", value: "f"}
        ],
        "validation":{
            "required":true
        }
    },
    vehicle : {
        "title": "Vehicles",
        "value": [],
        "type": "checkbox",
        "checkboxOptions": [
            { label: "Car", value: "car"},
            { label: "Scooter", value: "sooter"},
            { label: "Bike", value: "bike"}
        ],
        "validation":{
            "required":true
        }
    },
    comment : {
        "title": "Comments",
        "value": "",
        "type": "textarea",
        "validation":{
            "required":true,
            "col":5,
            "row":3
        }
    }
}

const listPageArray= {
    heading:{ 
        "journeyDate" : "Journey Date", 
        "from" : "From", 
        "to" : "To", 
        "boarding" : "Boarding From", 
        "contactNo1" : "Contact No.", 
        "address" : "Address",
        "remark" :"Your Feedback"
    },
    list:[
        { 
            "bookingType" : "Train", 
            "from" : "CBE", 
            "to" : "JP", 
            "boarding" : "SBC", 
            "journeyDateDD" : "23", 
            "journeyDateMM" : "12", 
            "journeyDateYY" : "2017", 
            "journeyDate" : "23/12/2017",
            "contactNo1" : "9833556846", 
            "quota" : "low", 
            "address" : "Testing address will come here.", 
            "remark" : "Put the tools you use mo..."
        },
        { 
            "bookingType" : "Train", 
            "from" : "TVC", 
            "to" : "HWH", 
            "boarding" : "TVC", 
            "journeyDateDD" : "23", 
            "journeyDateMM" : "12", 
            "journeyDateYY" : "2017", 
            "journeyDate" : "23/12/2017",
            "contactNo1" : "9833583581", 
            "quota" : "low", 
            "address" : "Testing address will come here.", 
            "remark" : "Put the tools you use mo..."
        },
        { 
            "bookingType" : "Train", 
            "from" : "DURG", 
            "to" : "BKN", 
            "boarding" : "CBE", 
            "journeyDateDD" : "24", 
            "journeyDateMM" : "12", 
            "journeyDateYY" : "2017", 
            "journeyDate" : "24/12/2017",
            "contactNo1" : "9833572303", 
            "quota" : "low", 
            "address" : "Testing address will come here.", 
            "remark" : "Put the tools you use mo..."
        },
        { 
            "bookingType" : "Train", 
            "from" : "TVC", 
            "to" : "SC", 
            "boarding" : "MDU", 
            "journeyDateDD" : "24", 
            "journeyDateMM" : "12", 
            "journeyDateYY" : "2017", 
            "journeyDate" : "24/12/2017",
            "contactNo1" : "9833594756", 
            "quota" : "low", 
            "address" : "Testing address will come here.", 
            "remark" : "Put the tools you use mo..."
        },
        { 
            "bookingType" : "Train", 
            "from" : "TUP", 
            "to" : "SC", 
            "boarding" : "CBE", 
            "journeyDateDD" : "25", 
            "journeyDateMM" : "12", 
            "journeyDateYY" : "2017", 
            "journeyDate" : "25/12/2017",
            "contactNo1" : "9833581039", 
            "quota" : "low", 
            "address" : "Testing address will come here.", 
            "remark" : "Put the tools you use mo..."
        },
        { 
            "bookingType" : "Train", 
            "from" : "TUP", 
            "to" : "SC", 
            "boarding" : "MS", 
            "journeyDateDD" : "25", 
            "journeyDateMM" : "12", 
            "journeyDateYY" : "2017", 
            "journeyDate" : "25/12/2017", 
            "contactNo1" : "9833560519", 
            "quota" : "low", 
            "address" : "Testing address will come here.", 
            "remark" : "Put the tools you use mo..."
        },
        { 
            "bookingType" : "Train", 
            "from" : "TVC", 
            "to" : "RJPB", 
            "boarding" : "NDLS", 
            "journeyDateDD" : "26", 
            "journeyDateMM" : "12", 
            "journeyDateYY" : "2017", 
            "journeyDate" : "26/12/2017", 
            "contactNo1" : "9833553071", 
            "quota" : "low", 
            "address" : "Testing address will come here.", 
            "remark" : "Put the tools you use mo..."
        },
        { 
            "bookingType" : "Train", 
            "from" : "TUP", 
            "to" : "SC", 
            "boarding" : "RS", 
            "journeyDateDD" : "26", 
            "journeyDateMM" : "12", 
            "journeyDateYY" : "2017", 
            "journeyDate" : "26/12/2017",
            "contactNo1" : "9833596714", 
            "quota" : "low", 
            "address" : "Testing address will come here.", 
            "remark" : "Put the tools you use mo..."
        },
        { 
            "bookingType" : "Train", 
            "from" : "TCR", 
            "to" : "RJPB", 
            "boarding" : "NDLS", 
            "journeyDateDD" : "27", 
            "journeyDateMM" : "12", 
            "journeyDateYY" : "2017", 
            "journeyDate" : "27/12/2017",
            "contactNo1" : "9833599807", 
            "quota" : "low", 
            "address" : "Testing address will come here.", 
            "remark" : "Put the tools you use mo..."
        },
        { 
            "bookingType" : "Train", 
            "from" : "DURG", 
            "to" : "RJPB", 
            "boarding" : "KGO", 
            "journeyDateDD" : "27", 
            "journeyDateMM" : "12", 
            "journeyDateYY" : "2017", 
            "journeyDate" : "27/12/2017",
            "contactNo1" : "9833585412", 
            "quota" : "low", 
            "address" : "Testing address will come here.", 
            "remark" : "Put the tools you use mo..."
        },
        { 
            "bookingType" : "Train", 
            "from" : "TVC", 
            "to" : "BVI", 
            "boarding" : "MDU", 
            "journeyDateDD" : "28", 
            "journeyDateMM" : "12", 
            "journeyDateYY" : "2017", 
            "journeyDate" : "28/12/2017", 
            "contactNo1" : "9833554760", 
            "quota" : "low", 
            "address" : "Testing address will come here.", 
            "remark" : "Put the tools you use mo..."
        },
        { 
            "bookingType" : "Train", 
            "from" : "DURG", 
            "to" : "JP", 
            "boarding" : "MDU", 
            "journeyDateDD" : "28", 
            "journeyDateMM" : "12", 
            "journeyDateYY" : "2017", 
            "journeyDate" : "28/12/2017", 
            "contactNo1" : "9833599375", 
            "quota" : "low", 
            "address" : "Testing address will come here.", 
            "remark" : "Put the tools you use mo..."
        }   
    ]
}


export {addPageFormObject};
export {listPageArray};
