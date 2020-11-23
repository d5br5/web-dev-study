module.exports = {
    IsOwner: function (req, res) {
        if (req.session.is_logined) {
            return true;
        } else {
            return false;
        }
    },
    StatusUI: function (req, res) {
        var authStatusUI = '<a href="/auth/login">Login</a>';
        if (this.IsOwner(req, res)) {
            authStatusUI = `${req.session.nickname} | <a href="/auth/logout">Logout</a>`;
        }
        return authStatusUI;
    }

}