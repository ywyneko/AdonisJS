'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var User = use('App/Models/User');

var UserController =
/*#__PURE__*/
function () {
  function UserController() {
    _classCallCheck(this, UserController);
  }

  _createClass(UserController, [{
    key: "index",
    value: function index(_ref) {
      var view, users;
      return regeneratorRuntime.async(function index$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              view = _ref.view;
              _context.next = 3;
              return regeneratorRuntime.awrap(User.all());

            case 3:
              users = _context.sent;
              return _context.abrupt("return", view.render('user.index', {
                'users': users.toJSON()
              }));

            case 5:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }, {
    key: "store",
    value: function store(_ref2) {
      var request, response, session, user;
      return regeneratorRuntime.async(function store$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              request = _ref2.request, response = _ref2.response, session = _ref2.session;
              user = new User();
              user.username = request.input('username');
              user.email = request.input('email');
              user.password = request.input('password');
              _context2.next = 7;
              return regeneratorRuntime.awrap(user.save());

            case 7:
              session.flash({
                notification: 'successfully created'
              });
              return _context2.abrupt("return", response.redirect('/user'));

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  }, {
    key: "create",
    value: function create(_ref3) {
      var view;
      return regeneratorRuntime.async(function create$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              view = _ref3.view;
              return _context3.abrupt("return", view.render('user.create'));

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      });
    }
  }, {
    key: "edit",
    value: function edit(_ref4) {
      var view, params, user;
      return regeneratorRuntime.async(function edit$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              view = _ref4.view, params = _ref4.params;
              _context4.next = 3;
              return regeneratorRuntime.awrap(User.find(params.id));

            case 3:
              user = _context4.sent;
              return _context4.abrupt("return", view.render('user.edit', {
                'user': user.toJSON()
              }));

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      });
    }
  }, {
    key: "update",
    value: function update(_ref5) {
      var params, request, response, session, user;
      return regeneratorRuntime.async(function update$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              params = _ref5.params, request = _ref5.request, response = _ref5.response, session = _ref5.session;
              _context5.next = 3;
              return regeneratorRuntime.awrap(User.find(params.id));

            case 3:
              user = _context5.sent;
              user.username = request.input('username');
              user.email = request.input('email');
              user.password = request.input('password') ? request.input('password') : user.password;
              _context5.next = 9;
              return regeneratorRuntime.awrap(user.save());

            case 9:
              session.flash({
                notification: 'successfully updated'
              });
              return _context5.abrupt("return", response.redirect('/user'));

            case 11:
            case "end":
              return _context5.stop();
          }
        }
      });
    }
  }, {
    key: "destroy",
    value: function destroy(_ref6) {
      var params, response, session, user;
      return regeneratorRuntime.async(function destroy$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              params = _ref6.params, response = _ref6.response, session = _ref6.session;
              _context6.next = 3;
              return regeneratorRuntime.awrap(User.find(params.id));

            case 3:
              user = _context6.sent;
              user["delete"]();
              session.flash({
                notification: 'successfully deleted'
              });
              return _context6.abrupt("return", response.redirect('/user'));

            case 7:
            case "end":
              return _context6.stop();
          }
        }
      });
    }
  }]);

  return UserController;
}();

module.exports = UserController;