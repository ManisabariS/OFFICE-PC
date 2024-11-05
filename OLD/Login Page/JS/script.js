let btnLogin = document.getElementById("btnLogin")
btnLogin.addEventListener('click', getUsername)
function getUsername()
{
    let dBuserName = 'sabariskrms2839@gmail.com'
    let dBPassword = '12345678'

    let userName = document.getElementById('username').value
    // alert(`${dBuserName} ${typeof(dBuserName)} == ${userName} ${typeof(userName)}`)
    let password = document.getElementById('password').value
    // alert(`${dBPassword} ${typeof(dBPassword)} == ${password} ${typeof(password)}`)
    if (userName == dBuserName)
    {
        if(password == dBPassword)
            {
                
            }
            else
            {
                let error = document.getElementById('error')
                error.innerText="Incorrect password"
            }
    }
        
    else
    {
            let error = document.getElementById('error')
            error.innerText="Incorrect Username"
    }

}
