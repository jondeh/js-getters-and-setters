function User() {}

Object.defineProperty(User.prototype, 'name', {
    set: (value) => {
        if (value.length < 1) {
            throw new Error ('Please provide a username');
        }
        this._name = value;
    },
    get: () => this._name,
})

const newUser = new User();

newUser.name = '';

console.log(newUser.name);