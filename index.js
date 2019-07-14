function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()

    })
}

preventRefreshOnSubmit()

let input = document.querySelector('input')

function retrieveEmployeeInformation(){
  return input.value
}

function addNewElementAsLi(employeeInfo) {
  let li = document.createElement('li')
  li.innerHtml = employeeInfo
  $(".employee-list").append(li)
}
