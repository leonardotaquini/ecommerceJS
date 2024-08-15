export class UserController {
    constructor() {
        this.getUsers = this.getUsers.bind(this);
        this.getUser = this.getUser.bind(this);
        this.createUser = this.createUser.bind(this);
        this.updateUser = this.updateUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }

    getUsers(req, res) {
        res.json({ msg: 'get API - Get all users' });
    }

    getUser(req, res) {
        res.json({ msg: 'get API - Get a single user' });
    }

    createUser(req, res) {
        res.json({ msg: 'post API - Create a user' });
    }

    updateUser(req, res) {
        res.json({ msg: 'update API - Update a user' });
    }

    deleteUser(req, res) {
        res.json({ msg: 'delete API - Delete a user' });
    }
}
