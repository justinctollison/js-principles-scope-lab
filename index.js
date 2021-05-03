// Write your solution in this file!
var customerName = "bob";

const leastFavoriteCustomer = "intial value"

function upperCaseCustomerName()
{
    window.customerName = customerName.toUpperCase()
}

function setBestCustomer()
{
    window.bestCustomer = "not bob"
}

function overwriteBestCustomer()
{
    window.bestCustomer = "maybe bob"
}

function changeLeastFavoriteCustomer()
{
    leastFavoriteCustomer = "changed it"
}