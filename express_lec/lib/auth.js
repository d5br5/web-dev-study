module.exports = {
    IsOwner: function (req, res) {
        if (req.user) {
            return true;
        } else {
            return false;
        }
    },
    StatusUI: function (req, res) {
        var authStatusUI = '<a href="/auth/login">Login</a>';
        if (this.IsOwner(req, res)) {
            authStatusUI = `${req.user.nickname} | <a href="/auth/logout">Logout</a>`;
        }
        return authStatusUI;
    }

}