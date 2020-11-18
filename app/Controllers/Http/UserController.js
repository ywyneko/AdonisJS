'use strict'
const User = use('App/Models/User');
class UserController {
    async index({view})
    {
        const users = await User.all();
        return view.render('user.index',{'users' : users.toJSON()})
    }

    async store({request, response , session})
    {
        const user = new User();
        user.username = request.input('username');
        user.email = request.input('email');
        user.password = request.input('password');
        await user.save();
        session.flash({notification : 'successfully created'})
        return response.redirect('/user');
    }

    async create({view})
    {
        return view.render('user.create')
    }

    async edit({view,params})
    {
        const user = await User.find(params.id);
        return view.render('user.edit',{'user' : user.toJSON()})
    }

    async update({params,request,response,session})
    {
        const user = await User.find(params.id);
        user.username = request.input('username');
        user.email = request.input('email');
        user.password = request.input('password') ? request.input('password') : user.password;
        await user.save();
        session.flash({notification : 'successfully updated'});
        return response.redirect('/user');
    }

    async destroy({params,response,session})
    {
        const user = await User.find(params.id);
        user.delete();
        session.flash({notification : 'successfully deleted'});
        return response.redirect('/user');
    }
}

module.exports = UserController
