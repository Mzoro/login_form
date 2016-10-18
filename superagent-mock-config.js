module.exports = [
  {
    pattern: '/login.json',
    fixtures: function (match, params, headers) {

        if(params['login']['userName']=='user' && params['login']['password']=='pass') {
          return [
            { "Auth"    :"Logged",
              "Language":"EN" }
          ];
        } else {
          return [
            { "Auth":"Denied" }
          ];
        }
    },

    get: function (match, data) {
      return data
    },
    post: function (match, data) {
      return data
    }
  }
];