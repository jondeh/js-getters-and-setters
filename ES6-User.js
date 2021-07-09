class User {
  set name (value) {
    if (value.length < 1) {
      throw new Error('Please provide a name for the user')
    }
    this._name = value
  }

  get name () {
    return this._name
  }

  set password (value) {
    if (value.length < 6) {
      throw new Error('Password must be at least 6 characters')
    }
    this._password = value
  }

  get password () {
    return '*'.repeat(this._password.length)
  }
}

const newUser = new User()

newUser.name = 'Ali';
newUser.password = 'password';
console.log(newUser.name);
console.log(newUser.password);
